import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0F0F",
          color: "#C8956C",
          fontSize: 30,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -2,
          borderRadius: 12,
        }}
      >
        AL
      </div>
    ),
    size,
  );
}
