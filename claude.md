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
npm run lint          # next lint
```

## Files to know

- `app/page.tsx` — section composition
- `app/layout.tsx` — metadata, font, Nav mount
- `app/globals.css` — Tailwind theme tokens (colour palette, fade-in animations)
- `components/*.tsx` — one section per file
- `components/useFadeIn.ts` — IntersectionObserver hook for scroll-in animations
- `next.config.ts` — static export config
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

- **`public/Gordon Russell Safe Note.pdf`, `Paul Daly Safe Note...pdf`, `Paul Young Safe Note.pdf`** are publicly accessible at the deployed URL. SAFE notes are investor agreements and likely shouldn't be in `/public/`. Pre-existing — not introduced this session, but worth resolving (move to a private location, behind auth, or remove).
- Contact form is mailto only. If future demand warrants a real form, will need a backend (Resend, Formspree, or similar).
- No analytics. If product-side wants conversion tracking, hook up Plausible or Vercel Analytics.

## Recent history (high-level)

- **2026-05-08** — Major reposition: brand framed around Fractional CTO + IT-IaaS, Acacia case study added, team expanded from solo Alex to 5 people (Operating Team + Directors). Three PRs merged: #1 reposition, #2 team expansion, #3 woodcut headshot cleanup.
- Earlier: initial scaffold per `brief/veritable-brandpage-brief.md`, generic AI-native framing, Alex-only team, woodcut illustration headshot (now retired).
