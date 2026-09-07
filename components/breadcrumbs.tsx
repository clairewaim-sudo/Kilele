import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";

type Crumb = { label: string; href: string };

/**
 * Visual breadcrumb trail plus its matching BreadcrumbList structured
 * data. Pass the full trail including the current page (last item is
 * rendered as plain text, not a link).
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative border-b border-white/10 bg-forest-deep px-4 py-2 sm:px-6">
      <BreadcrumbJsonLd items={items} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 text-xs text-white/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-white">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-sage">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
