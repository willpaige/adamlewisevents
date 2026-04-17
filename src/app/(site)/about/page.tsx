import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
  description: "Adam Lewis's career from 1994 farm raves to festival stages, club residencies and weddings across the South Coast.",
};

export default async function AboutPage() {
  const payload = await getPayload();
  const [about, areas, steps] = await Promise.all([
    payload.findGlobal({ slug: "about-page" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.find({ collection: "process-steps", limit: 100, sort: "order" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <AboutSection about={about} />
      <CoverageAreasSection areas={areas.docs} />
      <ProcessSection steps={steps.docs} />
    </main>
  );
}
