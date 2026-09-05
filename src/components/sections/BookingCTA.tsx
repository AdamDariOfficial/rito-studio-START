import { Mail, MessageCircle } from "lucide-react";
import { BookingAction } from "@/components/BookingAction";
import { ctaLabels } from "@/lib/site-config";

export function BookingCTA() {
  return (
    <section aria-labelledby="booking-cta-heading" className="py-16 md:py-20">
      <div className="container-editorial">
        <div className="relative border border-ink bg-ink p-8 md:p-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow text-surface">Prenota</p>
              <h2
                id="booking-cta-heading"
                className="mt-4 font-display text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.05] text-white"
                data-reveal
              >
                Il tuo tempo <span className="italic">di cura.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-8">
              <p
                className="text-base leading-relaxed text-surface md:text-lg"
                data-reveal
                style={{ ["--reveal-delay" as string]: "80ms" }}
              >
                Raccontaci cosa stai cercando. Ti aiutiamo a scegliere il trattamento e il momento
                più adatto.
              </p>
              <div
                className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap"
                data-reveal
                style={{ ["--reveal-delay" as string]: "160ms" }}
              >
                <BookingAction
                  kind="booking"
                  ariaLabel={ctaLabels.requestAppointment}
                  className="action-primary inline-flex min-h-12 items-center justify-center gap-2 border border-white bg-white px-6 text-sm font-medium text-ink hover:border-surface hover:bg-surface focus-visible:outline-white"
                >
                  <MessageCircle aria-hidden size={16} strokeWidth={1.7} />
                  {ctaLabels.requestAppointment}
                </BookingAction>
                <BookingAction
                  kind="contact"
                  ariaLabel={ctaLabels.contact}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-white"
                >
                  <Mail aria-hidden size={16} strokeWidth={1.7} />
                  {ctaLabels.contact}
                </BookingAction>
              </div>
            </div>
          </div>
          <span aria-hidden className="absolute -top-px left-8 h-2 w-16 bg-accent" />
        </div>
      </div>
    </section>
  );
}
