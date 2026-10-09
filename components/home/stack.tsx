import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { stack } from "@/lib/content";

export default function Stack() {

  return (
    <Section
      index="04"
      label="The toolkit"
      title={
        <>
          Proven tools, chosen <span className="mark">deliberately</span>.
        </>
      }
    >
      <Reveal className="grid gap-6 md:grid-cols-12">
        <p className="text-sm leading-relaxed text-muted md:col-span-5 md:col-start-8 md:text-base">
          Dependable, well-understood tools by default. Newer technology joins
          only when it solves something the rest cannot — and we document why.
        </p>
      </Reveal>

      <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group) => (
          <div
            key={group.group}
            className="group border-b border-r border-border p-6 transition-colors duration-300 hover:bg-elevated/60 md:p-8"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {group.group}
            </p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[16px] font-bold text-muted transition-colors duration-300 group-hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
