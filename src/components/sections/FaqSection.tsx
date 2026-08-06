import { FaqAccordion } from "@/components/FaqAccordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] border-y border-line bg-surface py-12 md:py-16"
    >
      <div className="container-editorial grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Prima dell'appuntamento</p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl"
          >
            Domande essenziali.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
