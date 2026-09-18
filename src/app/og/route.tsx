import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { SITE_NAME } from "@/lib/seo/site";

export const runtime = "nodejs";
export const revalidate = 86400;

const MAX_TITLE = 90;

/** Default social preview image. Pass ?title= for a per-page variant. */
export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("title")?.trim();
  const title = raw ? raw.slice(0, MAX_TITLE) : "Bournemouth DJ — Weddings, Clubs, Corporate & Festivals";
  const isLong = title.length > 48;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0F0F0F 0%, #1C1C1C 100%)",
          color: "#F5F2EE",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              background: "#C8956C",
              color: "#0F0F0F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            AL
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: isLong ? 56 : 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 26, color: "#A8A29E", letterSpacing: 4, textTransform: "uppercase" }}>
            Bournemouth · Dorset · Hampshire · South Coast
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
