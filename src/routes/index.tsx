import { createFileRoute } from "@tanstack/react-router";
import { useRevealController } from "@/hooks/use-reveal-controller";
import { canonicalUrl } from "@/lib/site-config";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/sections/Hero";
import { EditorialServiceList } from "@/components/sections/EditorialServiceList";
import { RitualFeature } from "@/components/sections/RitualFeature";
import { StudioEditorial } from "@/components/sections/StudioEditorial";
import { GalleryRail } from "@/components/sections/GalleryRail";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { PracticalInfo } from "@/components/sections/PracticalInfo";

export const Route = createFileRoute("/")({
  head: () => {
    const canonical = canonicalUrl("/");

    return {
      meta: [
        { title: "RITO Studio — Beauty & Care Atelier · Padova" },
        {
          name: "description",
          content:
            "Un atelier contemporaneo dedicato a capelli, pelle e benessere. Trattamenti su misura, gesti precisi e il tempo necessario per ascoltarti.",
        },
        { name: "robots", content: "noindex, follow" },
        { property: "og:title", content: "RITO Studio — Beauty & Care Atelier" },
        {
          property: "og:description",
          content: "La bellezza, nel suo ritmo. Beauty & Care Atelier a Padova.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: Index,
});

function Index() {
  useRevealController();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SkipLink />
      <StickyHeader />
      <main id="contenuto">
        <Hero />
        <EditorialServiceList />
        <RitualFeature />
        <StudioEditorial />
        <GalleryRail />
        <FaqSection />
        <BookingCTA />
        <PracticalInfo />
      </main>
      <Footer />
    </div>
  );
}
