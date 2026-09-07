import Link from "next/link";
import { pillars } from "@/lib/pillars";

export function PillarGrid() {
  return (
    <section id="categories" className="bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-forest">Equip Your Lifestyle</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
          Four pillars of the same outdoor life — pick where your next trip takes you.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="group rounded-2xl border border-forest/15 bg-white p-6 shadow-sm transition-colors hover:border-forest"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-2xl">
                <span aria-hidden="true">{pillar.icon}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-forest">{pillar.name}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {pillar.subcategories.slice(0, 3).map((s) => s.name).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
