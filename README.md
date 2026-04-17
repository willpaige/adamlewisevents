# Adam Lewis DJ — Website

Next.js 15 (App Router, React 19) site with Payload CMS v3 mounted inline. Preserves the design of `_reference/prototype.html` 1:1.

- Public site routes: `/`, `/about`, `/residencies`, `/services`, `/availability`, `/reviews`, `/contact`
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

Re-run `pnpm seed` any time — it's idempotent for all content collections (it does not delete existing users or enquiry submissions). The script writes every string verbatim from `_reference/prototype.html`, so a fresh seed restores the exact launch content.

Once seeded, reload the site — every page is populated.

---

## Content model (Payload)

**Collections** (edit at `/admin`):
- `Residencies` — venue, role, location, status (current|previous), order
- `Services` — number, title, description, tags[]
- `Coverage Areas` — name, detail, order
- `Testimonials` — quote, rating, author, event type, avatar initials, order
- `Booked Dates` — date, event name, venue, type
- `Process Steps` — number, title, description, order
- `Gallery Events` — label, type, order
- `Enquiries` — submissions from the contact form (read-only for Adam)

**Globals**:
- `Site Settings` — phone, email, mixcloud URL, social links, taglines
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
