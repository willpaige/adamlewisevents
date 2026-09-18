import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "About Adam Lewis — Bournemouth DJ, Former Hed Kandi Resident, 25+ Years",
  description:
    "Adam Lewis's career from 1994 farm raves to the Henley Royal Regatta main stage, Hed Kandi, Christchurch Music Festival and residencies at Post, Aruba, Bar So and V Nightclub in Bournemouth.",
  path: "/about",
});

export default async function AboutPage() {
  const payload = await getPayload();
  const [about, areas, steps] = await Promise.all([
    payload.findGlobal({ slug: "about-page" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.find({ collection: "process-steps", limit: 100, sort: "order" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <AboutSection about={about} headingLevel="h1" />
      <CoverageAreasSection areas={areas.docs} linkAreas />
      <ProcessSection steps={steps.docs} />
    </main>
  );
}
