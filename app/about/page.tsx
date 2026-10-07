import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import Cta from "@/components/ui/cta";
import Reveal from "@/components/ui/reveal";
import { coreValues, story, team, whyUs } from "@/lib/content";

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
            A software team for teams that ship{" "}
            <span className="accent-italic">serious</span> things.
          </>
        }
        intro="We are experienced software engineers, product designers and quality engineers who take on a handful of engagements at a time — so every client gets the senior team they met in the first conversation."
      />

      <Section label="Company story" title={story.lead}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 text-sm leading-relaxed text-muted md:col-span-6 md:text-base">
            {story.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Reveal
            delay={0.1}
            className="md:col-span-5 md:col-start-8 md:self-end"
          >
            <blockquote className="rounded-2xl border border-border p-8">
              <p className="font-display text-xl font-light leading-snug md:text-2xl">
                “Understand the problem completely, design deliberately, and
                ship software that holds up long after launch.”
              </p>
              <footer className="mt-6 border-t border-border pt-4 text-sm text-muted">
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
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06} y={20}>
              <div className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-accent/5 md:p-10">
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-light">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label="Why choose us" title="Reasons clients stay.">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05} y={24}>
              <div className="h-full border-t border-border pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <h3 className="font-display text-xl font-light">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label="Team overview" title="One team, five disciplines.">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.title}
              className="bg-background p-8 transition-colors duration-300 hover:bg-accent/5"
            >
              <span className="text-sm text-muted">{member.discipline}</span>
              <h3 className="mt-6 font-display text-2xl font-light">
                {member.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {member.description}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-between bg-elevated p-8">
            <p className="text-xs uppercase tracking-widest text-accent">
              Engagements
            </p>
            <div>
              <p className="font-display text-3xl font-light leading-snug">
                A handful at a time.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We keep our roster deliberately short so the people who scoped
                your project are the people who build it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Cta
        label="Work with us"
        headline={
          <>
            Sound like the{" "}
            <span className="accent-italic">team for you</span>?
          </>
        }
        linkLabel="Get in touch"
      />
    </>
  );
}
