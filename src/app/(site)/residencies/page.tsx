import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { ResidenciesSection } from "@/components/sections/ResidenciesSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "DJ Residencies — Post, Aruba, Bar So, V Nightclub, Cameo & Henley Royal Regatta",
  description:
    "25 years of regular DJ slots: current Bournemouth residencies at Post, Aruba, Bar So, V Nightclub and Cameo, plus Hed Kandi, Henley Royal Regatta and Christchurch Music Festival.",
  path: "/residencies",
});

export default async function ResidenciesPage() {
  const payload = await getPayload();
  const [residencies, intros] = await Promise.all([
    payload.find({ collection: "residencies", limit: 100, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ResidenciesSection residencies={residencies.docs} intro={intros?.residencies} headingLevel="h1" />
    </main>
  );
}
