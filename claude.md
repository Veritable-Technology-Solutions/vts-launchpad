# vts-launchpad — claude.md

Project context for the public Veritable Technology Solutions brand site.

## What this is

Single-page Next.js site at `veritabletechnologysolutions.com.au`, deployed via Vercel (auto from `master`). Statically exported.

## Brand positioning (current)

VTS sells **Fractional CTO + IT Infrastructure as a Service** to purpose-driven organisations. The pitch frames the offering as a productised "vehicle" — strategy, architecture, and operations packaged into one running technology function.

Anchor proof point: **Acacia Collective** — Australia's only member-owned strata management solution. Veritable is the platform and operations engine that makes the member-owned model commercially viable. Linked from the site at acaciacollective.com.au.

### Standalone — no Abundant Kindling reference

VTS is positioned as a standalone brand on its public website. **Do not add Abundant Kindling cross-links, "sister site" callouts, or "part of the AK group" framing**, even though Alex founded both. Decision made during the May 2026 reposition: VTS sells productised tech (CTO + infrastructure), AK sells systems-and-org consulting — public separation is deliberate.

If a future change feels like it would conflate them, raise it before merging.

## Stack

- Next.js 16 (App Router) + Turbopack
- Tailwind CSS v4 (`@theme` syntax in `app/globals.css`)
- React 19
- `lucide-react` for icons
- Poppins (Google Fonts via `next/font`)
- Static export (`output: "export"` in `next.config.ts`, `images.unoptimized: true`)
- No backend, no env vars, no DB. Mailto for contact.

## Page structure (`app/page.tsx`)

```
Nav (sticky, in app/layout.tsx)
Hero
Services         (4 pillars: Fractional CTO, IT-IaaS, AI workflows, Systems Integration)
HowItWorks       (Scope → Build → Run → Steer)
CaseStudy        (Acacia Collective)
WhyVeritable
FAQ              (Q&A — also feeds FAQPage JSON-LD for AI search)
Team             (Operating Team + Directors)
Contact
Footer
```

Each section uses the recurring eyebrow motif: small rotated orange square + uppercase tracked label.

## Team (current)

**Operating Team:**
- Alex Hender — Executive General Manager
- Claire Worley — Marketing & Communications Specialist
- Tabitha **McFarlane** — Fractional CFO  *(spelling: capital F, no second 'a' — matches Acacia)*

**Directors (governance / mentor only, not operational):**
- Paul Daly
- Jonathan Whalley

Headshots and bio source material are reused from `acacia-collective-site/src/app/who-we-are/TeamPage.tsx` for family consistency. If updating bios, check for cross-site drift.

## Conventions

- **Branching:** GitHub Flow. Feature branches `alex/<description>` → PR into `master`. Never push direct.
- **Auto-delete on merge is enabled.** After a PR merges, the feature branch is dead — any follow-up needs a fresh branch off the new master. (See AK CLAUDE.md "Branch protection" — pushing to a just-merged branch will silently orphan the commit.)
- **Build before commit:** `npm run build` for any code change.
- **Australian English** in prose (commit messages, copy, doc comments). Code identifiers follow language conventions.
- **No emojis** in copy, code, or commit messages unless explicitly requested.

## Commands

```
npm install           # initial setup
npm run dev           # local dev (next dev with Turbopack)
npm run build         # static export build
npm run lint          # STALE — `next lint` was removed in Next 16. Script needs replacing with direct ESLint or dropping.
```

## Analytics, SEO, AI search

### Analytics
**Vercel Analytics + Speed Insights** (`@vercel/analytics/next`, `@vercel/speed-insights/next`), mounted in `app/layout.tsx`. Cookieless, no consent banner. Free on the existing Vercel plan. Degrades to a no-op off-Vercel — safe in previews and local dev.

If product-side ever needs deeper marketing/funnel data, GA4 was the considered alternative; adding it on top of Vercel Analytics would need a cookie/consent banner under Australian Privacy Principles, hence the standalone Vercel-only call.

### Structured data (JSON-LD)
Three blocks emitted:
- **Organization (`ProfessionalService`)** + **WebSite** — in `app/layout.tsx`. Includes service catalogue, address, areaServed.
- **FAQPage** — in `components/FAQ.tsx`, derived from the `faqs[]` array so prose and structured data stay in sync.

When updating service descriptions or adding services, update *both* the visible copy and the JSON-LD `hasOfferCatalog` in `app/layout.tsx`.

