import { useCallback, useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site, ctaLabels } from "@/lib/site-config";
import { prefersReducedMotion, scrollToSection, scrollToTop } from "@/lib/scroll-to-anchor";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) =>
      !element.closest("[inert]") &&
      element.getAttribute("aria-hidden") !== "true" &&
      element.getClientRects().length > 0,
  );
}

function idFromHash(hash: string): string | null {
  return hash.startsWith("#") ? hash.slice(1) : null;
}

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const drawerId = useId();
  const modalRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);
  const wasOpenRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const drawerActive = open || closing;

  const openDrawer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setClosing(false);
    setOpen(true);
  }, []);

  const closeDrawer = useCallback((shouldRestoreFocus = true) => {
    restoreFocusRef.current = shouldRestoreFocus;

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (prefersReducedMotion()) {
      setClosing(false);
      setOpen(false);
      return;
    }

    setClosing(true);
    setOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setClosing(false);
      closeTimerRef.current = null;
    }, 320);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const ids = nav
      .map((item) => idFromHash(item.hash))
      .filter((value): value is string => Boolean(value));

    const compute = () => {
      scrollFrameRef.current = null;
      const y = window.scrollY;
      const activationLine = y + window.innerHeight * 0.35;

      setScrolled(y > 8);

      const sections = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: element.getBoundingClientRect().top + y };
        })
        .filter((section): section is { id: string; top: number } => Boolean(section))
        .sort((a, b) => a.top - b.top);

      if (!sections[0] || activationLine < sections[0].top - 8) {
        setActive(null);
        return;
      }

      let current: string | null = null;
      for (const section of sections) {
        if (section.top <= activationLine) current = section.id;
        else break;
      }
      setActive(current);
    };

    const scheduleCompute = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", scheduleCompute, { passive: true });
    window.addEventListener("resize", scheduleCompute);

    return () => {
      window.removeEventListener("scroll", scheduleCompute);
      window.removeEventListener("resize", scheduleCompute);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeDrawer(false);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [closeDrawer]);

  useEffect(() => {
    const modal = modalRef.current;
    const drawer = drawerRef.current;
    if (!modal || !drawer) return;

    if (!open) {
      if (!wasOpenRef.current) return;
      wasOpenRef.current = false;

      const shouldRestoreFocus = restoreFocusRef.current;
      restoreFocusRef.current = false;
      const restoreFrame = window.requestAnimationFrame(() => {
        if (shouldRestoreFocus) triggerRef.current?.focus({ preventScroll: true });
      });

      return () => window.cancelAnimationFrame(restoreFrame);
    }

    wasOpenRef.current = true;
    const focusFrame = window.requestAnimationFrame(() => {
      const firstDrawerControl = getFocusableElements(drawer)[0];
      (firstDrawerControl ?? drawer).focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(modal);
      if (focusable.length === 0) {
        event.preventDefault();
        triggerRef.current?.focus({ preventScroll: true });
        return;
      }

      const activeElement = document.activeElement;
      const activeIndex =
        activeElement instanceof HTMLElement ? focusable.indexOf(activeElement) : -1;

      if (activeIndex === -1) {
        event.preventDefault();
        const target = event.shiftKey ? focusable.at(-1) : focusable[0];
        target?.focus({ preventScroll: true });
      } else if (event.shiftKey && activeIndex === 0) {
        event.preventDefault();
        focusable.at(-1)?.focus({ preventScroll: true });
      } else if (!event.shiftKey && activeIndex === focusable.length - 1) {
        event.preventDefault();
        focusable[0]?.focus({ preventScroll: true });
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (event.target instanceof Node && modal.contains(event.target)) return;
      const firstDrawerControl = getFocusableElements(drawer)[0];
      (firstDrawerControl ?? triggerRef.current)?.focus({ preventScroll: true });
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [closeDrawer, open]);

  useEffect(() => {
    if (!drawerActive) return;

    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const previousScrollbarGutter = root.style.scrollbarGutter;

    root.style.scrollbarGutter = "stable";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousScrollbarGutter;
    };
  }, [drawerActive]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (drawerRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      closeDrawer();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeDrawer, open]);

  function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
    const id = idFromHash(hash);
    if (!id) return;

    event.preventDefault();
    setActive(id);
    if (open) closeDrawer();

    if (isHome) {
      window.requestAnimationFrame(() => scrollToSection(id));
      return;
    }

    void navigate({
      to: "/",
      hash: id,
      resetScroll: false,
      hashScrollIntoView: false,
    }).then(() => scrollToSection(id));
  }

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHome) return;

    event.preventDefault();
    setActive(null);
    if (open) closeDrawer();

    void navigate({
      to: "/",
      replace: true,
      resetScroll: false,
    }).then(() => scrollToTop());
  }

  return (
    <header
      ref={modalRef}
      role={open ? "dialog" : undefined}
      aria-modal={open ? true : undefined}
      aria-label={open ? "Menu di navigazione" : undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-canvas/95 backdrop-blur-sm transition-[border-color,background-color] duration-200 motion-reduce:transition-none",
        scrolled || drawerActive ? "border-b border-line" : "border-b border-transparent",
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-editorial flex h-full items-center justify-between gap-6">
        <Link
          to="/"
          resetScroll={!isHome}
          inert={open}
          onClick={handleLogoClick}
          className="font-display text-lg leading-none tracking-tight text-ink"
          aria-label={`${site.brand.name} — home`}
        >
          {site.brand.name}
        </Link>

        <nav
          inert={open}
          aria-label="Navigazione principale"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {nav.map((item) => {
            const id = idFromHash(item.hash);
            const isActive = Boolean(id && active === id);

            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(event) => handleAnchorClick(event, item.hash)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative py-1 text-[0.8125rem] transition-colors",
                  isActive ? "text-accent" : "text-ink hover:text-accent",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-accent transition-[width,opacity] duration-300 motion-reduce:transition-none",
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div inert={open} className="hidden lg:block">
          <a
            href={site.contact.phoneHref}
            aria-label={`${ctaLabels.bookPrimary}: ${site.contact.phone}`}
            className="action-primary inline-flex min-h-11 items-center border border-ink bg-ink px-5 text-sm font-medium text-white hover:border-accent-strong hover:bg-accent-strong"
          >
            {ctaLabels.book}
          </a>
        </div>

        <button
          data-js-only
          ref={triggerRef}
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-controls={drawerId}
          onClick={() => (open ? closeDrawer() : openDrawer())}
          className="relative inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          <Menu
            aria-hidden
            size={22}
            className={cn(
              "absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none",
              open
                ? "rotate-90 scale-0 opacity-0 motion-reduce:hidden"
                : "rotate-0 scale-100 opacity-100 motion-reduce:block",
            )}
          />
          <X
            aria-hidden
            size={22}
            className={cn(
              "absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none",
              open
                ? "rotate-0 scale-100 opacity-100 motion-reduce:block"
                : "-rotate-90 scale-0 opacity-0 motion-reduce:hidden",
            )}
          />
        </button>

        <noscript>
          <details className="relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center px-1 text-sm font-medium text-ink">
              Menu
            </summary>
            <div className="fixed inset-x-0 top-[var(--header-height)] border-b border-line bg-canvas">
              <div className="container-editorial pb-5 pt-3">
                <div className="border border-line bg-canvas p-5">
                  <nav aria-label="Menu senza JavaScript">
                    <ul className="flex flex-col">
                      {nav.map((item, index) => (
                        <li key={item.hash} className="border-b border-line last:border-b-0">
                          <a
                            href={`/${item.hash}`}
                            className="flex min-h-14 items-center justify-between py-4 font-display text-2xl text-ink"
                          >
                            <span>{item.label}</span>
                            <span className="eyebrow text-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <a
                    href={site.contact.phoneHref}
                    aria-label={`${ctaLabels.bookPrimary}: ${site.contact.phone}`}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white"
                  >
                    {ctaLabels.book}
                  </a>
                  <p className="mt-4 text-xs text-muted">{site.contact.locationLabel}</p>
                </div>
              </div>
            </div>
          </details>
        </noscript>
      </div>

      <div
        data-js-only
        id={drawerId}
        ref={drawerRef}
        aria-hidden={open ? undefined : true}
        inert={!open}
        tabIndex={-1}
        className={cn(
          "absolute inset-x-0 top-full z-50 grid origin-top transition-[grid-template-rows,opacity] duration-[320ms] ease-[var(--motion-ease-ui)] motion-reduce:transition-none lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container-editorial flex justify-end pb-5 pt-3">
            <div className="w-full border border-line bg-canvas/95 p-5 backdrop-blur-sm sm:max-w-md">
              <nav aria-label="Navigazione mobile">
                <ul className="flex flex-col">
                  {nav.map((item, index) => {
                    const id = idFromHash(item.hash);
                    const isActive = Boolean(id && active === id);

                    return (
                      <li key={item.hash} className="border-b border-line last:border-b-0">
                        <a
                          href={item.hash}
                          onClick={(event) => handleAnchorClick(event, item.hash)}
                          aria-current={isActive ? "location" : undefined}
                          style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
                          className={cn(
                            "flex min-h-14 items-center justify-between py-4 font-display text-2xl transition-[color,opacity,transform] duration-300 motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none",
                            open || closing
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0",
                            isActive ? "text-accent" : "text-ink",
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive ? (
                            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                          ) : (
                            <span className="eyebrow text-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <a
                href={site.contact.phoneHref}
                aria-label={`${ctaLabels.bookPrimary}: ${site.contact.phone}`}
                className="action-primary mt-5 inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white hover:border-accent-strong hover:bg-accent-strong"
              >
                {ctaLabels.book}
              </a>
              <p className="mt-4 text-xs text-muted">{site.contact.locationLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
