import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services",
  description: "DJ services for bars, weddings, corporate, private events, festivals and charity galas.",
};

export default async function ServicesPage() {
  const payload = await getPayload();
  const [services, areas, intros] = await Promise.all([
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ServicesSection services={services.docs} intro={intros?.services} />
      <CoverageAreasSection areas={areas.docs} />
    </main>
  );
}
