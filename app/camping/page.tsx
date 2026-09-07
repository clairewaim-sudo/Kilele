import { PillarPage } from "@/components/pillar-page";
import { buildMetadata } from "@/lib/metadata";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("camping")!;

export const metadata = buildMetadata({
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  path: "/camping",
});

export default function CampingPage() {
  return <PillarPage pillar={pillar} />;
}
