import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { stack } from "@/lib/content";

export default function Stack() {
  return (
    <Section className="bg-surface/60">
      <Reveal className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <p className="eyebrow mb-4">— The toolkit</p>
          <h2 className="display-title text-4xl md:text-5xl lg:text-6xl">
            Proven tools, chosen{" "}
            <span className="accent-italic">deliberately</span>.
          </h2>
        </div>
        <p className="self-end text-sm leading-relaxed text-muted md:col-span-5 md:col-start-8 md:text-base">
          We default to well-understood technology and reach for newer tools
          only when there is a reason. Everything is typed end-to-end where we
          can, and every stack decision is documented so your team can read why
          it was made.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {stack.map((group) => (
          <div key={group.group} className="bg-background p-8">
            <p className="mb-6 text-xs uppercase tracking-widest text-muted">
              {group.group}
            </p>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-xl font-light transition-colors hover:text-accent"
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
