/**
 * Single source of truth for site-wide SEO constants.
 * NEXT_PUBLIC_SITE_URL should be the canonical production origin (www) so that
 * preview deployments still emit production canonicals/OG URLs.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adamlewisevents.co.uk"
).replace(/\/$/, "");

export const SITE_NAME = "Adam Lewis Events";
export const PERSON_NAME = "Adam Lewis";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const DEFAULT_TITLE =
  "Bournemouth DJ — Weddings, Clubs, Corporate & Festivals | Adam Lewis Events";
export const DEFAULT_DESCRIPTION =
  "Adam Lewis is a professional DJ based in Bournemouth. Former Hed Kandi resident with 25+ years on the decks — weddings, club nights, corporate and private events across Dorset, Hampshire and the South Coast.";

export function absUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** UK local number → E.164 (07341 950521 → +447341950521). */
export function toE164(phone?: string | null): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("0")) return `+44${digits.slice(1)}`;
  return digits;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
