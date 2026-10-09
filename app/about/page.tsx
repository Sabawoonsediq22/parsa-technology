import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import Cta from "@/components/ui/cta";
import Reveal from "@/components/ui/reveal";
import { coreValues, story, whyUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Parsa Technology is a compact, senior software studio designing and engineering websites, web and mobile applications, desktop software and digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Parsa Technology"
        title={
          <>
            We stay small so the work stays{" "}
            <span className="accent-italic">good</span>.
          </>
        }
        intro="Parsa Technology is a compact group of engineers, product designers and quality engineers running a limited number of projects at once — so nothing about your build gets handed down to people you have never met."
      />

      <Section label="Company story" title={story.lead}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 text-sm leading-relaxed text-muted md:col-span-6">
            {story.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Reveal
            delay={0.1}
            className="md:col-span-5 md:col-start-8 md:self-end"
          >
            <blockquote className="reg-marks relative border border-border p-7 md:p-8">
              <p className="font-display font-medium tracking-tight text-balance text-xl md:text-2xl">
                “Understand the problem completely, design deliberately, and
                ship software that holds up long after launch.”
              </p>
              <footer className="mt-6 border-t border-border pt-4 text-xs font-medium text-muted">
                How every Parsa engagement is scoped
              </footer>
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {story.paragraphs[2]}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section label="Core values" title="What we hold to.">
        <div className="grid border-l border-t border-border sm:grid-cols-2">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06} y={20}>
              <div className="group h-full border-b border-r border-border p-7 transition-colors duration-300 hover:bg-elevated/70 md:p-10">
                <span className="mb-6 block text-xs font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-medium tracking-tight text-balance text-2xl transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label="Why choose us" title="Reasons clients stay.">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05} y={24}>
              <div className="group h-full border-t border-border pt-6 transition-colors duration-300 hover:border-accent">
                <span className="mb-5 block text-xs font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-medium tracking-tight text-balance text-xl md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta
        label="Work with us"
        headline={
          <>
            Think we should{" "}
            <span className="accent-italic">work together</span>?
          </>
        }
        linkLabel="Get in touch"
      />
    </>
  );
}
