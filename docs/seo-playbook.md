# SEO & AI-search playbook — adamlewisevents.co.uk

Last reviewed: 18 September 2026. Baseline (DataForSEO, UK): site ranked for 4 keywords, all page 2
(best #12 for "bournemouth dj"); Google Business Profile "Adam Lewis Events" #1 in the local pack for
"dj bournemouth", #2 for "dj near me" (Bournemouth), absent for "wedding dj bournemouth".

## What the site now does automatically

- Every page has one keyword `<h1>`, a descriptive `<title>`, meta description, canonical URL,
  Open Graph / Twitter card and a generated social image (`/og?title=…`).
- Structured data (JSON-LD) on every page: `EntertainmentBusiness` + `Person` + `WebSite` graph
  built from **Site Settings**, testimonials, services and areas. Service pages add `Service`,
  `FAQPage` and `BreadcrumbList`; area pages add `Service` + `FAQPage`; `/reviews` adds `Review`;
  `/availability` adds `Event`; the homepage adds `VideoObject` once a video publish date is set.
- `/sitemap.xml`, `/robots.txt` (blocks `/admin`, `/api`, `/og`; open to AI crawlers), `/llms.txt`
  (plain-text business summary for AI assistants), favicon (`src/app/icon.svg`, equaliser mark) and web manifest.
- `*.vercel.app` hostnames, `/admin` and `/api` send `X-Robots-Tag: noindex`.
- New pages: `/services/<slug>` (6), `/areas/<slug>` (14), `/faq`, `/wedding-dj-cost-dorset`, `/areas`.

## Editing in the CMS (`/admin`)

| Where | What |
|---|---|
| Site Settings → Business details | Business name (**must match Google Business Profile exactly**), Google Business Profile link, town/county, lat/long, price range, opening hours, default social image |
| Site Settings → Analytics & verification | GA4 measurement ID, Google Search Console token, Bing token |
| Services → *Service page* | H1, intro, body copy, FAQs, related areas |
| Services / Coverage Areas / Pages → *SEO* | Meta title (≤60 chars), meta description (≤160), social image, "hide from search" |
| Coverage Areas → *Area page* | H1, intro, body, **venues Adam has played in that area** (high impact — add them), FAQs |
| Pages | The FAQ page and the wedding-DJ cost guide. Add more guides here; they appear at `/<slug>` |
| Home Hero | Video title / description / **publish date** (needed for video rich results) |

Re-seeding: `pnpm seed:seo` only fills blanks. `pnpm seed` (the launch seed) **deletes and recreates**
services/areas/testimonials/bookings — do not run it against production.

## One-off setup (Will)

1. **Vercel → Domains**: make `www.adamlewisevents.co.uk` primary, apex redirects to www (308).
   Add env var `NEXT_PUBLIC_SITE_URL=https://www.adamlewisevents.co.uk` (all environments).
2. **Google Search Console**: add a *Domain* property for `adamlewisevents.co.uk` (DNS TXT), or paste
   the HTML-tag token into Site Settings → `gscVerification`. Submit `https://www.adamlewisevents.co.uk/sitemap.xml`.
3. **Bing Webmaster Tools**: import the GSC property (one click). Bing's index feeds ChatGPT/Copilot.
   Paste the `msvalidate.01` token into Site Settings → `bingVerification` if verifying by tag.
4. **GA4**: create a property, paste the `G-…` ID into Site Settings → `ga4MeasurementId`.
5. Optional: Vercel → Deployment Protection → Standard, so previews are never crawlable.

## Google Business Profile (Adam — the biggest lever)

"dj near me" (2,900 searches/month) and "dj hire near me" (1,000) are answered by the map pack, not
the website. The profile is already strong; the gap is reviews (10 vs Coastal Discos' 123).

- [ ] Name is exactly **Adam Lewis Events**; website `https://www.adamlewisevents.co.uk/`; phone 07341 950521.
- [ ] Primary category **DJ**; add secondary **Wedding service** and **Entertainment agency** if offered.
- [ ] Add all six services (Wedding DJ, Corporate event DJ, Party DJ, Club & bar DJ, Festival DJ, Charity gala DJ)
      with the page URLs, and list the service areas (Bournemouth, Poole, Christchurch, New Forest, Southampton…).
- [ ] Paste the GBP share link into Site Settings → `googleBusinessProfileUrl` (adds a "Google Reviews" footer link).
- [ ] **Reviews**: aim for 50+. Ask every wedding/party client the week after the event; keep the review
      link (Google → "Ask for reviews") saved on the phone / as a QR code. Reply to every review.
- [ ] 20+ photos (decks, crowds, venues, setup) and a short video; a post every 1–2 weeks (upcoming dates work well).
- [ ] Seed the GBP Q&A section with the questions/answers from `/faq`.
- [ ] Real Instagram / Facebook / TikTok URLs in Site Settings → Social links (the launch placeholders are ignored).

## Listings and links (do once, revisit quarterly)

Directory pages already sit on page 1 for the target terms, so a listing there ranks twice.
Use the exact same name/phone/website everywhere.

- Hitched, Bridebook, Poptop, Encore Musicians, Alive Network, Last Minute Musicians, Bark, Yell,
  Dorset Wedding Directory / Dorset Weddings, Bournemouth Echo business listings.
- Ask venues for a "resident DJ" link: Post, Aruba, Bar So, V Nightclub, Cameo, Christchurch Music Festival.
- Ask wedding venues Adam has played to list him as a recommended supplier (link back to `/areas/<area>`).
- Add the website to Mixcloud and YouTube channel descriptions.

## Content cadence

- Add venues to each area page as they are played (Coverage Areas → *Venues in this area*).
- After notable events, add a testimonial with the venue/area named (feeds the reviews schema and llms.txt).
- One new guide page a quarter (Pages), e.g. "How to plan wedding music", "Corporate Christmas party
  DJ checklist", "Best first-dance songs 2027" — write answers first, keep FAQs as direct sentences.
- Keep `/availability` current — it doubles as `Event` structured data.

## Measuring

- GSC: Performance → filter queries containing "dj" — track impressions/clicks for the Bournemouth,
  Hampshire, Dorset, New Forest and Southampton clusters; use URL inspection after edits.
- Re-run DataForSEO `ranked_keywords` for `adamlewisevents.co.uk` in 4–6 weeks (baseline: 4 keywords, best #12).
- GA4: conversions = contact-form submissions (Payload *Enquiries*) and `tel:` clicks.
