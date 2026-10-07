import Reveal from "./reveal";

type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  intro?: string;
  meta?: string;
};

export default function PageHero({
  label,
  title,
  intro,
  meta,
}: PageHeroProps) {
  return (
    <section className="px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48">
      <div className="shell">
        <Reveal>
          <p className="eyebrow mb-6 flex flex-wrap items-center gap-3">
            <span
              className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent"
              aria-hidden="true"
            />
            {label}
            {meta ? <span className="text-muted/60">· {meta}</span> : null}
          </p>
          <h1 className="display-title text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
