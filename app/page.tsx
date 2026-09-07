import { Hero } from "@/components/hero";
import { PillarGrid } from "@/components/pillar-grid";
import { TrustBadges } from "@/components/trust-badges";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Premium Outdoor Gear for Kenya`,
  description: siteConfig.description,
});

type HomePageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { q } = await searchParams;

  return (
    <>
      <Hero
        eyebrow="Kenya"
        title="Premium Outdoor Gear for the Kenyan Lifestyle"
        tagline={siteConfig.tagline}
        description="Kilele equips those who already live the outdoor life — camping, hiking, overlanding and portable power gear chosen for quality, not just price."
        secondaryCta={{ label: "Explore Categories", href: "#categories" }}
      />

      {q && (
        <div className="bg-cream px-4 py-6 text-center sm:px-6">
          <p className="text-forest">
            We don&apos;t have an exact match for &ldquo;{q}&rdquo; listed yet —{" "}
            <a
              href={whatsappLink(`Hi Kilele, I'm looking for: ${q}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              chat with us on WhatsApp
            </a>{" "}
            and we&apos;ll help you find it.
          </p>
        </div>
      )}

      <PillarGrid />
      <TrustBadges />
    </>
  );
}
