import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <Section
      label="The way we build"
      title={
        <>
          A clear path from <span className="accent-italic">idea</span> to
          production.
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-4">
        {process.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.08} y={24}>
            <div className="border-t border-border pt-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-light md:text-2xl">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
