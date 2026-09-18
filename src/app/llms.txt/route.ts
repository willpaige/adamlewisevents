import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { getPayload } from "@/lib/payload";
import { businessName } from "@/lib/seo/schema";
import { absUrl, SITE_URL } from "@/lib/seo/site";

export const revalidate = 3600;

type Faq = { question: string; answer: string };

function plain(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  try {
    return convertLexicalToPlaintext({ data: body as SerializedEditorState }).trim();
  } catch {
    return "";
  }
}

/**
 * llms.txt — a plain-text summary of the business for AI assistants and LLM crawlers.
 * Everything here is pulled from the CMS so it never drifts from the site.
 */
export async function GET() {
  const payload = await getPayload();
  const [settings, about, services, areas, testimonials, pages, residencies] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.findGlobal({ slug: "about-page" }),
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.find({ collection: "testimonials", limit: 100, sort: "order" }),
    payload.find({ collection: "pages", limit: 100 }),
    payload.find({ collection: "residencies", limit: 100, sort: "order" }),
  ]);

  const name = businessName(settings);
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(`# ${name}`, "");
  push(
    `> ${name} is professional DJ Adam Lewis, based in Bournemouth, Dorset, UK. Former Hed Kandi resident with 25+ years of experience playing weddings, club nights, corporate events, private parties and festivals across Dorset, Hampshire, Wiltshire and the South Coast of England.`,
    "",
  );

  push("## Business facts", "");
  push(`- Business name: ${name}`);
  push(`- DJ: Adam Lewis`);
  push(`- Website: ${SITE_URL}/`);
  if (settings?.phone) push(`- Phone: ${settings.phone}`);
  if (settings?.email) push(`- Email: ${settings.email}`);
  push(`- Based in: ${settings?.addressLocality ?? "Bournemouth"}, ${settings?.addressRegion ?? "Dorset"}, United Kingdom`);
  if (settings?.googleBusinessProfileUrl) push(`- Google Business Profile: ${settings.googleBusinessProfileUrl}`);
  if (settings?.mixcloudUrl) push(`- Mixes: ${settings.mixcloudUrl}`);
  if (settings?.youtubeUrl) push(`- YouTube: ${settings.youtubeUrl}`);
  if (settings?.priceRange) push(`- Price range: ${settings.priceRange}`);
  push(`- Areas served: ${areas.docs.map((a) => a.name).join(", ")}`);
  push(`- Credentials: fully insured, PAT-tested equipment, replies to enquiries within 24 hours`);
  push(`- Booking: ${absUrl("/contact")}`, "");

  if (about?.paragraphs?.length) {
    push("## About Adam Lewis", "");
    for (const p of about.paragraphs) push(p.body, "");
  }

  const current = residencies.docs.filter((r) => r.status === "current");
  const previous = residencies.docs.filter((r) => r.status === "previous");
  if (current.length || previous.length) {
    push("## Residencies and career highlights", "");
    for (const r of current) push(`- ${r.venue} — ${r.role}${r.location ? ` (${r.location})` : ""} [current]`);
    for (const r of previous) push(`- ${r.venue} — ${r.role}${r.location ? ` (${r.location})` : ""}`);
    push("");
  }

  push("## Services", "");
  for (const s of services.docs) {
    const url = s.slug ? absUrl(`/services/${s.slug}`) : absUrl("/services");
    push(`- [${s.heroHeading ?? s.title}](${url}): ${s.intro ?? s.description}`);
  }
  push("");

  push("## Areas covered", "");
  for (const a of areas.docs) {
    const url = a.slug ? absUrl(`/areas/${a.slug}`) : absUrl("/areas");
    push(`- [${a.heading ?? `DJ in ${a.name}`}](${url})${a.intro ? `: ${a.intro}` : ""}`);
  }
  push("");

  const guidePages = pages.docs.filter((p) => p.slug);
  if (guidePages.length) {
    push("## Guides", "");
    for (const p of guidePages) {
      push(`- [${p.heroHeading ?? p.title}](${absUrl(`/${p.slug}`)})${p.intro ? `: ${p.intro}` : ""}`);
    }
    push("");
    for (const p of guidePages) {
      const text = plain(p.body);
      if (!text) continue;
      push(`### ${p.heroHeading ?? p.title}`, "", text, "");
    }
  }

  const seen = new Set<string>();
  const faqs: Faq[] = [];
  const collect = (list?: Faq[] | null) => {
    for (const f of list ?? []) {
      const key = f.question.trim().toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        faqs.push(f);
      }
    }
  };
  for (const p of pages.docs) collect(p.faqs as Faq[] | null);
  for (const s of services.docs) collect(s.faqs as Faq[] | null);
  for (const a of areas.docs) collect(a.faqs as Faq[] | null);
  if (faqs.length) {
    push("## Frequently asked questions", "");
    for (const f of faqs) push(`**${f.question}**`, f.answer, "");
  }

  if (testimonials.docs.length) {
    push("## Reviews", "");
    for (const t of testimonials.docs) {
      push(`- ${t.rating ?? 5}/5 — "${t.quote}" — ${t.authorName}${t.eventType ? `, ${t.eventType}` : ""}`);
    }
    push("");
  }

  push("## Key pages", "");
  for (const p of ["/", "/services", "/areas", "/about", "/reviews", "/residencies", "/availability", "/contact"]) {
    push(`- ${absUrl(p)}`);
  }
  push("", `Sitemap: ${absUrl("/sitemap.xml")}`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
