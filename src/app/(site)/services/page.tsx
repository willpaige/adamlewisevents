import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "DJ Services in Bournemouth & Dorset — Weddings, Corporate, Clubs & Parties",
  description:
    "Professional DJ hire for weddings, corporate events, private parties, club nights, festivals and charity galas. Bournemouth-based, 25+ years' experience, fully insured and PAT tested.",
  path: "/services",
});

export default async function ServicesPage() {
  const payload = await getPayload();
  const [services, areas, intros, settings] = await Promise.all([
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ServicesSection services={services.docs} intro={intros?.services} headingLevel="h1" linkCards />
      <CoverageAreasSection areas={areas.docs} linkAreas />
      <CtaSection phone={settings?.phone} />
    </main>
  );
}
