import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { Marquee } from "@/components/Marquee";
import { VideoSection } from "@/components/sections/VideoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Reveal } from "@/components/Reveal";

export const revalidate = 60;

export default async function HomePage() {
  const payload = await getPayload();
  const [hero, about, services, gallery, testimonials] = await Promise.all([
    payload.findGlobal({ slug: "home-hero" }),
    payload.findGlobal({ slug: "about-page" }),
    payload.find({ collection: "services", limit: 3, sort: "order" }),
    payload.find({ collection: "gallery-events", limit: 8, sort: "order" }),
    payload.find({ collection: "testimonials", limit: 3, sort: "order" }),
  ]);

  const trustLabels = (hero?.trustItems ?? []).map((t) => t.label).filter(Boolean);
  const marqueeLabels = (hero?.marqueeItems ?? []).map((m) => m.label).filter(Boolean);

  return (
    <main>
      <HeroSection hero={hero} />
      <TrustBar items={trustLabels} />
      <Marquee items={marqueeLabels} />
      {hero?.videoUrl ? (
        <VideoSection
          videoUrl={hero.videoUrl}
          videoLabel={hero.videoLabel}
          videoHeading={hero.videoHeading}
        />
      ) : null}
      <AboutSection about={about} />
      <ServicesSection services={services.docs} />
      <GallerySection items={gallery.docs} />
      <TestimonialsSection testimonials={testimonials.docs} />
      <section className="process" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal as="h2" className="section-heading">
            Ready to talk?
          </Reveal>
          <Reveal delay={0.15} style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn-primary">
              Book Adam
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
