import type { MetadataRoute } from "next";
import { pillars } from "@/lib/pillars";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const pillarRoutes: MetadataRoute.Sitemap = pillars.map((pillar) => ({
    url: `${siteConfig.url}/${pillar.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...pillarRoutes];
}
