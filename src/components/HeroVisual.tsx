import Image from "next/image";
import type { Media } from "@/payload-types";

type HeroVisualProps = {
  badgeNum?: string | null;
  badgeLabel?: string | null;
  image?: Media | number | null;
};

function toMedia(image: HeroVisualProps["image"]): Media | null {
  if (!image || typeof image === "number") return null;
  return image;
}

export function HeroVisual({ badgeNum, badgeLabel, image }: HeroVisualProps) {
  const media = toMedia(image);
  const src = media?.url ?? null;
  const width = media?.width ?? 800;
  const height = media?.height ?? 1000;
  const alt = media?.alt ?? "Adam Lewis on the decks";

  return (
    <div className="hero-visual">
      <div className="hero-image-frame">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            sizes="(max-width: 900px) 90vw, 560px"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <>
            <div className="hero-vis">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="bar" />
              ))}
            </div>
            <div className="hero-initials">
              <span>AL</span>
            </div>
          </>
        )}
      </div>
      {(badgeNum || badgeLabel) && (
        <div className="hero-badge">
          {badgeNum ? <div className="hero-badge-num">{badgeNum}</div> : null}
          {badgeLabel ? <div className="hero-badge-label">{badgeLabel}</div> : null}
        </div>
      )}
    </div>
  );
}
