import type { Metadata } from "next";
import { siteConfig } from "./site";

/**
 * Builds consistent page metadata (title, description, canonical, Open
 * Graph) so every route gets correct SEO tags without repeating the same
 * boilerplate. Pass a path like "/camping" — leave empty for the homepage.
 */
export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_KE",
      type: "website",
    },
  };
}
