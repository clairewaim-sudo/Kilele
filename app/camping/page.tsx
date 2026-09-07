import { PillarPage } from "@/components/pillar-page";
import { buildMetadata } from "@/lib/metadata";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("camping")!;

export const metadata = buildMetadata({
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  path: "/camping",
});

export default async function CampingPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>;
}) {
  const { sub } = await searchParams;
  return <PillarPage pillar={pillar} highlightSlug={sub} />;
}
