import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Same equaliser mark as icon.svg, scaled for iOS home screens (no rounded corners — iOS applies its own). */
export default function AppleIcon() {
  const bars = [
    { x: 34, y: 96, h: 50 },
    { x: 65, y: 56, h: 90 },
    { x: 96, y: 34, h: 112 },
    { x: 127, y: 73, h: 73 },
  ];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0F0F0F" }}>
        <svg width="180" height="180" viewBox="0 0 180 180">
          {bars.map((b) => (
            <rect key={b.x} x={b.x} y={b.y} width="20" height={b.h} rx="10" fill="#C8956C" />
          ))}
        </svg>
      </div>
    ),
    size,
  );
}
