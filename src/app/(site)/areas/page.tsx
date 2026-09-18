import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "Areas Covered — DJ for Bournemouth, Poole, Dorset, Hampshire & the New Forest",
  description:
    "Adam Lewis is a Bournemouth-based DJ available for weddings, parties, corporate events and club nights across Dorset, Hampshire, Wiltshire and the South Coast. See every area covered.",
  path: "/areas",
});

export default async function AreasPage() {
  const payload = await getPayload();
  const [areas, services, settings] = await Promise.all([
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <CoverageAreasSection
        areas={areas.docs}
        linkAreas
        headingLevel="h1"
        heading={"DJ hire across Bournemouth,\nDorset, Hampshire & the South Coast"}
        subheading="Based in Bournemouth and on the road most weekends. Pick your area for local venues, travel details and answers to common questions."
      />
      <ServicesSection services={services.docs} linkCards heading="Whatever the event, wherever it is" />
      <CtaSection phone={settings?.phone} />
    </main>
  );
}
