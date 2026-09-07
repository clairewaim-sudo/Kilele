/**
 * The four category pillars, and their candidate subcategories.
 *
 * This is the single source of truth for pillar pages (app/[pillar]/page.tsx).
 * Subcategories are listed as text for now — do NOT turn them into linked
 * pages until each one is validated by search demand and content is ready
 * (see north-star SEO strategy: page creation is demand-driven, not
 * automatic). Adding a subcategory page later means creating
 * app/[pillar]/[subcategory]/page.tsx and linking it from here.
 */
export type Subcategory = {
  name: string;
  slug: string;
};

export type Pillar = {
  slug: string;
  name: string;
  shortName: string;
  heroTitle: string;
  heroTagline: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  subcategories: Subcategory[];
};

export const pillars: Pillar[] = [
  {
    slug: "camping",
    name: "Camping",
    shortName: "Camping",
    heroTitle: "Premium Camping Gear for Kenya",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "From weekend getaways to family trips upcountry, Kilele equips Kenyan campers with field-tested tents, sleeping bags, chairs and cooking gear. Chosen because it's the best — not the cheapest.",
    metaTitle: "Camping Gear Kenya | Tents, Sleeping Bags & More — Kilele",
    metaDescription:
      "Discover premium camping gear for Kenya — tents, sleeping bags, chairs, lighting and cooking equipment. Kilele equips the outdoor lifestyle.",
    subcategories: [
      { name: "Camping Tents", slug: "tents" },
      { name: "Family Tents", slug: "family-tents" },
      { name: "Sleeping Bags", slug: "sleeping-bags" },
      { name: "Camping Chairs", slug: "chairs" },
      { name: "Camping Tables", slug: "tables" },
      { name: "Camping Lighting", slug: "lighting" },
      { name: "Camp Cooking Equipment", slug: "cooking" },
      { name: "Camping Coolers", slug: "coolers" },
      { name: "Camping Mattresses", slug: "mattresses" },
      { name: "Camping Power", slug: "power" },
    ],
  },
  {
    slug: "hiking",
    name: "Hiking",
    shortName: "Hiking",
    heroTitle: "Premium Hiking Gear in Nairobi",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "From the forest trails of Karura to the peaks of Mount Kenya, Kilele equips hikers, trekkers and mountaineers with field-tested boots, packs and apparel.",
    metaTitle: "Hiking Gear Kenya | Boots, Backpacks & Trekking Poles — Kilele",
    metaDescription:
      "Shop premium hiking gear for Kenya's trails and mountains — boots, backpacks, trekking poles and hydration. Trail-tested, genuine gear only.",
    subcategories: [
      { name: "Hiking Boots", slug: "boots" },
      { name: "Hiking Shoes", slug: "shoes" },
      { name: "Hiking Backpacks", slug: "backpacks" },
      { name: "Trekking Poles", slug: "trekking-poles" },
      { name: "Hiking Clothing", slug: "clothing" },
      { name: "Hydration", slug: "hydration" },
      { name: "Hiking Accessories", slug: "accessories" },
    ],
  },
  {
    slug: "overlanding",
    name: "Overlanding",
    shortName: "Overlanding",
    heroTitle: "Overlanding & 4x4 Camping Gear",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "For every weekend off the tarmac — rooftop tents, vehicle camping equipment, recovery gear and camp kitchens built for Kenya's 4x4 and overlanding community.",
    metaTitle: "Overlanding Gear Kenya | Rooftop Tents & 4x4 Camping — Kilele",
    metaDescription:
      "Overlanding and 4x4 camping gear for Kenya — rooftop tents, vehicle storage, camp kitchens and recovery equipment for the road less tarmacked.",
    subcategories: [
      { name: "Rooftop Tents", slug: "rooftop-tents" },
      { name: "4x4 Camping", slug: "4x4-camping" },
      { name: "Overlanding Gear", slug: "gear" },
      { name: "Vehicle Camping Equipment", slug: "vehicle-camping" },
      { name: "Storage", slug: "storage" },
      { name: "Camp Kitchens", slug: "camp-kitchens" },
      { name: "Recovery Equipment", slug: "recovery" },
    ],
  },
  {
    slug: "portable-power",
    name: "Portable Power",
    shortName: "Portable Power",
    heroTitle: "Portable Power for the Outdoors",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "Power your camp, your cabin or your convoy — portable power stations, solar generators and solar panels built for life off the grid in Kenya.",
    metaTitle: "Portable Power Stations Kenya | Solar Generators — Kilele",
    metaDescription:
      "Portable power stations and solar generators for camping and off-grid living in Kenya. Reliable power for every outdoor trip.",
    subcategories: [
      { name: "Portable Power Stations", slug: "power-stations" },
      { name: "Solar Generators", slug: "solar-generators" },
      { name: "Portable Solar Panels", slug: "solar-panels" },
      { name: "Camping Power Solutions", slug: "camping-power" },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((pillar) => pillar.slug === slug);
}
