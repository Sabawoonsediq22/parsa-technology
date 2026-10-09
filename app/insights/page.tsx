import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import Cta from "@/components/ui/cta";
import Reveal from "@/components/ui/reveal";
import ArticleCard from "@/components/cards/article-card";
import Visual from "@/components/ui/visual";
import { articles, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical write-ups from Parsa Technology on software development, web technologies, UI/UX design, digital transformation and business software.",
};

export default function InsightsPage() {
  const [featured, ...latest] = articles;

  return (
    <>
      <PageHero
        label="Insights"
        title={
          <>
            Thinking in <span className="accent-italic">public</span>.
          </>
        }
        intro="Deep dives on the systems we build, write-ups of decisions we made on real projects, and the occasional opinion we are happy to defend."
      />

      <Section label="Featured article" title="Start here.">
        <Reveal y={40}>
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-7">
              <Visual
                index="01"
                label={featured.category}
                ratio="pt-[64%] md:pt-[58%]"
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[11px]">
                <span className="text-accent">{featured.category}</span>
                <span className="text-muted/50">/</span>
                <span className="text-muted">{formatDate(featured.date)}</span>
                <span className="text-muted/50">/</span>
                <span className="text-muted">{featured.readingTime}</span>
              </p>
              <h3 className="display-title text-3xl leading-[1.03] transition-colors group-hover:text-accent md:text-4xl lg:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex w-fit items-center gap-3 border-t border-border pt-4 font-sans text-[11px] text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                Read article
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section
        label="Latest articles"
        title="Recent writing."
        action={
          <p className="hidden text-sm text-muted md:block">
            {articles.length} articles
          </p>
        }
      >
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {latest.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06} y={32}>
              <ArticleCard article={article} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta
        label="Say hello"
        headline={
          <>
            Working on something{" "}
            <span className="accent-italic">interesting</span>?
          </>
        }
      />
    </>
  );
}
