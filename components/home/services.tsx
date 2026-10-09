import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { TextLink } from "@/components/ui/buttons";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <Section
      id="services"
      index="01"
      label="What we deliver"
      title="Services"
      action={<TextLink href="/contact">Discuss your project →</TextLink>}
    >
      <div className="border-t border-border">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04} y={16}>
            <div className="group relative grid items-baseline gap-x-6 gap-y-3 border-b border-border py-7 transition-colors duration-300 hover:bg-elevated/70 md:grid-cols-12 md:py-9">
              <span
                className="absolute -left-3 top-0 h-full w-0.75 origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100 md:-left-5"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-accent md:col-span-1">
                {service.index}
              </span>
              <h3 className="font-display font-medium tracking-tight text-balance text-2xl transition-transform duration-300 group-hover:translate-x-1.5 md:col-span-5 md:text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-5">
                {service.description}
              </p>
              <span
                className="hidden justify-end text-lg text-muted/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:flex"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
