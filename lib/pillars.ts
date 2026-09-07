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
  icon: string;
};

export type Pillar = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
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
    icon: "⛺",
    heroTitle: "Premium Camping Gear for Kenya",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "From weekend getaways to family trips upcountry, Kilele equips Kenyan campers with field-tested tents, sleeping bags, chairs and cooking gear. Chosen because it's the best — not the cheapest.",
    metaTitle: "Camping Gear Kenya | Tents, Sleeping Bags & More — Kilele",
    metaDescription:
      "Discover premium camping gear for Kenya — tents, sleeping bags, chairs, lighting and cooking equipment. Kilele equips the outdoor lifestyle.",
    subcategories: [
      { name: "Camping Tents", slug: "tents", icon: "⛺" },
      { name: "Family Tents", slug: "family-tents", icon: "🏕️" },
      { name: "Sleeping Bags", slug: "sleeping-bags", icon: "🛏️" },
      { name: "Camping Chairs", slug: "chairs", icon: "🪑" },
      { name: "Camping Tables", slug: "tables", icon: "🍽️" },
      { name: "Camping Lighting", slug: "lighting", icon: "🔦" },
      { name: "Camp Cooking Equipment", slug: "cooking", icon: "🍳" },
      { name: "Camping Coolers", slug: "coolers", icon: "🧊" },
      { name: "Camping Mattresses", slug: "mattresses", icon: "🛌" },
      { name: "Camping Power", slug: "power", icon: "🔌" },
    ],
  },
  {
    slug: "hiking",
    name: "Hiking",
    shortName: "Hiking",
    icon: "🥾",
    heroTitle: "Premium Hiking Gear in Nairobi",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "From the forest trails of Karura to the peaks of Mount Kenya, Kilele equips hikers, trekkers and mountaineers with field-tested boots, packs and apparel.",
    metaTitle: "Hiking Gear Kenya | Boots, Backpacks & Trekking Poles — Kilele",
    metaDescription:
      "Shop premium hiking gear for Kenya's trails and mountains — boots, backpacks, trekking poles and hydration. Trail-tested, genuine gear only.",
    subcategories: [
      { name: "Hiking Boots", slug: "boots", icon: "🥾" },
      { name: "Hiking Shoes", slug: "shoes", icon: "👟" },
      { name: "Hiking Backpacks", slug: "backpacks", icon: "🎒" },
      { name: "Trekking Poles", slug: "trekking-poles", icon: "🥢" },
      { name: "Hiking Clothing", slug: "clothing", icon: "🧥" },
      { name: "Hydration", slug: "hydration", icon: "💧" },
      { name: "Hiking Accessories", slug: "accessories", icon: "🧭" },
    ],
  },
  {
    slug: "overlanding",
    name: "Overlanding",
    shortName: "Overlanding",
    icon: "🚙",
    heroTitle: "Overlanding & 4x4 Camping Gear",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "For every weekend off the tarmac — rooftop tents, vehicle camping equipment, recovery gear and camp kitchens built for Kenya's 4x4 and overlanding community.",
    metaTitle: "Overlanding Gear Kenya | Rooftop Tents & 4x4 Camping — Kilele",
    metaDescription:
      "Overlanding and 4x4 camping gear for Kenya — rooftop tents, vehicle storage, camp kitchens and recovery equipment for the road less tarmacked.",
    subcategories: [
      { name: "Rooftop Tents", slug: "rooftop-tents", icon: "⛺" },
      { name: "4x4 Camping", slug: "4x4-camping", icon: "🚙" },
      { name: "Overlanding Gear", slug: "gear", icon: "🧰" },
      { name: "Vehicle Camping Equipment", slug: "vehicle-camping", icon: "🚐" },
      { name: "Storage", slug: "storage", icon: "📦" },
      { name: "Camp Kitchens", slug: "camp-kitchens", icon: "🍳" },
      { name: "Recovery Equipment", slug: "recovery", icon: "🛠️" },
    ],
  },
  {
    slug: "portable-power",
    name: "Portable Power",
    shortName: "Portable Power",
    icon: "🔋",
    heroTitle: "Portable Power for the Outdoors",
    heroTagline: "The Summit Starts Here.",
    heroDescription:
      "Power your camp, your cabin or your convoy — portable power stations, solar generators and solar panels built for life off the grid in Kenya.",
    metaTitle: "Portable Power Stations Kenya | Solar Generators — Kilele",
    metaDescription:
      "Portable power stations and solar generators for camping and off-grid living in Kenya. Reliable power for every outdoor trip.",
    subcategories: [
      { name: "Portable Power Stations", slug: "power-stations", icon: "🔋" },
      { name: "Solar Generators", slug: "solar-generators", icon: "☀️" },
      { name: "Portable Solar Panels", slug: "solar-panels", icon: "🔆" },
      { name: "Camping Power Solutions", slug: "camping-power", icon: "🔌" },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((pillar) => pillar.slug === slug);
}
