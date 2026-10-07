import Link from "next/link";
import { OutlineLink } from "@/components/ui/buttons";

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-6">— 404</p>
      <h1 className="display-title text-5xl md:text-7xl">
        This page <span className="accent-italic">moved on</span>.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        The page you are looking for does not exist or has been relocated.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <OutlineLink href="/">Back to home</OutlineLink>
        <Link
          href="/contact"
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-accent"
        >
          Contact us →
        </Link>
      </div>
    </section>
  );
}
