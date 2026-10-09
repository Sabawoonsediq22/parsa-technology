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
    <section className="relative overflow-hidden border-b border-border px-6 pb-14 pt-32 md:px-12 md:pb-20 md:pt-44">
      <div
        className="blueprint absolute inset-0"
        aria-hidden="true"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent 85%)" }}
      />
      <div
        className="absolute -left-24 -top-32 h-80 w-80 rounded-full blur-[110px]"
        aria-hidden="true"
        style={{ backgroundColor: "var(--app-glow)" }}
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="inline-block h-2 w-2 animate-pulse bg-accent"
              aria-hidden="true"
            />
            <p className="text-sm text-muted">{label}</p>
            {meta ? (
              <span className="text-xs font-medium text-accent">
                / {meta}
              </span>
            ) : null}
          </div>

          <h1 className="font-display font-medium tracking-tight text-balance mt-7 max-w-5xl text-5xl md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {intro ? (
            <div className="mt-10 grid gap-6 border-t border-border pt-6 md:grid-cols-12">
              <p className="max-w-2xl text-base leading-relaxed text-muted md:col-span-7 md:col-start-6 md:text-lg">
                {intro}
              </p>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
