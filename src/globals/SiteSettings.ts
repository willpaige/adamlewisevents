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
  ],
};
