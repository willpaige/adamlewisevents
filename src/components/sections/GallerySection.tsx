import { Reveal } from "../Reveal";
import { GalleryCarousel, type GalleryCarouselItem } from "../GalleryCarousel";
import type { GalleryEvent, Media } from "@/payload-types";

function resolveMedia(image: GalleryEvent["image"]): Media | null {
  if (!image || typeof image === "number") return null;
  return image;
}

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
  const carouselItems: GalleryCarouselItem[] = items.map((g) => {
    const media = resolveMedia(g.image);
    return {
      label: g.label,
      type: g.type,
      imageUrl: media?.url ?? null,
      imageAlt: media?.alt ?? null,
      imageWidth: media?.width ?? null,
      imageHeight: media?.height ?? null,
    };
  });
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
      <GalleryCarousel items={carouselItems} />
    </section>
  );
}
