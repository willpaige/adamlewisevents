import type { Metadata } from "next";
import type { Media } from "@/payload-types";
import { absUrl, SITE_NAME } from "./site";

type SeoOverrides = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: (number | Media) | null;
  noIndex?: boolean | null;
} | null | undefined;

export function mediaUrl(media?: number | Media | null): string | undefined {
  if (!media || typeof media === "number") return undefined;
  const large = media.sizes?.large?.url;
  return large ?? media.url ?? undefined;
}

/**
 * Builds page metadata, letting CMS `seo` overrides win over the defaults
 * derived from page content.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  seo,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  seo?: SeoOverrides;
  ogImage?: string;
}): Metadata {
  const finalTitle = seo?.metaTitle?.trim() || title;
  const finalDescription = seo?.metaDescription?.trim() || description;
  const image =
    mediaUrl(seo?.ogImage) ?? ogImage ?? `/og?title=${encodeURIComponent(finalTitle)}`;
  const noIndex = Boolean(seo?.noIndex);

  return {
    // Skip the "%s | Adam Lewis Events" template when the brand is already in the title.
    title: finalTitle.includes(SITE_NAME) ? { absolute: finalTitle } : finalTitle,
    description: finalDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: path,
      title: finalTitle,
      description: finalDescription,
      images: [{ url: absUrl(image), width: 1200, height: 630, alt: finalTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [absUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
  };
}
