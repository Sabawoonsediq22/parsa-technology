import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { TextLink } from "@/components/ui/buttons";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <Section
      id="services"
      label="What We Deliver"
      title="Services"
      action={<TextLink href="/contact">Discuss your project →</TextLink>}
    >
      <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05} y={20}>
            <div className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-accent/5 md:p-10 lg:p-12">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-sm text-muted">{service.index}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  →
                </span>
              </div>
              <h3 className="font-display text-2xl font-light md:text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
