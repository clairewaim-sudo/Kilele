import { PillarPage } from "@/components/pillar-page";
import { buildMetadata } from "@/lib/metadata";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("hiking")!;

export const metadata = buildMetadata({
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  path: "/hiking",
});

export default async function HikingPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>;
}) {
  const { sub } = await searchParams;
  return <PillarPage pillar={pillar} highlightSlug={sub} />;
}
