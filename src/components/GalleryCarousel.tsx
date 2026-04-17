"use client";

import { useEffect, useRef } from "react";

type GalleryItem = {
  label: string;
  type: string;
};

export function GalleryCarousel({ items }: { items: GalleryItem[] }) {
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
          <div className="gallery-vis">
            {Array.from({ length: 8 }).map((_, j) => (
              <div key={j} className="gbar" style={{ ["--i" as string]: j }} />
            ))}
          </div>
          <div className="gallery-item-inner">
            <span className="gallery-label">{item.label}</span>
            <span className="gallery-type">{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
