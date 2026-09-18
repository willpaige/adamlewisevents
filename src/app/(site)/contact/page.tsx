import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/components/sections/ContactSection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "Book a DJ in Bournemouth — Free Quote Within 24 Hours",
  description:
    "Enquire about DJ availability for weddings, club nights, corporate and private events across Bournemouth, Dorset and Hampshire. Call 07341 950521 or send the date and venue for a no-obligation quote.",
  path: "/contact",
});

export default async function ContactPage() {
  const payload = await getPayload();
  const [settings, intros] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ContactSection settings={settings} intro={intros?.contact} headingLevel="h1" />
    </main>
  );
}
