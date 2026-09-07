import Link from "next/link";
import { pillars } from "@/lib/pillars";

export function PillarGrid() {
  return (
    <section className="bg-forest px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold">Equip Your Lifestyle</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/75">
          Four pillars of the same outdoor life — pick where your next trip takes you.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-sage hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-sage">{pillar.name}</h3>
              <p className="mt-2 text-sm text-white/70">
                {pillar.subcategories.slice(0, 3).map((s) => s.name).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
