import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    { name: "phone", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "mixcloudUrl", type: "text", required: true },
    { name: "youtubeUrl", type: "text" },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
            { label: "Mixcloud", value: "mixcloud" },
            { label: "YouTube", value: "youtube" },
            { label: "Twitter / X", value: "twitter" },
            { label: "Tiktok", value: "tiktok" },
            { label: "Other", value: "other" },
          ],
        },
        { name: "label", type: "text", required: true },
        { name: "url", type: "text", required: true },
      ],
    },
    { name: "locationTagline", type: "text", admin: { description: 'e.g. "Based in Bournemouth · Available South Coast & beyond"' } },
    { name: "footerTagline", type: "textarea" },
    {
      type: "collapsible",
      label: "Business details (Google & AI search)",
      admin: {
        description:
          "Used for structured data so Google, Bing and AI assistants describe the business consistently. Keep the name identical to the Google Business Profile.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "businessName",
          type: "text",
          admin: { description: 'Exactly as it appears on Google Business Profile, e.g. "Adam Lewis Events"' },
        },
        { name: "legalName", type: "text", admin: { description: "Optional registered/trading name if different." } },
        {
          name: "googleBusinessProfileUrl",
          type: "text",
          admin: { description: "Google Maps share link for the business listing." },
        },
        {
          type: "row",
          fields: [
            { name: "addressLocality", type: "text", admin: { description: "Town, e.g. Bournemouth", width: "50%" } },
            { name: "addressRegion", type: "text", admin: { description: "County, e.g. Dorset", width: "50%" } },
          ],
        },
        {
          type: "row",
          fields: [
            { name: "streetAddress", type: "text", admin: { description: "Optional — leave blank for a home-based business.", width: "50%" } },
            { name: "postalCode", type: "text", admin: { description: "Optional outward code, e.g. BH1", width: "50%" } },
          ],
        },
        {
          type: "row",
          fields: [
            { name: "latitude", type: "number", admin: { width: "50%" } },
            { name: "longitude", type: "number", admin: { width: "50%" } },
          ],
        },
        {
          name: "priceRange",
          type: "text",
          admin: { description: 'Rough price band shown to search engines, e.g. "££"' },
        },
        {
          name: "openingHours",
          type: "textarea",
          admin: { description: 'One per line in schema.org format, e.g. "Mo-Su 09:00-22:00"' },
        },
        {
          name: "defaultOgImage",
          type: "upload",
          relationTo: "media",
          admin: { description: "Default image for social previews (1200×630). Also used as the business image." },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Analytics & verification",
      admin: { initCollapsed: true },
      fields: [
        {
          name: "ga4MeasurementId",
          type: "text",
          admin: { description: 'Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX"' },
        },
        {
          name: "gscVerification",
          type: "text",
          admin: { description: "Google Search Console HTML-tag verification token (the content value only)." },
        },
        {
          name: "bingVerification",
          type: "text",
          admin: { description: "Bing Webmaster Tools msvalidate.01 token." },
        },
      ],
    },
  ],
};
