import type { GlobalConfig } from "payload";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "About Page",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    { name: "label", type: "text", admin: { description: 'Small uppercase section label, e.g. "About Adam"' } },
    { name: "heading", type: "text", required: true },
    {
      name: "paragraphs",
      type: "array",
      fields: [{ name: "body", type: "textarea", required: true }],
    },
    { name: "byline", type: "text", admin: { description: 'Name shown at bottom of narrative, e.g. "Adam Lewis"' } },
    { name: "role", type: "text", admin: { description: 'e.g. "DJ · 25+ years"' } },
    {
      name: "stats",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "description", type: "text", required: true },
      ],
    },
  ],
};
