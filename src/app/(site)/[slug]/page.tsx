import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getPageBySlug, listSlugs } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichTextSection } from "@/components/RichTextSection";
import { FaqSection, type Faq } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const revalidate = 60;
export const dynamicParams = true;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await listSlugs("pages");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: page.heroHeading ?? page.title,
    description: page.intro ?? page.title,
    path: `/${slug}`,
    seo: page.seo,
  });
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const payload = await getPayload();
  const [page, settings] = await Promise.all([getPageBySlug(slug), payload.findGlobal({ slug: "site-settings" })]);
  if (!page) notFound();

  const heading = page.heroHeading ?? page.title;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.title, path: `/${slug}` },
  ];
  const faqs = page.faqs as Faq[] | null;
  const faq = faqSchema(faqs);
  const faqSection = <FaqSection faqs={faqs} heading={page.showFaqsFirst ? "Your questions, answered" : "Related questions"} />;

  return (
    <main style={{ paddingTop: "6rem" }}>
      <JsonLd data={[articleSchema(page, settings), breadcrumbSchema(crumbs), ...(faq ? [faq] : [])]} />
      <PageHero label={page.label} heading={heading} intro={page.intro} breadcrumbs={crumbs} />
      {page.showFaqsFirst ? faqSection : null}
      <RichTextSection body={page.body} />
      {!page.showFaqsFirst ? faqSection : null}
      <CtaSection phone={settings?.phone} />
    </main>
  );
}
