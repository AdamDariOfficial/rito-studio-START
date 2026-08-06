export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    id: "scegliere",
    question: "Come scelgo il trattamento giusto?",
    answer:
      "Raccontaci l'esigenza principale. Ti aiuteremo a scegliere durante la consulenza iniziale.",
  },
  {
    id: "arrivo",
    question: "Quanto prima devo arrivare?",
    answer: "Cinque minuti sono sufficienti, salvo indicazioni diverse ricevute dallo studio.",
  },
  {
    id: "modifica",
    question: "Posso modificare o annullare l'appuntamento?",
    answer:
      "Sì, chiamando lo studio e rispettando le condizioni concordate al momento della prenotazione.",
  },
  {
    id: "prezzi",
    question: "I prezzi sono definitivi?",
    answer:
      "I prezzi “da” indicano una base. Eventuali variazioni devono essere chiarite prima del trattamento.",
  },
  {
    id: "preparazione",
    question: "Come devo prepararmi?",
    answer:
      "Ogni scheda trattamento contiene le indicazioni essenziali. In caso di dubbi, contatta lo studio.",
  },
  {
    id: "regalo",
    question: "Posso regalare un trattamento?",
    answer: "Chiama lo studio per sapere se sono disponibili gift card o voucher.",
  },
] as const;
