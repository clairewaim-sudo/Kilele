import Link from "next/link";
import { MountainPattern } from "@/components/mountain-pattern";
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
    <section className="relative overflow-hidden border-y-2 border-forest bg-cream px-4 py-16 text-forest sm:px-6 sm:py-24">
      <MountainPattern className="text-sage opacity-70" />

      <div className="relative mx-auto max-w-3xl text-left">
        <p className="text-sm font-semibold tracking-[0.3em] text-forest">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 font-tagline text-xl italic text-forest">{tagline}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest/80">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-3 font-semibold text-cream transition-colors hover:bg-forest-deep"
          >
            Start a WhatsApp Chat
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-forest/50 px-6 py-3 font-semibold text-forest transition-colors hover:border-forest hover:bg-forest/5"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
