import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <Section
      index="03"
      label="The way we build"
      title={
        <>
          A clear path from <span className="mark">idea</span> to production.
        </>
      }
    >
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {process.map((step, index) => (
          <Reveal
            key={step.step}
            delay={index * 0.08}
            y={24}
            className="group relative border-t border-border pt-7"
          >
            <span
              className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
              aria-hidden="true"
            />
            <span className="font-display font-medium tracking-tight text-balance stroked block text-6xl md:text-7xl leading-none transition-colors duration-300 group-hover:text-accent">
              {step.step}
            </span>
            <h3 className="font-display font-medium tracking-tight text-balance mt-5 text-xl md:text-2xl">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
