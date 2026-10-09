import Link from "next/link";
import { OutlineLink } from "@/components/ui/buttons";

export default function NotFound() {
  return (
    <section className="blueprint section flex min-h-[75vh] flex-col items-center justify-center text-center">
      <span
        className="display-title stroked block text-[clamp(5rem,18vw,12rem)] leading-none"
        aria-hidden="true"
      >
        404
      </span>
      <p className="mt-8 text-[11px] text-muted">— Signal lost</p>
      <h1 className="display-title mt-5 text-[clamp(2rem,6vw,4.5rem)] leading-[0.95]">
        This page <span className="mark">moved on</span>.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        The page you are looking for does not exist or has been relocated.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <OutlineLink href="/">Back to home</OutlineLink>
        <Link
          href="/contact"
          className="link-slide font-sans text-[11px] text-muted transition-colors hover:text-accent"
        >
          Contact us →
        </Link>
      </div>
    </section>
  );
}
