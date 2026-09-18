import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getServiceBySlug, listSlugs } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichTextSection } from "@/components/RichTextSection";
import { FaqSection, type Faq } from "@/components/sections/FaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CoverageAreasSection } from "@/components/sections/CoverageAreasSection";
import { CtaSection } from "@/components/sections/CtaSection";
import type { CoverageArea } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = true;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await listSlugs("services");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.heroHeading ?? `${service.title} DJ — Bournemouth & Dorset`,
    description: service.intro ?? service.description,
    path: `/services/${slug}`,
    seo: service.seo,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const payload = await getPayload();
  const [service, allAreas, testimonials, settings] = await Promise.all([
    getServiceBySlug(slug),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
    payload.find({ collection: "testimonials", limit: 3, sort: "order" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);
  if (!service) notFound();

  const related = (service.relatedAreas ?? []).filter(
    (a): a is CoverageArea => typeof a === "object" && a !== null,
  );
  const areas = related.length ? related : allAreas.docs;
  const heading = service.heroHeading ?? service.title;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ];
  const faq = faqSchema(service.faqs as Faq[] | null);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <JsonLd data={[serviceSchema(service, areas), breadcrumbSchema(crumbs), ...(faq ? [faq] : [])]} />
      <PageHero label={`Service ${service.number}`} heading={heading} intro={service.intro} breadcrumbs={crumbs} />
      <RichTextSection body={service.body} />
      <FaqSection faqs={service.faqs as Faq[] | null} heading={`${service.title} — common questions`} />
      <TestimonialsSection testimonials={testimonials.docs} heading="What clients say" />
      <CoverageAreasSection
        areas={areas}
        linkAreas
        heading={`${service.title} across\nDorset, Hampshire & the South Coast`}
        subheading="Based in Bournemouth and regularly booked across the South Coast. Pick an area to see local venues and details."
      />
      <CtaSection phone={settings?.phone} />
    </main>
  );
}
