import Link from "next/link";
import { Logo } from "@/components/logo";
import { pillars } from "@/lib/pillars";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-2 border-forest bg-cream text-forest">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={28} variant="dark" />
              <p className="text-lg font-extrabold">{siteConfig.name.toUpperCase()}</p>
            </div>
            <p className="mt-2 text-sm text-forest/70">{siteConfig.tagline}</p>
          </div>
          <div>
            <p className="font-semibold text-forest">Categories</p>
            <ul className="mt-2 space-y-1 text-sm text-forest/80">
              {pillars.map((pillar) => (
                <li key={pillar.slug}>
                  <Link href={`/${pillar.slug}`} className="hover:text-forest-deep hover:underline">
                    {pillar.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-forest/15 pt-6 text-sm text-forest/60">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted in Nairobi for the Kenyan outdoor lifestyle.</p>
        </div>
      </div>
    </footer>
  );
}
