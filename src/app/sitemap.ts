import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { docSlugs, legalSlugs } from "@/i18n/types";

const staticPaths = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/integrations", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/download", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/docs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ...docSlugs.map((slug) => ({
    path: `/docs/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  })),
  ...legalSlugs.map((slug) => ({
    path: `/legal/${slug}`,
    priority: 0.3,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    staticPaths.map(({ path, priority, changeFrequency }) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${siteConfig.url}/${alt}${path}`]),
        ),
      },
    })),
  );
}
