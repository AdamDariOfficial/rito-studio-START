import { createFileRoute } from "@tanstack/react-router";
import { useRevealController } from "@/hooks/use-reveal-controller";
import { canonicalUrl, site } from "@/lib/site-config";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/sections/Hero";
import { EditorialServiceList } from "@/components/sections/EditorialServiceList";
import { RitualFeature } from "@/components/sections/RitualFeature";
import { StudioEditorial } from "@/components/sections/StudioEditorial";
import { GalleryRail } from "@/components/sections/GalleryRail";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
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
          content: site.brand.description,
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
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${canonical}#website`,
                url: canonical,
                name: site.brand.name,
                description: site.brand.description,
                inLanguage: "it-IT",
              },
              {
                "@type": "WebPage",
                "@id": `${canonical}#webpage`,
                url: canonical,
                name: "RITO Studio — Demo Beauty & Wellness START",
                description: "Concept dimostrativo Tretnix per un sito Beauty & Wellness START.",
                inLanguage: "it-IT",
                isPartOf: { "@id": `${canonical}#website` },
              },
            ],
          }).replace(/</g, "\\u003c"),
        },
      ],
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
        <ReviewsSection />
        <BookingCTA />
        <PracticalInfo />
      </main>
      <Footer />
    </div>
  );
}
