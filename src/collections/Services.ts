import type { CollectionConfig } from "payload";
import { faqsField, seoFields, slugField } from "@/fields/seo";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["number", "title", "slug", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    {
      name: "number",
      type: "text",
      required: true,
      admin: {
        description: 'e.g. "01", "02", ... "06"',
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: { description: "Short blurb shown on the service card." },
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
    slugField("title"),
    {
      type: "collapsible",
      label: "Service page",
      admin: {
        description: "Content for the dedicated page at /services/<slug>.",
        initCollapsed: false,
      },
      fields: [
        {
          name: "heroHeading",
          type: "text",
          admin: { description: 'Main page heading (H1), e.g. "Wedding DJ in Bournemouth & Dorset"' },
        },
        {
          name: "intro",
          type: "textarea",
          admin: { description: "One or two sentences under the heading." },
        },
        {
          name: "body",
          type: "richText",
        },
        faqsField,
        {
          name: "relatedAreas",
          type: "relationship",
          relationTo: "coverage-areas",
          hasMany: true,
          admin: { description: "Areas to highlight on this service page (defaults to all)." },
        },
      ],
    },
    seoFields,
  ],
};
