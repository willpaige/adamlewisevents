"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type GalleryCarouselItem = {
  label: string;
  type: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
  imageWidth?: number | null;
  imageHeight?: number | null;
};

export function GalleryCarousel({ items }: { items: GalleryCarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="gallery-track" ref={trackRef}>
      {items.map((item, i) => (
        <div key={i} className="gallery-item">
          {item.imageUrl ? (
            <>
              <div
                className="gallery-vis"
                style={{
                  opacity: 1,
                  inset: 0,
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt ?? item.label}
                  fill
                  sizes="(max-width: 900px) 80vw, 380px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.35) 55%, rgba(15,15,15,0.1) 100%)",
                  }}
                />
              </div>
            </>
          ) : (
            <div className="gallery-vis">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="gbar" style={{ ["--i" as string]: j }} />
              ))}
            </div>
          )}
          <div className="gallery-item-inner">
            <span className="gallery-label">{item.label}</span>
            <span className="gallery-type">{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
