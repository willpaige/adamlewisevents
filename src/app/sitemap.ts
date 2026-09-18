import type { MetadataRoute } from "next";
import { getPayload } from "@/lib/payload";
import { absUrl } from "@/lib/seo/site";

export const revalidate = 3600;

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.7, changeFrequency: "weekly" },
  { path: "/residencies", priority: 0.6, changeFrequency: "monthly" },
  { path: "/availability", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload();
  const indexable = { "seo.noIndex": { not_equals: true } } as const;
  const [services, areas, pages] = await Promise.all([
    payload.find({ collection: "services", limit: 100, where: indexable }),
    payload.find({ collection: "coverage-areas", limit: 100, where: indexable }),
    payload.find({ collection: "pages", limit: 100, where: indexable }),
  ]);

  return [
    ...STATIC_ROUTES.map((r) => ({ url: absUrl(r.path), priority: r.priority, changeFrequency: r.changeFrequency })),
    ...services.docs
      .filter((d) => d.slug)
      .map((d) => ({ url: absUrl(`/services/${d.slug}`), lastModified: d.updatedAt, priority: 0.9, changeFrequency: "monthly" as const })),
    ...areas.docs
      .filter((d) => d.slug)
      .map((d) => ({ url: absUrl(`/areas/${d.slug}`), lastModified: d.updatedAt, priority: 0.8, changeFrequency: "monthly" as const })),
    ...pages.docs
      .filter((d) => d.slug)
      .map((d) => ({ url: absUrl(`/${d.slug}`), lastModified: d.updatedAt, priority: 0.7, changeFrequency: "monthly" as const })),
  ];
}
