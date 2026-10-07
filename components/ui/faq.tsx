import type { Faq } from "@/lib/content";
import Reveal from "./reveal";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div>
      {items.map((item) => (
        <Reveal key={item.question} y={16}>
          <details className="group border-b border-border py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="font-display text-lg font-light md:text-2xl">
                {item.question}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-lg transition-all group-open:border-accent group-open:bg-accent group-open:text-white">
                <span
                  className="transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 max-w-2xl pr-16 text-sm leading-relaxed text-muted md:text-base">
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
