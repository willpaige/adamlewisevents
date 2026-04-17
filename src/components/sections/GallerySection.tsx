import { Reveal } from "../Reveal";
import { GalleryCarousel } from "../GalleryCarousel";
import type { GalleryEvent } from "@/payload-types";

export function GallerySection({
  items,
  label = "Recent Events",
  heading = "From the booth",
}: {
  items: GalleryEvent[];
  label?: string;
  heading?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="gallery">
      <div className="gallery-head">
        <Reveal as="p" className="section-label">
          {label}
        </Reveal>
        <Reveal as="h2" className="section-heading" delay={0.1}>
          {heading}
        </Reveal>
      </div>
      <GalleryCarousel
        items={items.map((i) => ({ label: i.label, type: i.type }))}
      />
    </section>
  );
}
