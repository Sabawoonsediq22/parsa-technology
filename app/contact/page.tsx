import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import Cta from "@/components/ui/cta";
import FaqList from "@/components/ui/faq";
import Reveal from "@/components/ui/reveal";
import ContactForm from "@/components/contact/contact-form";
import { contactChannels, contactFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Parsa Technology about your project — website, web app, mobile app, desktop software, UI/UX design or hosting. We reply within two working days.",
};

const steps = [
  {
    title: "You send the brief",
    description:
      "A few sentences is enough. Tell us what you are trying to achieve and any timeline you are working to.",
  },
  {
    title: "We reply with questions",
    description:
      "Within two working days you get a response from an engineer — not a sales script — with anything we need to scope properly.",
  },
  {
    title: "You get a written proposal",
    description:
      "Scope, milestones, timeline and cost, in writing. No obligation until you decide it is the right fit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Let&apos;s hear what you&apos;re{" "}
            <span className="accent-italic">building</span>.
          </>
        }
        intro="Share as much or as little as you already have — a rough idea is enough to start. An engineer replies to every message within two working days."
      />

      <Section label="Contact information" title="Ways to reach us.">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel, index) => {
            const content = (
              <>
                <span className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-xs uppercase tracking-widest text-accent">
                  {channel.label}
                </p>
                <p className="mt-3 font-display text-lg font-light leading-snug break-words md:text-xl">
                  {channel.value}
                </p>
                {channel.detail ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {channel.detail}
                  </p>
                ) : null}
              </>
            );

            return (
              <Reveal key={channel.label} delay={index * 0.06} y={20}>
                <div className="h-full bg-background p-8 transition-colors duration-300 hover:bg-accent/5">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="block transition-colors hover:text-accent"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        label="Project enquiry"
        title="Start the conversation."
        contentClassName="grid gap-10 md:grid-cols-12 md:gap-12"
      >
        <div className="md:col-span-4">
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-lg font-light">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-8">
          <ContactForm />
        </div>
      </Section>

      <Section
        label="FAQ"
        title="Before the first call."
        contentClassName="grid gap-10 md:grid-cols-12 md:gap-12"
      >
        <div className="md:col-span-4">
          <p className="text-sm leading-relaxed text-muted">
            Everything clients usually ask before a first call. Anything else —
            just send a message.
          </p>
        </div>
        <div className="md:col-span-8">
          <FaqList items={contactFaqs} />
        </div>
      </Section>

      <Cta
        label="Prefer email?"
        headline={
          <>
            Let&apos;s start with a{" "}
            <span className="accent-italic">conversation</span>.
          </>
        }
        linkLabel="hello@parsatechnology.com"
        linkHref="mailto:hello@parsatechnology.com"
      />
    </>
  );
}
