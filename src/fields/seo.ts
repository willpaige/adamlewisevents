import type { GroupField, TextField } from "payload";
import { slugify } from "@/lib/seo/site";

/**
 * Reusable per-document SEO overrides. Everything is optional — pages fall back
 * to sensible defaults built from their own content.
 */
export const seoFields: GroupField = {
  name: "seo",
  label: "SEO",
  type: "group",
  admin: {
    description:
      "Optional overrides for Google and social previews. Leave blank to use the defaults generated from the page content.",
  },
  fields: [
    {
      name: "metaTitle",
      type: "text",
      maxLength: 70,
      admin: { description: "Browser/search title. Aim for 50–60 characters." },
    },
    {
      name: "metaDescription",
      type: "textarea",
      maxLength: 170,
      admin: { description: "Search snippet. Aim for 140–160 characters." },
    },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
      admin: { description: "Image shown when the page is shared on social (1200×630 ideal)." },
    },
    {
      name: "noIndex",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Hide this page from search engines and the sitemap." },
    },
  ],
};

/**
 * URL slug. Deliberately not `required` (which would add NOT NULL to existing
 * rows); the hook guarantees a value from the source field instead.
 */
export const slugField = (from: string): TextField => ({
  name: "slug",
  type: "text",
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description: "URL segment, e.g. wedding-dj-bournemouth. Generated from the title if left blank.",
  },
  hooks: {
    beforeValidate: [
      ({ value, data, siblingData }) => {
        const source = (data?.[from] ?? siblingData?.[from]) as string | undefined;
        const raw = typeof value === "string" && value.trim() ? value : source ?? "";
        return raw ? slugify(raw) : value;
      },
    ],
  },
});

export const faqsField = {
  name: "faqs",
  label: "FAQs",
  type: "array" as const,
  admin: {
    description:
      "Question & answer pairs shown on the page and published as FAQ structured data. Write answers as direct, complete sentences.",
  },
  fields: [
    { name: "question", type: "text" as const, required: true },
    { name: "answer", type: "textarea" as const, required: true },
  ],
};
