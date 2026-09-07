import { PillarPage } from "@/components/pillar-page";
import { buildMetadata } from "@/lib/metadata";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("overlanding")!;

export const metadata = buildMetadata({
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  path: "/overlanding",
});

export default async function OverlandingPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>;
}) {
  const { sub } = await searchParams;
  return <PillarPage pillar={pillar} highlightSlug={sub} />;
}
