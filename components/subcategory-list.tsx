import type { Subcategory } from "@/lib/pillars";

/**
 * Displays a pillar's candidate subcategories as plain chips — deliberately
 * NOT links yet. Each becomes a real page only once validated by search
 * demand and content is ready (see lib/pillars.ts).
 *
 * `highlightSlug` marks the chip a site search matched, so a visitor gets
 * visual confirmation their search found something.
 */
export function SubcategoryList({
  subcategories,
  highlightSlug,
}: {
  subcategories: Subcategory[];
  highlightSlug?: string;
}) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {subcategories.map((sub) => {
        const isHighlighted = sub.slug === highlightSlug;
        return (
          <li
            key={sub.slug}
            className={
              isHighlighted
                ? "flex items-center gap-2 rounded-full border border-sage bg-sage px-4 py-2 text-sm font-semibold text-forest"
                : "flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-medium text-forest"
            }
          >
            <span aria-hidden="true">{sub.icon}</span>
            {sub.name}
          </li>
        );
      })}
    </ul>
  );
}
