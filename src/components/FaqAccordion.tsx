import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { RevealDivider } from "@/components/RevealDivider";
import { faqItems, type FaqItem } from "@/data/content";

const INITIAL_FAQ_COUNT = 4;

function FaqEntry({
  item,
  index,
  disabled = false,
}: {
  item: FaqItem;
  index: number;
  disabled?: boolean;
}) {
  return (
    <Accordion.Item
      value={item.id}
      disabled={disabled}
      className="relative border-b border-transparent"
      style={{ ["--reveal-delay" as string]: `${Math.min(index * 60, 240)}ms` }}
    >
      <Accordion.Header data-reveal>
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
      <RevealDivider className="inset-x-0 -bottom-px h-px bg-line" />
    </Accordion.Item>
  );
}

export function FaqAccordion() {
  const [showAll, setShowAll] = useState(false);
  const initialItems = faqItems.slice(0, INITIAL_FAQ_COUNT);
  const additionalItems = faqItems.slice(INITIAL_FAQ_COUNT);

  return (
    <>
      <Accordion.Root type="single" collapsible className="relative border-t border-transparent">
        <RevealDivider className="inset-x-0 -top-px h-px bg-line" />
        {initialItems.map((item, index) => (
          <FaqEntry key={item.id} item={item} index={index} />
        ))}

        {additionalItems.length > 0 && (
          <div
            id="faq-extra-items"
            aria-hidden={!showAll}
            className={`grid transition-[grid-template-rows,opacity] motion-reduce:transition-none ${
              showAll
                ? "grid-rows-[1fr] opacity-100"
                : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
            style={{
              transitionDuration: "var(--motion-duration-ui)",
              transitionTimingFunction: "var(--motion-ease-ui)",
            }}
          >
            <div className="min-h-0 overflow-hidden">
              {additionalItems.map((item, index) => (
                <FaqEntry
                  key={item.id}
                  item={item}
                  index={index + INITIAL_FAQ_COUNT}
                  disabled={!showAll}
                />
              ))}
            </div>
          </div>
        )}
      </Accordion.Root>

      {additionalItems.length > 0 && (
        <button
          type="button"
          aria-expanded={showAll}
          aria-controls="faq-extra-items"
          onClick={() => setShowAll((current) => !current)}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent focus-visible:outline-offset-4"
        >
          {showAll ? "Mostra meno" : `Mostra altre ${additionalItems.length} domande`}
        </button>
      )}
    </>
  );
}
