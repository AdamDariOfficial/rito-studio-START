import { useEffect, useState } from "react";
import { ExternalLink, Quote, Star } from "lucide-react";
import { RevealDivider } from "@/components/RevealDivider";
import { googleReviewsPreview, site } from "@/lib/site-config";

export function ReviewsSection() {
  const [previewEnabled, setPreviewEnabled] = useState(false);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    setPreviewEnabled(new URLSearchParams(window.location.search).get("reviewsPreview") === "1");
  }, []);

  const config = previewEnabled ? googleReviewsPreview : site.googleReviews;
  const reviews = config.reviews.slice(0, 3);

  if (!config.enabled || reviews.length === 0) return null;

  const roundedAverage = Math.round(config.averageRating);

  return (
    <section
      id="recensioni"
      aria-labelledby="recensioni-heading"
      className="relative scroll-mt-[calc(var(--header-height)+24px)] border-t border-transparent bg-canvas py-20 md:py-28"
    >
      <RevealDivider className="inset-x-0 -top-px h-px bg-line" />
      <div className="container-editorial">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7" data-reveal>
            <p className="eyebrow">Recensioni Google</p>
            <h2
              id="recensioni-heading"
              className="mt-5 font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] text-ink"
            >
              Le parole di chi <span className="italic text-accent">ci sceglie.</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="relative border-l border-transparent pl-5">
              <RevealDivider className="inset-y-0 -left-px w-px bg-line" />
              {config.averageRating > 0 && (
                <div className="flex items-center gap-3" data-reveal>
                  <span className="font-display text-3xl text-ink">
                    {config.averageRating.toLocaleString("it-IT", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </span>
                  <span
                    className="flex items-center gap-0.5 text-accent"
                    aria-label={`${config.averageRating.toLocaleString("it-IT")} stelle su 5`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        aria-hidden
                        size={15}
                        className={index < roundedAverage ? "fill-current" : "opacity-25"}
                      />
                    ))}
                  </span>
                </div>
              )}
              {config.reviewCount > 0 && (
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted" data-reveal>
                  {config.reviewCount.toLocaleString("it-IT")} recensioni
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 min-[1100px]:grid-cols-3 min-[1100px]:gap-0">
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className={`${
                index === 2 ? "sm:col-span-2 min-[1100px]:col-span-1" : ""
              } relative border-t border-transparent pt-7 min-[1100px]:border-l min-[1100px]:border-t-0 min-[1100px]:px-8 min-[1100px]:first:border-l-0 min-[1100px]:first:pl-0 min-[1100px]:last:pr-0`}
              style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
            >
              <RevealDivider className="inset-x-0 -top-px h-px bg-line min-[1100px]:hidden" />
              {index > 0 && (
                <RevealDivider className="inset-y-0 -left-px hidden w-px bg-line min-[1100px]:block" />
              )}

              <div className="flex items-start justify-between gap-4" data-reveal>
                <span
                  className="flex items-center gap-0.5 text-accent"
                  aria-label={`${review.rating} stelle su 5`}
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden
                      size={14}
                      className={starIndex < review.rating ? "fill-current" : "opacity-20"}
                    />
                  ))}
                </span>
                <Quote aria-hidden size={22} strokeWidth={1.3} className="text-accent/45" />
              </div>

              <blockquote
                className="mt-6 font-display text-[1.35rem] leading-[1.45] text-ink"
                data-reveal
              >
                “{review.text}”
              </blockquote>

              <div className="relative mt-7 border-t border-transparent pt-5 text-sm">
                <RevealDivider className="inset-x-0 -top-px h-px bg-line" />
                <p className="font-medium text-ink" data-reveal>
                  {review.author}
                </p>
                <div
                  className="mt-1 flex flex-wrap items-center justify-between gap-3 text-xs text-muted"
                  data-reveal
                >
                  <span>{review.dateLabel ?? "Google"}</span>
                  {review.reviewUrl && (
                    <a
                      href={review.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 px-1 text-ink underline-offset-4 hover:underline"
                    >
                      Google
                      <ExternalLink aria-hidden size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {config.profileUrl && (
          <div className="mt-10" data-reveal>
            <a
              href={config.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link min-h-11 text-sm font-medium"
            >
              Vedi tutte le recensioni su Google
              <ExternalLink aria-hidden size={15} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
