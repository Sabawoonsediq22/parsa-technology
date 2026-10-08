import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { TextLink } from "@/components/ui/buttons";
import { articles, formatDate } from "@/lib/content";

export default function Insights() {
  const preview = articles.slice(0, 3);

  return (
    <Section
      index="06"
      label="Insights"
      title="Field notes"
      action={<TextLink href="/insights">All posts →</TextLink>}
    >
      <div className="border-t border-border">
        {preview.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.06} y={18}>
            <Link
              href={`/insights/${article.slug}`}
              className="group grid items-baseline gap-x-6 gap-y-3 border-b border-border py-7 transition-colors duration-300 hover:bg-elevated/70 md:grid-cols-12 md:py-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:col-span-2">
                {formatDate(article.date)}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent md:col-span-3">
                {article.category}
              </span>
              <span className="md:col-span-5">
                <span className="display-title block text-xl leading-snug transition-transform duration-300 group-hover:translate-x-1.5 md:text-2xl">
                  {article.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </span>
              </span>
              <span className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:col-span-2 md:justify-end">
                {article.readingTime}
                <span
                  className="text-muted/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
