import type { GlobalConfig } from "payload";

export const HomeHero: GlobalConfig = {
  slug: "home-hero",
  label: "Home Hero",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    { name: "locationBadge", type: "text", admin: { description: 'e.g. "Bournemouth, UK"' } },
    { name: "heroLabel", type: "text", admin: { description: 'Small tagline above the title, e.g. "Former Hed Kandi Resident · 25+ Years"' } },
    { name: "heroTitle", type: "text", required: true },
    { name: "heroDescription", type: "textarea", required: true },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    { name: "badgeYears", type: "text", admin: { description: 'Big initials/badge label, e.g. "AL"' } },
    { name: "badgeLabel", type: "text", admin: { description: 'e.g. "25+ Years Experience"' } },
    {
      name: "trustItems",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "marqueeItems",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
