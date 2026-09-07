const badges = [
  {
    title: "Genuine Gear Promise",
    description:
      "Every brand we carry is sourced through authorised distributors or directly from the manufacturer. No counterfeits. No grey-market units.",
  },
  {
    title: "Nairobi-Based",
    description: "Local team, local advice, fast WhatsApp replies — run by people who live this lifestyle.",
  },
  {
    title: "Built for the Long Run",
    description: "We favour gear with real durability and warranty backing. Buy once, use for years.",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-forest">Why Kilele</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-forest">{badge.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
