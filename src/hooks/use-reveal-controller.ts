import { useEffect } from "react";

/**
 * Global reveal controller. Adds `.js` to <html> and observes every element
 * that carries a content or divider reveal attribute, promoting it to its
 * revealed state when it enters the viewport. Elements already revealed are
 * skipped. When IntersectionObserver is unavailable, every element is revealed
 * immediately.
 */
export function useRevealController() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");

    function revealElement(el: HTMLElement) {
      if (el.hasAttribute("data-reveal")) {
        el.dataset.revealed = "true";
      }

      if (el.hasAttribute("data-divider-reveal")) {
        el.dataset.dividerRevealed = "true";
      }
    }

    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-divider-reveal]")
        .forEach(revealElement);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealElement(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    function observeAll() {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not([data-revealed]), [data-divider-reveal]:not([data-divider-revealed])",
        )
        .forEach((el) => io.observe(el));
    }

    observeAll();

    // Also re-run once after a frame, in case any elements mount slightly late.
    const raf = requestAnimationFrame(observeAll);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);
}
