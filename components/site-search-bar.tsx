"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { pillars } from "@/lib/pillars";
import { searchGear } from "@/lib/search";

/**
 * Site-wide search over our category/subcategory data (there's no product
 * database yet). Finds the best-matching pillar and routes there,
 * highlighting the matched subcategory. If nothing matches, routes to the
 * homepage with the query so we can invite a WhatsApp chat instead of
 * showing a dead-end "no results" page.
 */
export function SiteSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const result = searchGear(query, category);

    if (result) {
      const params = new URLSearchParams();
      if (result.subcategory) params.set("sub", result.subcategory.slug);
      const qs = params.toString();
      router.push(`/${result.pillar.slug}${qs ? `?${qs}` : ""}`);
    } else {
      router.push(`/?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="site-search-input" className="sr-only">
          Search gear
        </label>
        <input
          id="site-search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search boots, tents, power stations…"
          className="flex-1 rounded-full border-0 px-5 py-3 text-forest placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage"
        />

        <label htmlFor="site-search-category" className="sr-only">
          Category
        </label>
        <select
          id="site-search-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-full border-0 px-5 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-sage"
        >
          <option value="all">All categories</option>
          {pillars.map((pillar) => (
            <option key={pillar.slug} value={pillar.slug}>
              {pillar.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="rounded-full bg-sage px-6 py-2.5 font-semibold text-forest transition-colors hover:bg-sage-deep sm:py-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}
