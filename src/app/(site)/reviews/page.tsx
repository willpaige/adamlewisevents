import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { reviewsSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "Reviews — Adam Lewis Events, Bournemouth DJ (5.0★)",
  description:
    "What couples, venue managers, promoters and event organisers say about booking Adam Lewis as their DJ in Bournemouth, Dorset and Hampshire.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const payload = await getPayload();
  const [testimonials, intros, settings] = await Promise.all([
    payload.find({ collection: "testimonials", limit: 50, sort: "order" }),
    payload.findGlobal({ slug: "page-intros" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <JsonLd data={reviewsSchema(testimonials.docs)} />
      <TestimonialsSection testimonials={testimonials.docs} intro={intros?.reviews} headingLevel="h1" />
      <CtaSection
        heading="Want to leave a review?"
        text="Booked Adam recently? A Google review takes a minute and makes a real difference to a small business."
        phone={settings?.phone}
      />
    </main>
  );
}