### SEO files
- `/sitemap.xml` (from `app/sitemap.ts`)
- `/robots.txt` (from `app/robots.ts`) — explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, DuckDuckBot. Disallows `*.pdf` (gets the SAFE notes out of search results — still publicly accessible by URL, see open issues).
- `/llms.txt` (from `public/llms.txt`) — markdown index per llmstxt.org.

### AI search optimisation (GEO) pattern
The combination that makes the site discoverable in AI answers: **FAQPage JSON-LD + plain-prose Q&A + `/llms.txt` + permissive robots.txt for AI crawlers + clear schema.org `ProfessionalService` markup.** Worth reusing on sibling marketing sites.

### Verification token
`metadata.verification.google` is not set. Add the token once Search Console is wired up. After this PR's deploy, submit `https://veritabletechnologysolutions.com.au/sitemap.xml` to Search Console.

## Files to know

- `app/page.tsx` — section composition
- `app/layout.tsx` — metadata, JSON-LD (Organization + WebSite), font, Nav mount, Vercel Analytics + Speed Insights
- `app/globals.css` — Tailwind theme tokens (colour palette, fade-in animations)
- `app/sitemap.ts`, `app/robots.ts` — static-export safe (need `export const dynamic = "force-static"`)
- `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` — generated brand marks and 1200x630 social share image via `ImageResponse`. Also need `dynamic = "force-static"`. Satori (the renderer) requires explicit `display: flex` on any div with more than one child — silent build-killer if you miss it.
- `components/*.tsx` — one section per file
- `components/FAQ.tsx` — Q&A section, also emits `FAQPage` JSON-LD inline. Edit `faqs[]` to change copy; structured data updates automatically.
- `components/useFadeIn.ts` — IntersectionObserver hook for scroll-in animations
- `next.config.ts` — static export config
- `public/llms.txt` — markdown index for AI crawlers per llmstxt.org. Refresh when service offering or team changes.
- `brief/` — source material (Alex + Claire LinkedIn profiles, original brand brief)

## Colour palette (from logo)

| Token              | Hex       | Usage                          |
|--------------------|-----------|--------------------------------|
| `--color-primary`        | `#1E5A99` | Headers, primary               |
| `--color-primary-light`  | `#4A9BD9` | Secondary                      |
| `--color-sky`            | `#7BC4E8` | Highlights, gradients          |
| `--color-accent`         | `#F5A623` | CTAs, eyebrow motifs           |
| `--color-accent-warm`    | `#F7B84E` | CTA hover                      |
| `--color-navy`           | `#1A2B4C` | Body text, headings            |
| `--color-light`          | `#F8F9FA` | Section backgrounds            |

## Open issues / debt

- **`public/Gordon Russell Safe Note.pdf`, `Paul Daly Safe Note...pdf`, `Paul Young Safe Note.pdf`** are publicly accessible at the deployed URL. `robots.txt` now disallows `*.pdf` so they shouldn't appear in search results, but the URLs themselves remain reachable. SAFE notes are investor agreements and should be moved to a private location, behind auth, or removed.
- Contact form is mailto only. If future demand warrants a real form, will need a backend (Resend, Formspree, or similar).
- `package.json` `lint` script is broken — `next lint` was removed in Next 16. Either swap to direct ESLint or drop the script.
- `npm audit` flags a pre-existing Next.js advisory chain. Mostly dynamic-feature CVEs that don't apply to a fully static export, but a Next minor bump in a separate PR would clear them.
- Google Search Console verification token not yet added to `metadata.verification.google`. Add after the property is set up, then submit `/sitemap.xml`.

## Recent history (high-level)

- **2026-05-13** — Analytics + SEO + AI-search optimisation + copy punch-up (PR #5). Wired Vercel Analytics + Speed Insights; full metadata + JSON-LD overhaul; added sitemap, robots, llms.txt, generated favicon and OG image; new FAQ section with FAQPage JSON-LD; Hero now leads on "Your Fractional CTO. Your ready-made infrastructure. One vehicle."
- **2026-05-08** — Major reposition: brand framed around Fractional CTO + IT-IaaS, Acacia case study added, team expanded from solo Alex to 5 people (Operating Team + Directors). Three PRs merged: #1 reposition, #2 team expansion, #3 woodcut headshot cleanup.
- Earlier: initial scaffold per `brief/veritable-brandpage-brief.md`, generic AI-native framing, Alex-only team, woodcut illustration headshot (now retired).
