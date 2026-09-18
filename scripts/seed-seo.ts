/**
 * Non-destructive SEO content seed.
 *
 * Unlike `pnpm seed` (which wipes and recreates launch content), this script only
 * ADDS: it matches existing Services/Coverage Areas by title/name, fills in slugs
 * and page copy where fields are empty, creates the guide Pages, and sets business
 * details in Site Settings. Anything Adam has already written in /admin is left
 * alone unless SEED_FORCE_CONTENT=1 is set.
 *
 *   pnpm seed:seo                      # fill blanks only
 *   SEED_FORCE_SEO=1 pnpm seed:seo     # also re-apply meta titles/descriptions
 *   SEED_FORCE_CONTENT=1 pnpm seed:seo # overwrite all page copy with scripts/content (never the hero title)
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "../src/payload.config";
import { toLexical } from "./lib/lexical";
import { SERVICE_CONTENT } from "./content/services";
import { AREA_CONTENT } from "./content/areas";
import { PAGE_CONTENT } from "./content/pages";

const FORCE = process.env.SEED_FORCE_CONTENT === "1";
/** SEED_FORCE_SEO=1 re-applies only meta titles/descriptions (leaves page copy alone). */
const FORCE_SEO = FORCE || process.env.SEED_FORCE_SEO === "1";

const isBlank = (v: unknown) =>
  v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);

/** Returns only the keys of `next` that are blank on `current` (or all, when forcing). */
function fillBlanks<T extends Record<string, unknown>>(current: Record<string, unknown> | undefined, next: T): Partial<T> {
  const out: Partial<T> = {};
  for (const [k, v] of Object.entries(next) as [keyof T, T[keyof T]][]) {
    if (FORCE || isBlank(current?.[k as string])) out[k] = v;
  }
  return out;
}

function seoFill(current: { metaTitle?: string | null; metaDescription?: string | null } | undefined, next: { metaTitle: string; metaDescription: string }) {
  if (FORCE_SEO) return { ...next };
  return fillBlanks(current as Record<string, unknown> | undefined, next);
}

