import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section label="In their words" title="Trusted by teams that ship.">
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08} y={32}>
            <figure className="flex h-full flex-col rounded-2xl border border-border p-8">
              <span
                className="font-display text-6xl leading-none text-accent"
                aria-hidden="true"
              >
                &quot;
              </span>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed md:text-lg">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <div className="font-display text-lg font-light">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {testimonial.role}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
