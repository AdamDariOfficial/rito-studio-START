import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/content";

export function FaqAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-line">
      {faqItems.map((item, index) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="border-b border-line"
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(index * 60, 240)}ms` }}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex min-h-20 w-full items-center justify-between gap-6 py-5 text-left font-display text-xl leading-tight text-ink hover:text-accent md:text-2xl">
              {item.question}
              <Plus
                aria-hidden
                size={20}
                className="shrink-0 transition-transform duration-[280ms] group-data-[state=open]:rotate-45 motion-reduce:transition-none"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-accordion-content overflow-hidden text-sm leading-relaxed text-muted">
            <p className="max-w-2xl pb-7 pr-10">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
