# Adam Lewis DJ — Website

Next.js 15 (App Router, React 19) site with Payload CMS v3 mounted inline. Preserves the design of `_reference/prototype.html` 1:1.

- Public site routes: `/`, `/about`, `/residencies`, `/services`, `/services/[slug]`, `/areas`, `/areas/[slug]`, `/availability`, `/reviews`, `/contact`, `/[slug]` (guide pages e.g. `/faq`, `/wedding-dj-cost-dorset`)
- SEO routes: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/og` (social image), `/icon`, `/manifest.webmanifest` — see `docs/seo-playbook.md`
- Admin: `/admin` (Payload)
- REST API: `/api/*` (Payload)

---

## Local setup

**Prerequisites**: Node 20+, `corepack enable` (pnpm 10 via `packageManager`), Postgres.

```bash
cp .env.example .env
# Edit .env — at minimum set DATABASE_URL and PAYLOAD_SECRET
pnpm install
pnpm dev
```

Visit:
- http://localhost:3000 — the site (renders empty placeholders until you seed)
- http://localhost:3000/admin — create your first admin user, or run seed below

### Seed content from the prototype

```bash
SEED_ADMIN_EMAIL=you@example.com SEED_ADMIN_PASSWORD='choose-a-password' pnpm seed
```

Re-run `pnpm seed` to restore launch content — **it deletes and recreates** residencies, services, coverage areas, testimonials, bookings, process steps and gallery events (users and enquiries are kept). Do not run it against production once content has been edited in `/admin`.

### Seed SEO content (non-destructive)

```bash
pnpm seed:seo                      # fills slugs, page copy, FAQs and meta where blank
SEED_FORCE_SEO=1 pnpm seed:seo     # also re-applies meta titles/descriptions
SEED_FORCE_CONTENT=1 pnpm seed:seo # overwrites all seeded page copy (never the hero title)
```

Copy lives in `scripts/content/*.ts` and is written as light markdown, converted to Lexical by `scripts/lib/lexical.ts`.

Once seeded, reload the site — every page is populated.

---

## Content model (Payload)

**Collections** (edit at `/admin`):
- `Residencies` — venue, role, location, status (current|previous), order
- `Services` — number, title, description, tags[], plus slug + service-page copy/FAQs + SEO overrides
- `Coverage Areas` — name, detail, order, plus slug + area-page copy/venues/FAQs + SEO overrides
- `Testimonials` — quote, rating, author, event type, avatar initials, order
- `Booked Dates` — date, event name, venue, type
- `Process Steps` — number, title, description, order
- `Gallery Events` — label, type, order
- `Pages` — long-form guide pages (`/faq`, `/wedding-dj-cost-dorset`); title, slug, body, FAQs, SEO
- `Enquiries` — submissions from the contact form (read-only for Adam)

**Globals**:
- `Site Settings` — phone, email, mixcloud URL, social links, taglines, business details for structured data, GA4/GSC/Bing tokens
- `Home Hero` — all hero copy + trust bar items + marquee labels
- `About Page` — paragraphs + stats
- `Page Intros` — heading/subheading per route

Pages use ISR with `revalidate: 60`, so edits appear within a minute.

---

## Deploy to Vercel + Neon

1. **Neon** — create a Postgres project. Copy the **pooled** connection string for `DATABASE_URL`. The build will apply migrations automatically.
2. **Vercel** — import the repo. Set env vars:
   - `DATABASE_URL` (pooled)
   - `PAYLOAD_SECRET` (32+ random bytes: `openssl rand -base64 32`)
   - `NEXT_PUBLIC_SERVER_URL` (your production URL)
   - `NEXT_PUBLIC_SITE_URL` (`https://www.adamlewisevents.co.uk` — canonical origin for SEO URLs)
3. Vercel runs `pnpm build` → `next build`.
4. After the first deploy, run the seed once against production by setting the env vars locally and running `pnpm seed`, or create content directly in `/admin`.

### Schema changes

We use Payload's `push` mode (drizzle syncs the schema on boot). Edit a collection/global, deploy, and the Neon schema updates automatically on the first request. For larger schemas or multi-env setups you can flip to managed migrations via `payload migrate:create`; it's not needed here.

---

## Project layout

```
src/
├─ app/
│  ├─ (payload)/    # Admin UI + REST/GraphQL API
│  └─ (site)/       # Public marketing site
├─ components/      # Nav, Footer, Reveal, sections/*
├─ collections/     # Payload collection configs
├─ globals/         # Payload global configs
├─ lib/payload.ts   # getPayload() helper
└─ payload.config.ts
scripts/seed.ts     # pnpm seed
_reference/         # Original prototype.html (reference only, not deployed)
```

---

## Verifying a change

1. Edit a testimonial in `/admin`.
2. Wait up to 60 seconds (or hard-reload with `?x=1`).
3. Confirm the change on `/reviews`.
4. Submit the contact form — check `/admin → Enquiries` for the row.
