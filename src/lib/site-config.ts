/**
 * Centralized configuration for RITO Studio START.
 * Public-facing copy stays polished while fictional contact details remain
 * explicit in the discreet demo disclosure and legal routes.
 */

export type ContactIntent = "booking" | "contact";

export type ContactChannelKind = "phone" | "whatsapp" | "email" | "external";

export type ContactChannel = {
  kind: ContactChannelKind;
  label: string;
  detail: string;
  href: string;
  external?: boolean;
};

type ReviewBase = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  dateLabel?: string;
};

export type DemoReview = ReviewBase & {
  reviewUrl?: never;
};

export type AuthenticReview = ReviewBase & {
  reviewUrl?: string;
};

export type DemoReviewsConfig = {
  enabled: boolean;
  mode: "demo";
  platform?: never;
  profileUrl?: never;
  averageRating?: never;
  reviewCount?: never;
  reviews: readonly DemoReview[];
};

export type AuthenticReviewsConfig = {
  enabled: boolean;
  mode: "authentic";
  platform?: string;
  profileUrl?: string;
  averageRating?: number;
  reviewCount?: number;
  reviews: readonly AuthenticReview[];
};

export type ReviewsConfig = DemoReviewsConfig | AuthenticReviewsConfig;

const siteUrl = "https://rito-studio.tretnix.com";
const phone = "+39 049 000 0000";
const phoneHref = "tel:+390490000000";
const email = "info@ritostudio.example";
const emailHref = `mailto:${email}`;
const whatsappNumber = "390490000000";
const whatsappBookingMessage = "Ciao! Vorrei prenotare un appuntamento da RITO Studio.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappBookingMessage)}`;
const mapQuery = "Prato della Valle, Padova";
const encodedMapQuery = encodeURIComponent(mapQuery);

