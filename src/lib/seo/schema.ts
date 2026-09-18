import type {
  Booking,
  CoverageArea,
  HomeHero,
  Page,
  Service,
  SiteSetting,
  Testimonial,
} from "@/payload-types";
import { mediaUrl } from "./metadata";
import {
  absUrl,
  BUSINESS_ID,
  PERSON_ID,
  PERSON_NAME,
  SITE_NAME,
  SITE_URL,
  toE164,
  WEBSITE_ID,
} from "./site";

type Faq = { question: string; answer: string };
type Schema = Record<string, unknown>;

const CONTEXT = "https://schema.org";

/** Drops undefined/null/empty-array values so the JSON stays clean. */
function compact<T extends Schema>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v === undefined || v === null || v === "") return false;
      if (Array.isArray(v) && v.length === 0) return false;
      return true;
    }),
  ) as T;
}

function areaServed(areas: CoverageArea[]) {
  return areas.map((a) =>
    compact({
      "@type": a.schemaType ?? "City",
      name: a.name,
      url: a.slug ? absUrl(`/areas/${a.slug}`) : undefined,
    }),
  );
}

function sameAs(settings: Partial<SiteSetting> | null | undefined): string[] {
  const urls = [
    settings?.mixcloudUrl,
    settings?.youtubeUrl,
    settings?.googleBusinessProfileUrl,
    ...(settings?.socialLinks ?? []).map((l) => l.url),
  ];
  // Ignore the placeholder links seeded at launch (e.g. https://instagram.com/) and dedupe.
  return Array.from(
    new Set(urls.filter((u): u is string => typeof u === "string" && /^https?:\/\/[^/]+\/.+/.test(u))),
  );
}

export function businessName(settings: Partial<SiteSetting> | null | undefined) {
  return settings?.businessName?.trim() || SITE_NAME;
}

/**
 * Site-wide entity graph: the business, Adam as a person, and the website.
 * Emitted on every page from the root layout.
 */
export function buildSiteGraph({
  settings,
  testimonials,
  services,
  areas,
}: {
  settings: Partial<SiteSetting> | null | undefined;
  testimonials: Testimonial[];
  services: Service[];
  areas: CoverageArea[];
}): Schema {
  const name = businessName(settings);
  const image = absUrl(mediaUrl(settings?.defaultOgImage) ?? "/og");
  const ratings = testimonials.map((t) => t.rating ?? 5);
  const social = sameAs(settings);

  const business = compact({
    "@type": ["EntertainmentBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name,
    alternateName: name === "Adam Lewis Events" ? "Adam Lewis DJ" : undefined,
    legalName: settings?.legalName ?? undefined,
    description:
      "Professional DJ for weddings, club nights, corporate events, private parties and festivals across Bournemouth, Dorset, Hampshire and the South Coast.",
    url: SITE_URL,
    telephone: toE164(settings?.phone),
    email: settings?.email ?? undefined,
    image,
    logo: absUrl("/apple-icon"),
    address: compact({
      "@type": "PostalAddress",
      streetAddress: settings?.streetAddress ?? undefined,
      addressLocality: settings?.addressLocality ?? "Bournemouth",
      addressRegion: settings?.addressRegion ?? "Dorset",
      postalCode: settings?.postalCode ?? undefined,
      addressCountry: "GB",
    }),
    geo:
      settings?.latitude && settings?.longitude
        ? { "@type": "GeoCoordinates", latitude: settings.latitude, longitude: settings.longitude }
        : undefined,
    areaServed: areaServed(areas),
    priceRange: settings?.priceRange ?? undefined,
    openingHours: settings?.openingHours
      ? settings.openingHours.split("\n").map((l) => l.trim()).filter(Boolean)
      : undefined,
    currenciesAccepted: "GBP",
    sameAs: social,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    hasOfferCatalog: services.length
      ? {
          "@type": "OfferCatalog",
          name: "DJ services",
          itemListElement: services
            .filter((s) => s.slug)
            .map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": absUrl(`/services/${s.slug}#service`),
                name: s.title,
                url: absUrl(`/services/${s.slug}`),
              },
            })),
        }
      : undefined,
    aggregateRating: ratings.length
      ? {
          "@type": "AggregateRating",
          ratingValue: (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1),
          reviewCount: ratings.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  });

  const person = compact({
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    jobTitle: "DJ",
    description:
      "Bournemouth-based professional DJ with 25+ years on the decks. Former Hed Kandi resident, Henley Royal Regatta main stage, Christchurch Music Festival, and resident at Post, Aruba, Bar So, V Nightclub and Cameo.",
    url: absUrl("/about"),
    image,
    worksFor: { "@id": BUSINESS_ID },
    homeLocation: { "@type": "City", name: "Bournemouth" },
    knowsAbout: [
      "Wedding DJ",
      "Club DJ",
      "Festival DJ",
      "Corporate event entertainment",
      "House music",
      "Open-format DJing",
    ],
    sameAs: social,
  });

  const website = compact({
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-GB",
  });

  return { "@context": CONTEXT, "@graph": [business, person, website] };
}

