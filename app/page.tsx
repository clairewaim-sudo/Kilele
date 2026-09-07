import { Hero } from "@/components/hero";
import { PillarGrid } from "@/components/pillar-grid";
import { TrustBadges } from "@/components/trust-badges";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Premium Outdoor Gear for Kenya`,
  description: siteConfig.description,
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Kenya"
        title="Premium Outdoor Gear for the Kenyan Lifestyle"
        tagline={siteConfig.tagline}
        description="Kilele equips those who already live the outdoor life — camping, hiking, overlanding and portable power gear chosen for quality, not just price."
      />
      <PillarGrid />
      <TrustBadges />
    </>
  );
}