export const site = {
  brand: {
    name: "RITO Studio",
    descriptor: "Beauty & Care Atelier",
    tagline: "La bellezza, nel suo ritmo.",
    kicker: "Beauty & Care Atelier · Padova",
    description:
      "Un atelier contemporaneo dedicato a capelli, pelle e benessere. Trattamenti su misura, gesti precisi e il tempo necessario per ascoltarti.",
  },
  contact: {
    city: "Padova centro",
    area: "Zona Prato della Valle",
    locationLabel: "Padova centro · zona Prato della Valle",
    locationDetail:
      "Una zona centrale e facilmente raggiungibile. L'indirizzo esatto viene confermato al momento della prenotazione.",
    email,
    phone,
    phoneHref,
    emailHref,
    whatsappHref,
    mapQuery,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`,
    mapExternalUrl: `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`,
  },
  hours: [
    { label: "Martedì–venerdì", value: "09:00–19:00" },
    { label: "Sabato", value: "09:00–17:00" },
    { label: "Domenica e lunedì", value: "chiuso" },
  ],
  contactActions: {
    booking: {
      dialogTitle: "Come preferisci prenotare?",
      dialogDescription: "Scegli WhatsApp o telefono.",
      channels: [
        {
          kind: "whatsapp",
          label: "WhatsApp",
          detail: "Scrivi ora",
          href: whatsappHref,
          external: true,
        },
        {
          kind: "phone",
          label: "Telefono",
          detail: "Chiama ora",
          href: phoneHref,
        },
      ] satisfies readonly ContactChannel[],
    },
    contact: {
      dialogTitle: "Come preferisci contattarci?",
      dialogDescription: "Scegli email o telefono.",
      channels: [
        {
          kind: "email",
          label: "Email",
          detail: "Scrivi ora",
          href: emailHref,
        },
        {
          kind: "phone",
          label: "Telefono",
          detail: "Chiama ora",
          href: phoneHref,
        },
      ] satisfies readonly ContactChannel[],
    },
  } satisfies Record<
    ContactIntent,
    {
      dialogTitle: string;
      dialogDescription: string;
      channels: readonly ContactChannel[];
    }
  >,
  heroMeta: [
    { label: "Prenotazione", value: "Su appuntamento" },
    { label: "Dove", value: "Padova centro" },
    { label: "Orari", value: "Mar–Sab" },
  ],
  reviews: {
    enabled: true,
    mode: "demo",
    reviews: [
      {
        author: "E.C.",
        rating: 5,
        text: "Un ambiente raccolto e preciso, con il tempo giusto per ascoltare e scegliere il trattamento con calma.",
        dateLabel: "Contenuto dimostrativo",
      },
      {
        author: "L.M.",
        rating: 5,
        text: "Gesti curati, spiegazioni chiare e un'atmosfera essenziale. Ogni passaggio sembra avere il suo ritmo.",
        dateLabel: "Contenuto dimostrativo",
      },
      {
        author: "S.R.",
        rating: 4,
        text: "Una proposta contemporanea e tranquilla, costruita intorno alle esigenze della persona senza fretta.",
        dateLabel: "Contenuto dimostrativo",
      },
    ],
  } satisfies ReviewsConfig,
  legal: {
    lastUpdated: "2 agosto 2026",
  },
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
  seo: {
    siteUrl,
    socialImageUrl: new URL("/images/rito/rito-hero-main.webp", siteUrl).toString(),
  },
} as const;

export function canonicalUrl(pathname: string) {
  return new URL(pathname, site.seo.siteUrl).toString();
}

export const nav = [
  { label: "Trattamenti", hash: "#trattamenti" },
  { label: "Metodo", hash: "#metodo" },
  { label: "Studio", hash: "#studio" },
  { label: "Galleria", hash: "#galleria" },
  { label: "FAQ", hash: "#faq" },
  ...(site.reviews.enabled ? [{ label: "Recensioni", hash: "#recensioni" }] : []),
  { label: "Contatti", hash: "#contatti" },
] as const;

export const ctaLabels = {
  bookPrimary: "Prenota un appuntamento",
  discoverTreatments: "Scopri i trattamenti",
  requestAppointment: "Prenota un appuntamento",
  book: "Prenota",
  contact: "Contattaci",
} as const;

export const serviceCategories = [
  {
    index: "01",
    name: "Hair Rituals",
    items: [
      { name: "Taglio essenziale", price: "€45" },
      { name: "Colore su misura", price: "da €80" },
      { name: "Trattamento texture", price: "da €65" },
      { name: "Piega e styling", price: "da €35" },
    ],
  },
  {
    index: "02",
    name: "Skin & Brow",
    items: [
      { name: "Rituale viso", price: "€70" },
      { name: "Brow design", price: "€25" },
      { name: "Lash lift", price: "€55" },
      { name: "Trattamento illuminante", price: "€80" },
    ],
  },
  {
    index: "03",
    name: "Hands & Nails",
    items: [
      { name: "Manicure essenziale", price: "€30" },
      { name: "Semipermanente", price: "€40" },
      { name: "Nail care", price: "€35" },
      { name: "Rituale mani", price: "€45" },
    ],
  },
  {
    index: "04",
    name: "Wellness",
    items: [
      { name: "Massaggio distensivo", price: "€70" },
      { name: "Rituale schiena", price: "€55" },
      { name: "Trattamento relax", price: "€85" },
      { name: "Percorso corpo", price: "da €95" },
    ],
  },
] as const;

export const servicesNote =
  "I prezzi indicati si intendono a partire da dove specificato. Eventuali variazioni vengono concordate durante la consulenza.";

export const gallerySlots = [
  {
    id: "gallery-01",
    ratio: "4 / 5",
    tone: "canvas",
    src: "/images/rito/rito-gallery-hair-01.webp",
    alt: "Dettaglio di capelli biondi mossi durante lo styling",
    objectPosition: "50% 50%",
  },
  {
    id: "gallery-02",
    ratio: "1 / 1",
    tone: "surface",
    src: "/images/rito/rito-gallery-skin-01.webp",
    alt: "Trattamento viso eseguito con un gesto delicato",
    objectPosition: "50% 50%",
  },
  {
    id: "gallery-03",
    ratio: "3 / 2",
    tone: "ink",
    src: "/images/rito/rito-gallery-space-01.webp",
    alt: "Professionista accanto a una postazione con specchi e strumenti",
    objectPosition: "50% 50%",
  },
  {
    id: "gallery-04",
    ratio: "3 / 4",
    tone: "canvas",
    src: "/images/rito/rito-gallery-professional-01.webp",
    alt: "Applicazione professionale del colore sui capelli",
    objectPosition: "50% 50%",
  },
] as const;
