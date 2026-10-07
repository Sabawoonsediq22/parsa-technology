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
    <article className="group">
      <Link href={`/insights/${article.slug}`} className="block">
        <Visual
          index={number}
          label={article.category}
          ratio="pt-[70%] md:pt-[72%]"
          className="mb-5"
        />
        <p className="mb-3 text-xs uppercase tracking-widest text-muted">
          {article.category} · {formatDate(article.date)}
        </p>
        <h3 className="font-display text-xl font-light leading-snug transition-colors group-hover:text-accent md:text-2xl">
          {article.title}
        </h3>
        {showExcerpt ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {article.excerpt}
          </p>
        ) : null}
        <span className="mt-4 inline-block text-xs text-muted transition-colors group-hover:text-accent">
          Read article →
        </span>
      </Link>
    </article>
  );
}
