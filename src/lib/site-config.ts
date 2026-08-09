/**
 * Centralized configuration for RITO Studio START.
 * Public-facing copy stays polished while fictional contact details remain
 * explicit in the discreet demo disclosure and legal routes.
 */

export type BookingMode = "external" | "contact";

const mapQuery = "Prato della Valle, Padova";
const encodedMapQuery = encodeURIComponent(mapQuery);

export const site = {
  brand: {
    name: "RITO Studio",
    descriptor: "Beauty & Care Atelier",
    tagline: "La bellezza, nel suo ritmo.",
  },
  contact: {
    city: "Padova centro",
    area: "Zona Prato della Valle",
    locationLabel: "Padova centro · zona Prato della Valle",
    locationDetail:
      "Una zona centrale e facilmente raggiungibile. L'indirizzo esatto viene confermato al momento della prenotazione.",
    email: "info@ritostudio.example",
    phone: "+39 049 000 0000",
    phoneHref: "tel:+390490000000",
    emailHref: "mailto:info@ritostudio.example",
    mapQuery,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`,
    mapExternalUrl: `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`,
  },
  hours: [
    { label: "Martedì–venerdì", value: "09:00–19:00" },
    { label: "Sabato", value: "09:00–17:00" },
    { label: "Domenica e lunedì", value: "chiuso" },
  ],
  booking: {
    mode: "contact" as BookingMode,
  },
  legal: {
    lastUpdated: "2 agosto 2026",
  },
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
  seo: {
    siteUrl: "https://rito-studio.tretnix.com",
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
  { label: "Contatti", hash: "#contatti" },
] as const;

export const ctaLabels = {
  bookPrimary: "Chiama per prenotare",
  discoverTreatments: "Scopri i trattamenti",
  requestAppointment: "Chiama per un appuntamento",
  book: "Prenota",
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
