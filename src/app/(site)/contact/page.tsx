import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { ContactSection } from "@/components/sections/ContactSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Book Adam",
  description: "Enquire about availability for festivals, club nights, weddings, corporate and private events.",
};

export default async function ContactPage() {
  const payload = await getPayload();
  const [settings, intros] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ContactSection settings={settings} intro={intros?.contact} />
    </main>
  );
}