async function main() {
  const payload = await getPayload({ config });
  const log = (m: string) => console.log(m);

  // ── Services ─────────────────────────────────────────────────────────────
  log("→ Services");
  for (const c of SERVICE_CONTENT) {
    const { docs } = await payload.find({
      collection: "services",
      where: { title: { equals: c.title } },
      limit: 1,
      overrideAccess: true,
    });
    const doc = docs[0];
    if (!doc) {
      log(`   ! service "${c.title}" not found — run \`pnpm seed\` first, or create it in /admin`);
      continue;
    }
    const data = {
      slug: doc.slug ?? c.slug,
      ...fillBlanks(doc as unknown as Record<string, unknown>, {
        heroHeading: c.heroHeading,
        intro: c.intro,
        body: toLexical(c.body),
        faqs: c.faqs,
      }),
      seo: { ...(doc.seo ?? {}), ...seoFill(doc.seo ?? undefined, c.seo) },
    };
    await payload.update({ collection: "services", id: doc.id, data, overrideAccess: true });
    log(`   ✓ ${c.title} → /services/${data.slug}`);
  }

  // ── Coverage areas ───────────────────────────────────────────────────────
  log("→ Coverage areas");
  const existingAreas = await payload.find({ collection: "coverage-areas", limit: 100, overrideAccess: true });
  let nextOrder = existingAreas.docs.reduce((m, a) => Math.max(m, a.order ?? 0), -1) + 1;
  for (const c of AREA_CONTENT) {
    const doc = existingAreas.docs.find((a) => a.name.trim().toLowerCase() === c.name.toLowerCase());
    const content = {
      heading: c.heading,
      intro: c.intro,
      body: toLexical(c.body),
      faqs: c.faqs,
      nearbyVenues: c.nearbyVenues ?? [],
    };
    if (doc) {
      const data = {
        slug: doc.slug ?? c.slug,
        schemaType: doc.schemaType ?? c.schemaType,
        detail: doc.detail ?? c.detail,
        ...fillBlanks(doc as unknown as Record<string, unknown>, content),
        seo: { ...(doc.seo ?? {}), ...seoFill(doc.seo ?? undefined, c.seo) },
      };
      await payload.update({ collection: "coverage-areas", id: doc.id, data, overrideAccess: true });
      log(`   ✓ ${c.name} → /areas/${data.slug}`);
    } else {
      await payload.create({
        collection: "coverage-areas",
        overrideAccess: true,
        data: {
          name: c.name,
          detail: c.detail,
          slug: c.slug,
          schemaType: c.schemaType,
          order: c.order ?? nextOrder++,
          ...content,
          seo: c.seo,
        },
      });
      log(`   + ${c.name} → /areas/${c.slug} (created)`);
    }
  }

  // ── Guide pages ──────────────────────────────────────────────────────────
  log("→ Pages");
  for (const c of PAGE_CONTENT) {
    const { docs } = await payload.find({
      collection: "pages",
      where: { slug: { equals: c.slug } },
      limit: 1,
      overrideAccess: true,
    });
    const doc = docs[0];
    const content = {
      label: c.label,
      heroHeading: c.heroHeading,
      intro: c.intro,
      body: toLexical(c.body),
      faqs: c.faqs,
    };
    if (doc) {
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        data: {
          ...fillBlanks(doc as unknown as Record<string, unknown>, content),
          showFaqsFirst: doc.showFaqsFirst ?? c.showFaqsFirst ?? false,
          seo: { ...(doc.seo ?? {}), ...seoFill(doc.seo ?? undefined, c.seo) },
        },
      });
      log(`   ✓ /${c.slug}`);
    } else {
      await payload.create({
        collection: "pages",
        overrideAccess: true,
        data: { title: c.title, slug: c.slug, showFaqsFirst: c.showFaqsFirst ?? false, ...content, seo: c.seo },
      });
      log(`   + /${c.slug} (created)`);
    }
  }

  // ── Site settings (business facts) ───────────────────────────────────────
  log("→ Site settings");
  const settings = await payload.findGlobal({ slug: "site-settings", overrideAccess: true });
  const settingsData = fillBlanks(settings as unknown as Record<string, unknown>, {
    businessName: "Adam Lewis Events",
    addressLocality: "Bournemouth",
    addressRegion: "Dorset",
    latitude: 50.7192,
    longitude: -1.8808,
    priceRange: "££",
  });
  const originalFooter =
    "Former Hed Kandi resident. Festivals, club nights, weddings and private events across Bournemouth, Dorset & the South Coast.";
  if (!settings.footerTagline || settings.footerTagline === originalFooter) {
    Object.assign(settingsData, {
      footerTagline:
        "Adam Lewis Events — professional DJ based in Bournemouth. Former Hed Kandi resident. Weddings, club nights, corporate and private events across Dorset, Hampshire & the South Coast.",
    });
  }
  if (Object.keys(settingsData).length) {
    await payload.updateGlobal({ slug: "site-settings", data: settingsData, overrideAccess: true });
    log(`   ✓ set ${Object.keys(settingsData).join(", ")}`);
  } else {
    log("   (nothing to change)");
  }

  // ── Home hero (only if still the launch copy) ────────────────────────────
  log("→ Home hero");
  const hero = await payload.findGlobal({ slug: "home-hero", overrideAccess: true });
  const originalTitle = "Festivals, clubs,\nweddings — one\nsafe pair of hands.";
  const heroData: Record<string, unknown> = {};
  // Only ever touch the hero title if it is still the launch copy — never force it.
  if (hero.heroTitle === originalTitle) {
    heroData.heroTitle = "Bournemouth DJ for\nfestivals, clubs & weddings —\none safe pair of hands.";
  }
  if (FORCE || isBlank(hero.videoTitle)) heroData.videoTitle = "Adam Lewis — DJ showreel";
  if (FORCE || isBlank(hero.videoDescription)) {
    heroData.videoDescription =
      "Adam Lewis DJing live — festival stages, club nights and weddings across Bournemouth, Dorset and the South Coast.";
  }
  if (Object.keys(heroData).length) {
    await payload.updateGlobal({ slug: "home-hero", data: heroData, overrideAccess: true });
    log(`   ✓ set ${Object.keys(heroData).join(", ")}`);
  } else {
    log("   (nothing to change)");
  }

  log("✓ SEO seed complete");
  process.exit(0);
}

main().catch((err) => {
  console.error("SEO seed failed:", err);
  process.exit(1);
});
