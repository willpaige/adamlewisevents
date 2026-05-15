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
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional photo displayed in the hero (replaces the animated bars + AL badge).",
      },
    },
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
    { name: "videoUrl", type: "text", admin: { description: "YouTube URL (e.g. https://youtu.be/abc123). Leave blank to hide the section." } },
    { name: "videoLabel", type: "text", admin: { description: 'Small label above the video, e.g. "Watch"' } },
    { name: "videoHeading", type: "text", admin: { description: 'Heading above the video, e.g. "Hear the music"' } },
  ],
};
