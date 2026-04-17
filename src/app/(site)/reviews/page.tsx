import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Reviews",
  description: "What couples, promoters and event organisers say about booking Adam.",
};

export default async function ReviewsPage() {
  const payload = await getPayload();
  const [testimonials, intros] = await Promise.all([
    payload.find({ collection: "testimonials", limit: 50, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <TestimonialsSection testimonials={testimonials.docs} intro={intros?.reviews} />
    </main>
  );
}
