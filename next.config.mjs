import { withPayload } from "@payloadcms/next/withPayload";

const NOINDEX = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "**.blob.vercel-storage.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
  },
  async headers() {
    return [
      // Keep Vercel preview/alias hostnames out of Google — only the custom domain should index.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*)\\.vercel\\.app" }],
        headers: NOINDEX,
      },
      { source: "/admin/:path*", headers: NOINDEX },
      { source: "/api/:path*", headers: NOINDEX },
    ];
  },
};

export default withPayload(nextConfig);
