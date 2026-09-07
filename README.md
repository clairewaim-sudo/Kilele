# Kilele

Kenya-focused outdoor gear authority and discovery platform. Brand: **Kilele**. Target domain: **outdoorgear.ke** (not yet connected — the site runs independently of the live domain until then).

## What this is (MVP scope)

An SEO-first content and discovery platform — not a full ecommerce store. See `KILELE — MASTER PROJECT PROMPT` (project brief, kept in conversation history) for the full business/brand/SEO strategy. In short: search demand → authority → trust → discovery → enquiries, with WhatsApp as the primary contact channel for now.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first config — theme tokens live in `app/globals.css`, there is no `tailwind.config.js`)
- No database, no CMS, no ecommerce yet — content lives in typed data files in `/lib` so it's easy to edit and easy to replace with a CMS/database later without changing page structure.

## Project structure

```
app/
  layout.tsx        Root layout — fonts, global metadata, header/footer/WhatsApp button
  page.tsx           Homepage
  camping/page.tsx        Pillar page
  hiking/page.tsx         Pillar page
  overlanding/page.tsx    Pillar page
  portable-power/page.tsx Pillar page
  robots.ts          Generates /robots.txt
  sitemap.ts         Generates /sitemap.xml
  opengraph-image.tsx Generates the default social-share image
components/
  site-header.tsx, site-footer.tsx, whatsapp-button.tsx
  hero.tsx, pillar-grid.tsx, pillar-page.tsx, subcategory-list.tsx, trust-badges.tsx
  breadcrumbs.tsx, json-ld.tsx, how-it-works.tsx, mountain-pattern.tsx
lib/
  site.ts        Site-wide constants (name, domain, WhatsApp number)
  pillars.ts     The four category pillars + candidate subcategories (single source of truth)
  metadata.ts    Helper that builds consistent SEO metadata (title, description, canonical, OG) per page
```

## Content model

The four pillars — **Camping, Hiking, Overlanding, Portable Power** — and their candidate subcategories are defined once in `lib/pillars.ts`. Each pillar route (`app/camping/page.tsx`, etc.) just looks up its pillar and renders the shared `<PillarPage>` component, so all four pages stay visually consistent and copy changes happen in one file.

**Important:** subcategories (e.g. "Camping Tents", "Hiking Boots") are currently shown as plain text/chips, deliberately **not linked to real pages yet**. Per the project's SEO strategy, subcategory pages should only be built once validated by real search demand and content is ready — not scaffolded automatically. See the comment in `lib/pillars.ts`.

## Brand system

- **Colors** (`app/globals.css`): deep forest green (`--forest`), light sage/mint (`--sage`), off-white cream (`--cream`). Approximated from the founder's design reference (a screenshot of an existing prototype) — see "Open decisions" below.
- **Typography**: Poppins (headings + body) and Playfair Display Italic (taglines only), loaded via `next/font/google` — self-hosted automatically by Next.js, no external font requests.
- **Logo** (`components/logo.tsx`): a compass-ring "K" mark — recreated as inline SVG from the founder's reference image (a raster upload can't be pulled out of the chat directly, so it's rebuilt as vector artwork instead, which is actually the better format: crisp at any size, tiny file weight, works as a favicon source). Used in the header, footer, and as the site favicon (`app/icon.svg`, `app/apple-icon.png`). Re-run `node scripts/generate-favicons.mjs` if the brand colors ever change.
- Design system is shared across all four pillars (one visual identity, pillar-specific copy) per the founder's decision.

## SEO groundwork already in place

- Per-page `<title>`, meta description, and canonical URL (`lib/metadata.ts`)
- Open Graph tags, plus a real OG image generated from code (`app/opengraph-image.tsx`, via Next's `next/og` — no external image needed)
- `robots.txt` and `sitemap.xml` generated from the same pillar data (`app/robots.ts`, `app/sitemap.ts`)
- Structured data (`components/json-ld.tsx`): sitewide Organization + WebSite JSON-LD, plus a BreadcrumbList on every pillar page that matches the visual breadcrumb trail exactly
- Visual breadcrumbs on pillar pages (`components/breadcrumbs.tsx`), e.g. Home / Camping
- Semantic heading hierarchy (one `<h1>` per page, `<h2>` for sections)
- Mobile-first, responsive layout
- Keyboard accessibility: the header's category dropdowns open on keyboard focus (Tab), not just mouse hover

Not yet done (intentionally, MVP scope): image alt text (no real photography yet — see "Open decisions"). Homepage and pillar pages render dynamically (not statically) since they read the search query/highlight from the URL — still fast, just not build-time cached.

## Analytics (PostHog)

PostHog is wired in but **disabled until you provide a project key** (`components/posthog-provider.tsx`) — it's a no-op if `NEXT_PUBLIC_POSTHOG_KEY` isn't set, so this is safe to leave as-is. To enable it:

1. Create a project at [posthog.com](https://posthog.com) (or use an existing one).
2. Copy `.env.local.example` to `.env.local` and fill in `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` from Project Settings → API keys.
3. Add the same two variables in your hosting provider's environment settings when you deploy.

It tracks pageviews automatically (including client-side navigations, since Next.js App Router doesn't do full page loads). No session replay or feature flags are set up — easy to add later if you want them.

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```

## Resolved decisions

- **WhatsApp Business number**: set to `254789682267` in `lib/site.ts`.
- **Domain**: confirmed as `outdoorgear.ke`, already the default in `lib/site.ts`.
- **Logo**: the compass-ring "K" mark is implemented (see Brand system above).

## Open decisions for the founder

1. **Exact brand colors** — current values in `app/globals.css` are my closest-match estimate from a screenshot of the reference prototype. If you can share the actual CSS/Tailwind config from that build, I'll swap in the exact values.
2. **Photography** — the founder asked for AI-generated photography, but this development environment has no image-generation tool available to me, so I can't produce photos directly. Options: (a) generate images yourself with an AI image tool and send me the files to place in `public/images`, (b) I use licensed stock photography as placeholders until real/AI imagery is ready, or (c) keep hero sections text-only (current state) a while longer. Let me know which you'd prefer — no fabricated/fake product photos will be used regardless.
