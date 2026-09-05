import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const methodSteps = [
  {
    index: "01",
    title: "Ascolto",
    body: "Una consulenza breve e concreta per capire esigenze, abitudini e aspettative.",
  },
  {
    index: "02",
    title: "Precisione",
    body: "Tecniche, prodotti e tempi scelti in base al servizio, non a un protocollo indistinto.",
  },
  {
    index: "03",
    title: "Continuità",
    body: "Indicazioni semplici per mantenere il risultato e pianificare il prossimo appuntamento.",
  },
] as const;

export function RitualFeature() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] bg-canvas py-24 md:py-32"
    >
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:pt-16">
            <p className="eyebrow" data-reveal>
              Metodo
            </p>
            <h2
              id="metodo-heading"
              className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.05] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Prima viene <span className="italic">l’ascolto.</span>
            </h2>
            <p
              className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              Osserviamo, ascoltiamo e definiamo insieme il risultato.
            </p>

            <ol
              className="mt-10 max-w-xl border-t border-line"
              aria-label="I tre principi del metodo"
            >
              {methodSteps.map((step, index) => (
                <li
                  key={step.index}
                  className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-3 border-b border-line py-7 md:grid-cols-[3.25rem_minmax(0,10rem)_minmax(0,1fr)] md:gap-x-5 md:py-10"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${180 + index * 30}ms` }}
                >
                  <span className="font-display text-2xl leading-none text-accent">
                    {step.index}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="col-start-2 max-w-md text-sm leading-relaxed text-muted md:col-start-auto md:text-base">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-5 md:col-start-1 md:row-start-1" data-reveal>
            <ImagePlaceholder
              ratio="3 / 4"
              tone="ink"
              src="/images/rito/rito-ritual-feature.webp"
              alt="Mani di una professionista durante una manicure di precisione"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
