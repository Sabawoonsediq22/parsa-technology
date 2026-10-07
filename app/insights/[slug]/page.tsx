import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/ui/cta";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import ArticleCard from "@/components/cards/article-card";
import {
  articles,
  formatDate,
  getArticleBySlug,
  type ArticleBlock,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      url: `/insights/${article.slug}`,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-14 font-display text-2xl font-light md:text-3xl">
        {block.text}
      </h2>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-6 space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
      {block.text}
    </p>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const more = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <article className="px-6 pb-4 pt-36 md:px-12 md:pt-48">
        <div className="shell max-w-4xl">
          <Reveal>
            <Link
              href="/insights"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              ← All insights
            </Link>

            <p className="mt-10 text-xs uppercase tracking-widest text-muted">
              {article.category} · {formatDate(article.date)} ·{" "}
              {article.readingTime}
            </p>

            <h1 className="display-title mt-5 text-4xl leading-[1.05] md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 border-l-2 border-accent pl-5 text-base leading-relaxed text-muted md:text-lg">
              {article.excerpt}
            </p>
          </Reveal>

          <div className="mt-12">
            {article.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </div>
      </article>

      <Section
        label="Keep reading"
        title="More from the team."
        action={
          <Link
            href="/insights"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            All posts →
          </Link>
        }
      >
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {more.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06} y={32}>
              <ArticleCard article={item} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta
        label="Let's talk"
        headline={
          <>
            Have an idea worth <span className="accent-italic">building</span>?
          </>
        }
      />
    </>
  );
}
