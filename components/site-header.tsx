import Link from "next/link";
import { Logo } from "@/components/logo";
import { SiteSearchBar } from "@/components/site-search-bar";
import { pillars } from "@/lib/pillars";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-forest text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <Logo size={36} variant="light" />
          {siteConfig.name.toUpperCase()}
        </Link>

        <div className="md:flex-1">
          <SiteSearchBar />
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="hidden border-t border-white/10 bg-forest-deep md:block"
      >
        <div className="mx-auto flex max-w-6xl gap-2 px-4 sm:px-6">
          {pillars.map((pillar) => (
            <div key={pillar.slug} className="group relative">
              <Link
                href={`/${pillar.slug}`}
                className="inline-flex items-center gap-1 px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:text-sage"
              >
                {pillar.shortName}
                <span aria-hidden="true" className="text-xs">
                  ▾
                </span>
              </Link>

              <div className="invisible absolute left-0 top-full z-20 min-w-[220px] rounded-b-lg bg-white py-2 opacity-0 shadow-lg transition-opacity duration-150 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                {pillar.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/${pillar.slug}?sub=${sub.slug}`}
                    className="block px-4 py-2 text-sm text-forest hover:bg-cream"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
