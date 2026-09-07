import { pillars, type Pillar, type Subcategory } from "./pillars";

export type SearchResult = {
  pillar: Pillar;
  subcategory?: Subcategory;
};

/**
 * Matches a free-text query against the pillar/subcategory data we
 * actually have (there's no product database yet — see lib/pillars.ts).
 * Returns the best-matching pillar (optionally with the specific
 * subcategory it matched), or null if nothing matches.
 */
export function searchGear(query: string, pillarSlug?: string): SearchResult | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  const scope =
    pillarSlug && pillarSlug !== "all" ? pillars.filter((p) => p.slug === pillarSlug) : pillars;

  for (const pillar of scope) {
    const subcategory = pillar.subcategories.find(
      (s) => s.name.toLowerCase().includes(q) || q.includes(s.name.toLowerCase())
    );
    if (subcategory) return { pillar, subcategory };
  }

  for (const pillar of scope) {
    if (pillar.name.toLowerCase().includes(q) || q.includes(pillar.name.toLowerCase())) {
      return { pillar };
    }
  }

  return null;
}
