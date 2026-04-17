import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { ResidenciesSection } from "@/components/sections/ResidenciesSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Residencies",
  description: "25 years of regular slots — current residencies and highlights from Hed Kandi to Henley Royal Regatta.",
};

export default async function ResidenciesPage() {
  const payload = await getPayload();
  const [residencies, intros] = await Promise.all([
    payload.find({ collection: "residencies", limit: 100, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ResidenciesSection residencies={residencies.docs} intro={intros?.residencies} />
    </main>
  );
}
