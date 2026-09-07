import type { Subcategory } from "@/lib/pillars";

/**
 * Displays a pillar's candidate subcategories as plain chips — deliberately
 * NOT links yet. Each becomes a real page only once validated by search
 * demand and content is ready (see lib/pillars.ts).
 */
export function SubcategoryList({ subcategories }: { subcategories: Subcategory[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {subcategories.map((sub) => (
        <li
          key={sub.slug}
          className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-medium text-forest"
        >
          {sub.name}
        </li>
      ))}
    </ul>
  );
}