export function serviceSchema(service: Service, areas: CoverageArea[]): Schema {
  return compact({
    "@context": CONTEXT,
    "@type": "Service",
    "@id": absUrl(`/services/${service.slug}#service`),
    name: service.heroHeading ?? service.title,
    serviceType: service.title,
    description: service.seo?.metaDescription ?? service.intro ?? service.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed(areas),
    url: absUrl(`/services/${service.slug}`),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absUrl("/contact"),
    },
  });
}

export function areaSchema(area: CoverageArea, services: Service[]): Schema {
  return compact({
    "@context": CONTEXT,
    "@type": "Service",
    "@id": absUrl(`/areas/${area.slug}#service`),
    name: area.heading ?? `DJ in ${area.name}`,
    serviceType: "DJ hire",
    description: area.seo?.metaDescription ?? area.intro ?? undefined,
    provider: { "@id": BUSINESS_ID },
    areaServed: [{ "@type": area.schemaType ?? "City", name: area.name }],
    url: absUrl(`/areas/${area.slug}`),
    hasOfferCatalog: services.length
      ? {
          "@type": "OfferCatalog",
          name: `DJ services in ${area.name}`,
          itemListElement: services
            .filter((s) => s.slug)
            .map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", "@id": absUrl(`/services/${s.slug}#service`), name: s.title },
            })),
        }
      : undefined,
  });
}

export function faqSchema(faqs: Faq[] | null | undefined): Schema | null {
  const items = (faqs ?? []).filter((f) => f.question && f.answer);
  if (!items.length) return null;
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Schema {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function articleSchema(page: Page, settings: Partial<SiteSetting> | null | undefined): Schema {
  return compact({
    "@context": CONTEXT,
    "@type": "Article",
    "@id": absUrl(`/${page.slug}#article`),
    headline: page.heroHeading ?? page.title,
    description: page.seo?.metaDescription ?? page.intro ?? undefined,
    url: absUrl(`/${page.slug}`),
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
    inLanguage: "en-GB",
    author: { "@id": PERSON_ID },
    publisher: { "@id": BUSINESS_ID },
    image: absUrl(mediaUrl(page.seo?.ogImage) ?? mediaUrl(settings?.defaultOgImage) ?? "/og"),
  });
}

export function reviewsSchema(testimonials: Testimonial[]): Schema[] {
  return testimonials.map((t) =>
    compact({
      "@context": CONTEXT,
      "@type": "Review",
      itemReviewed: { "@id": BUSINESS_ID },
      author: { "@type": "Person", name: t.authorName },
      reviewRating: { "@type": "Rating", ratingValue: t.rating ?? 5, bestRating: 5, worstRating: 1 },
      reviewBody: t.quote,
      name: t.eventType ?? undefined,
    }),
  );
}

export function eventsSchema(bookings: Booking[]): Schema[] {
  return bookings.map((b) =>
    compact({
      "@context": CONTEXT,
      "@type": "Event",
      name: b.eventName,
      startDate: b.date.slice(0, 10),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: b.venue ?? "Private venue",
        address: { "@type": "PostalAddress", addressLocality: b.venue ?? "Bournemouth", addressCountry: "GB" },
      },
      performer: { "@id": PERSON_ID },
      organizer: { "@id": BUSINESS_ID },
    }),
  );
}

export function extractYoutubeId(url?: string | null): string | null {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return m[1];
  }
  return null;
}

/** Only valid when an upload date is known — Google requires it. */
export function videoSchema(hero: Partial<HomeHero> | null | undefined): Schema | null {
  const id = extractYoutubeId(hero?.videoUrl);
  if (!id || !hero?.videoPublishedAt) return null;
  return compact({
    "@context": CONTEXT,
    "@type": "VideoObject",
    name: hero.videoTitle ?? hero.videoHeading ?? "Adam Lewis — DJ showreel",
    description:
      hero.videoDescription ??
      "Adam Lewis DJing live — festivals, club nights and weddings across Bournemouth and the South Coast.",
    thumbnailUrl: [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
    uploadDate: hero.videoPublishedAt.slice(0, 10),
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    publisher: { "@id": BUSINESS_ID },
  });
}
