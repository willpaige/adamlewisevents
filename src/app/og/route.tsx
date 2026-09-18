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
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#1C1C1C" />
            <rect x="12" y="34" width="7" height="18" rx="3.5" fill="#C8956C" />
            <rect x="23" y="20" width="7" height="32" rx="3.5" fill="#C8956C" />
            <rect x="34" y="12" width="7" height="40" rx="3.5" fill="#C8956C" />
            <rect x="45" y="26" width="7" height="26" rx="3.5" fill="#C8956C" />
          </svg>
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
