import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getAreaBySlug, listSlugs } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { areaSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichTextSection } from "@/components/RichTextSection";
import { FaqSection, type Faq } from "@/components/sections/FaqSection";
import { VenuesSection } from "@/components/sections/VenuesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const revalidate = 60;
export const dynamicParams = true;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await listSlugs("coverage-areas");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);
  if (!area) return {};
  return buildPageMetadata({
    title: area.heading ?? `Wedding & Event DJ in ${area.name}`,
    description:
      area.intro ??
      `Professional DJ for weddings, parties and events in ${area.name}. Bournemouth-based, 25+ years' experience, fully insured.`,
    path: `/areas/${slug}`,
    seo: area.seo,
  });
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const payload = await getPayload();
  const [area, services, testimonials, settings] = await Promise.all([
    getAreaBySlug(slug),
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.find({ collection: "testimonials", limit: 3, sort: "order" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);
  if (!area) notFound();

  const heading = area.heading ?? `Wedding & Event DJ in ${area.name}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas", path: "/areas" },
    { name: area.name, path: `/areas/${slug}` },
  ];
  const faq = faqSchema(area.faqs as Faq[] | null);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <JsonLd data={[areaSchema(area, services.docs), breadcrumbSchema(crumbs), ...(faq ? [faq] : [])]} />
      <PageHero label={area.detail ?? "Areas covered"} heading={heading} intro={area.intro} breadcrumbs={crumbs} />
      <RichTextSection body={area.body} />
      <VenuesSection venues={area.nearbyVenues} areaName={area.name} />
      <ServicesSection services={services.docs} linkCards heading={`${area.name} DJ services`} />
      <FaqSection faqs={area.faqs as Faq[] | null} heading={`${area.name} DJ hire — common questions`} />
      <TestimonialsSection testimonials={testimonials.docs} heading="What clients say" />
      <CtaSection phone={settings?.phone} heading={`Planning a ${area.name} event?`} />
    </main>
  );
}
