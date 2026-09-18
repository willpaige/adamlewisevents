import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { getPayload } from "@/lib/payload";
import { buildSiteGraph } from "@/lib/seo/schema";
import { mediaUrl } from "@/lib/seo/metadata";
import { absUrl, DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload();
  const settings = await payload.findGlobal({ slug: "site-settings" });
  const ogImage = absUrl(mediaUrl(settings?.defaultOgImage) ?? "/og");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: { canonical: "./" },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: "./",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    verification: {
      google: settings?.gscVerification || undefined,
      other: settings?.bingVerification ? { "msvalidate.01": settings.bingVerification } : undefined,
    },
  };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload();
  const [settings, testimonials, services, areas] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.find({ collection: "testimonials", limit: 100, sort: "order" }),
    payload.find({ collection: "services", limit: 100, sort: "order" }),
    payload.find({ collection: "coverage-areas", limit: 100, sort: "order" }),
  ]);

  const graph = buildSiteGraph({
    settings,
    testimonials: testimonials.docs,
    services: services.docs,
    areas: areas.docs,
  });

  return (
    <html lang="en-GB" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={graph} />
        <Nav />
        {children}
        <Footer />
        <GoogleAnalytics measurementId={settings?.ga4MeasurementId} />
      </body>
    </html>
  );
}
