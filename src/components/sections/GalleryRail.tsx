import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { gallerySlots } from "@/lib/site-config";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const scrollDescriptionId = "gallery-scroll-description";
const scrollEndThreshold = 8;

export function GalleryRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [hasMoreContent, setHasMoreContent] = useState(true);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateScrollHint = () => {
      const remainingScroll = rail.scrollWidth - rail.clientWidth - rail.scrollLeft;
      setHasMoreContent(remainingScroll > scrollEndThreshold);
    };

    const animationFrame = window.requestAnimationFrame(updateScrollHint);
    rail.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(updateScrollHint) : null;
    resizeObserver?.observe(rail);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      rail.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section
      aria-label="Immagini dello studio"
      className="bg-surface pb-20 pt-4 md:pb-24 md:pt-5 lg:pt-6"
    >
      <div className="container-editorial">
        <p id={scrollDescriptionId} className="sr-only">
          Su schermi piccoli, scorri orizzontalmente per visualizzare tutte le immagini.
        </p>
        <div className="relative min-w-0">
          <div
            ref={railRef}
            role="list"
            tabIndex={0}
            aria-describedby={scrollDescriptionId}
            className="-mx-5 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-12 lg:gap-6"
          >
            {gallerySlots.map((slot, index) => {
              const offsets = ["", "md:mt-8 lg:mt-12", "", "md:mt-5 lg:mt-8"];

              return (
                <div
                  key={slot.id}
                  role="listitem"
                  className={`w-[72%] shrink-0 snap-start md:w-auto lg:col-span-3 ${offsets[index]}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
                >
                  <ImagePlaceholder
                    ratio={slot.ratio}
                    tone={slot.tone}
                    src={slot.src}
                    alt={slot.alt}
                    objectPosition={slot.objectPosition}
                    sizes="(min-width: 1024px) 23vw, (min-width: 768px) 48vw, 72vw"
                  />
                </div>
              );
            })}
          </div>

          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 -right-5 w-14 bg-gradient-to-l from-surface to-transparent transition-opacity duration-200 motion-reduce:transition-none md:hidden ${
              hasMoreContent ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            data-js-only
            aria-hidden
            className={`pointer-events-none absolute right-2 top-1/2 z-10 -translate-y-1/2 transition-opacity duration-200 motion-reduce:transition-none md:hidden ${
              hasMoreContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas/90 text-accent-strong backdrop-blur-sm">
              <ArrowRight className="rito-gallery-arrow-nudge" size={18} strokeWidth={1.6} />
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rito-gallery-arrow-nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(0.3rem); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .rito-gallery-arrow-nudge {
            animation: rito-gallery-arrow-nudge 1.55s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          }
        }
      `}</style>
    </section>
  );
}
