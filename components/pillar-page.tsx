import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { SubcategoryList } from "@/components/subcategory-list";
import { TrustBadges } from "@/components/trust-badges";
import type { Pillar } from "@/lib/pillars";

/**
 * Shared layout for every pillar page (camping, hiking, overlanding,
 * portable power). Keeping this in one place means the four pillar pages
 * stay visually consistent — one design system, pillar-specific copy.
 */
export function PillarPage({ pillar, highlightSlug }: { pillar: Pillar; highlightSlug?: string }) {
  const highlighted = pillar.subcategories.find((s) => s.slug === highlightSlug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: pillar.name, href: `/${pillar.slug}` },
        ]}
      />

      <Hero
        eyebrow={pillar.name}
        title={pillar.heroTitle}
        tagline={pillar.heroTagline}
        description={pillar.heroDescription}
        secondaryCta={{ label: `Explore ${pillar.name}`, href: "#categories" }}
      />

      <section id="categories" className="bg-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-forest">{pillar.name} Categories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            {highlighted ? (
              <>
                You searched for <strong>{highlighted.name}</strong> — here&apos;s our{" "}
                {pillar.name.toLowerCase()} range. Chat to us on WhatsApp if you&apos;re after
                something specific today.
              </>
            ) : (
              <>
                Our {pillar.name.toLowerCase()} range is growing. Here&apos;s what we&apos;re
                building towards — chat to us on WhatsApp if you&apos;re after something specific
                today.
              </>
            )}
          </p>
          <div className="mt-8">
            <SubcategoryList subcategories={pillar.subcategories} highlightSlug={highlightSlug} />
          </div>
        </div>
      </section>

      <TrustBadges />
    </>
  );
}
