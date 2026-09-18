import { getPayload } from "@/lib/payload";

export async function getServiceBySlug(slug: string) {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export async function getAreaBySlug(slug: string) {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "coverage-areas",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export async function getPageBySlug(slug: string) {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export async function listSlugs(collection: "services" | "coverage-areas" | "pages") {
  const payload = await getPayload();
  const { docs } = await payload.find({ collection, limit: 200, select: { slug: true } });
  return docs.map((d) => d.slug).filter((s): s is string => Boolean(s));
}
