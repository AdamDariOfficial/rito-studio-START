import { ImagePlaceholder } from "@/components/ImagePlaceholder";

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
              Prima osserviamo, ascoltiamo e definiamo insieme il risultato. Poi scegliamo tecnica,
              prodotti e tempi con un approccio misurato e trasparente.
            </p>
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
