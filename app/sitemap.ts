import type { MetadataRoute } from "next";
import { articles, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/insights", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
  ];

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/insights/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pageEntries, ...articleEntries];
}
