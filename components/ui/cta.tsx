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
  label = "Say hello",
  headline,
  linkLabel = "Start a project",
  linkHref = "/contact",
}: CtaProps) {
  return (
    <section className="on-accent relative overflow-hidden border-t border-border bg-accent text-white">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute right-[-15%] top-1/2 h-112 w-md -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        aria-hidden="true"
        style={{ backgroundColor: "#ffffff" }}
      />

      <div className="shell relative px-6 py-20 md:px-12 md:py-28">
        <Reveal className="relative border border-white/30 p-7 md:p-14">
          <span
            className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-white"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-white"
            aria-hidden="true"
          />

          <p className="text-xs font-medium text-white/75">
            — {label}
          </p>

          <h2 className="font-display font-medium tracking-tight text-balance mt-6 max-w-5xl text-5xl md:text-7xl">
            {headline}
          </h2>

          <Link
            href={linkHref}
            className="group/cta mt-10 inline-flex items-center gap-4 border border-white/60 px-6 py-4 text-sm font-medium leading-none text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-accent md:mt-12"
          >
            {linkLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            >
              <path
                d="M1 7h11M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
