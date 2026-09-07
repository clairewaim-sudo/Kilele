import Link from "next/link";
import { pillars } from "@/lib/pillars";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-forest text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span aria-hidden="true">🏔️</span>
          {siteConfig.name.toUpperCase()}
        </Link>

        <nav aria-label="Main navigation" className="hidden gap-6 text-sm font-medium md:flex">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="text-white/90 transition-colors hover:text-sage"
            >
              {pillar.shortName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
