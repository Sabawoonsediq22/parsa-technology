import Link from "next/link";
import { formatDate, type Article } from "@/lib/content";
import Visual from "../ui/visual";

type ArticleCardProps = {
  article: Article;
  index: number;
  showExcerpt?: boolean;
};

export default function ArticleCard({
  article,
  index,
  showExcerpt = true,
}: ArticleCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group h-full">
      <Link href={`/insights/${article.slug}`} className="block">
        <Visual
          index={number}
          label={article.category}
          ratio="pt-[70%] md:pt-[72%]"
          className="mb-5"
        />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="text-accent">{article.category}</span>
          <span className="text-muted/50">/</span>
          <span className="text-muted">{formatDate(article.date)}</span>
          <span className="text-muted/50">/</span>
          <span className="text-muted">{article.readingTime}</span>
        </div>
        <h3 className="display-title mt-4 text-xl leading-snug transition-colors duration-300 group-hover:text-accent md:text-2xl">
          {article.title}
        </h3>
        {showExcerpt ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {article.excerpt}
          </p>
        ) : null}
        <span className="mt-5 flex w-full items-center justify-between gap-3 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
          Read article
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </article>
  );
}
