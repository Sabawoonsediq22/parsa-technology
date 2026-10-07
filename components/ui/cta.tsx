import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./reveal";

type CtaProps = {
  label?: string;
  headline: ReactNode;
  linkLabel?: string;
  linkHref?: string;
};

export default function Cta({
  label = "Let's talk",
  headline,
  linkLabel = "Start a project",
  linkHref = "/contact",
}: CtaProps) {
  return (
    <section className="section border-t border-border">
      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow mb-6">— {label}</p>
          <h2 className="display-title mx-auto max-w-5xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            {headline}
          </h2>
          <Link
            href={linkHref}
            className="mt-10 inline-block font-display text-xl italic text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-2xl"
          >
            {linkLabel} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
