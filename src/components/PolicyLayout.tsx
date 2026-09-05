import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { RevealDivider } from "@/components/RevealDivider";
import { StickyHeader } from "@/components/StickyHeader";
import { site } from "@/lib/site-config";

interface PolicyLayoutProps {
  title: string;
  intro: string;
  children: ReactNode;
}

export function PolicyLayout({ title, intro, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <StickyHeader />

      <main
        id="contenuto"
        className="container-editorial pb-24 pt-[calc(var(--header-height)+4rem)] md:pb-32 md:pt-[calc(var(--header-height)+6rem)]"
      >
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">Informativa</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] text-ink">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{intro}</p>

          <div className="mt-14 space-y-10 text-[0.9375rem] leading-relaxed text-muted md:text-base [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:text-ink md:[&_h2]:text-3xl [&_li]:pl-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>

          <aside className="mt-16 border-l-2 border-accent pl-5 text-sm italic leading-relaxed text-ink">
            Questa informativa descrive la configurazione tecnica del sito dimostrativo. Prima
            dell&apos;uso per un&apos;attività reale deve essere completata con i dati del titolare
            e sottoposta a revisione professionale.
          </aside>

          <p className="relative mt-10 border-t border-transparent pt-6 text-xs text-muted">
            <RevealDivider className="inset-x-0 -top-px h-px bg-line" />
            Ultimo aggiornamento: {site.legal.lastUpdated}
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
