import type { Faq } from "@/lib/content";
import Reveal from "./reveal";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <Reveal key={item.question} y={16}>
          <details className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-start gap-5 py-6 transition-colors hover:text-accent md:gap-8">
              <span className="mt-2 font-sans text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="display-title flex-1 text-lg leading-snug md:text-2xl">
                {item.question}
              </span>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-base transition-all duration-300 group-open:border-accent group-open:bg-accent group-open:text-white">
                <span
                  className="transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="max-w-2xl pb-7 pl-[3.25rem] pr-10 text-sm leading-relaxed text-muted md:pl-[4.5rem] md:text-base">
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
