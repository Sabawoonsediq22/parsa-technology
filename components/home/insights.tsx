import ArticleCard from "@/components/cards/article-card";
import Section from "@/components/ui/section";
import { TextLink } from "@/components/ui/buttons";
import { articles } from "@/lib/content";

export default function Insights() {
  const preview = articles.slice(0, 3);

  return (
    <Section
      label="Insights"
      title="Field notes"
      action={<TextLink href="/insights">All posts →</TextLink>}
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {preview.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>
    </Section>
  );
}
