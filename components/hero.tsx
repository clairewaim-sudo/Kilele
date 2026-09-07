import Link from "next/link";
import { whatsappLink } from "@/lib/site";

type HeroProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, title, tagline, description, secondaryCta }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-forest to-forest-deep px-4 py-16 text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-left">
        <p className="text-sm font-semibold tracking-[0.3em] text-sage">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 font-tagline text-xl italic text-sage">{tagline}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sage px-6 py-3 font-semibold text-forest transition-colors hover:bg-sage-deep"
          >
            Start a WhatsApp Chat
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:border-sage hover:text-sage"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
