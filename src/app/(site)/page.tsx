import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { videoSchema } from "@/lib/seo/schema";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo/site";
import { JsonLd } from "@/components/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { Marquee } from "@/components/Marquee";
import { VideoSection } from "@/components/sections/VideoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
export const revalidate = 60;

export const metadata: Metadata = {
  ...buildPageMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" }),
  // Home uses the site title verbatim rather than the "%s | Adam Lewis Events" template.
  title: { absolute: DEFAULT_TITLE },
};

export default async function HomePage() {
  const payload = await getPayload();
  const [hero, about, services, gallery, testimonials, settings] = await Promise.all([
    payload.findGlobal({ slug: "home-hero" }),
    payload.findGlobal({ slug: "about-page" }),
    payload.find({ collection: "services", limit: 3, sort: "order" }),
    payload.find({ collection: "gallery-events", limit: 8, sort: "order" }),
    payload.find({ collection: "testimonials", limit: 3, sort: "order" }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);
  const video = videoSchema(hero);

  const trustLabels = (hero?.trustItems ?? []).map((t) => t.label).filter(Boolean);
  const marqueeLabels = (hero?.marqueeItems ?? []).map((m) => m.label).filter(Boolean);

  return (
    <main>
      {video ? <JsonLd data={video} /> : null}
      <HeroSection hero={hero} />
      <TrustBar items={trustLabels} />
      <Marquee items={marqueeLabels} />
      {hero?.videoUrl ? (
        <VideoSection
          videoUrl={hero.videoUrl}
          videoTitle={hero.videoTitle}
          videoLabel={hero.videoLabel}
          videoHeading={hero.videoHeading}
        />
      ) : null}
      <AboutSection about={about} />
      <ServicesSection services={services.docs} linkCards />
      <GallerySection items={gallery.docs} />
      <TestimonialsSection testimonials={testimonials.docs} />
      <CtaSection phone={settings?.phone} />
    </main>
  );
}
