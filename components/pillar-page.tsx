import { Hero } from "@/components/hero";
import { SubcategoryList } from "@/components/subcategory-list";
import { TrustBadges } from "@/components/trust-badges";
import type { Pillar } from "@/lib/pillars";

/**
 * Shared layout for every pillar page (camping, hiking, overlanding,
 * portable power). Keeping this in one place means the four pillar pages
 * stay visually consistent — one design system, pillar-specific copy.
 */
export function PillarPage({ pillar }: { pillar: Pillar }) {
  return (
    <>
      <Hero
        eyebrow={pillar.name}
        title={pillar.heroTitle}
        tagline={pillar.heroTagline}
        description={pillar.heroDescription}
      />

      <section className="bg-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-forest">{pillar.name} Categories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            Our {pillar.name.toLowerCase()} range is growing. Here&apos;s what we&apos;re building
            towards — chat to us on WhatsApp if you&apos;re after something specific today.
          </p>
          <div className="mt-8">
            <SubcategoryList subcategories={pillar.subcategories} />
          </div>
        </div>
      </section>

      <TrustBadges />
    </>
  );
}
