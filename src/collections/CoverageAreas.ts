import type { CollectionConfig } from "payload";
import { faqsField, seoFields, slugField } from "@/fields/seo";

export const CoverageAreas: CollectionConfig = {
  slug: "coverage-areas",
  labels: {
    singular: "Coverage Area",
    plural: "Coverage Areas",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "detail", "slug", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "detail", type: "text", admin: { description: 'Short label on the card, e.g. "Hampshire"' } },
    { name: "order", type: "number", defaultValue: 0 },
    slugField("name"),
    {
      name: "schemaType",
      type: "select",
      defaultValue: "City",
      options: [
        { label: "Town / city", value: "City" },
        { label: "County / region", value: "AdministrativeArea" },
      ],
      admin: {
        position: "sidebar",
        description: "How this area is described to search engines.",
      },
    },
    {
      type: "collapsible",
      label: "Area page",
      admin: {
        description: "Content for the dedicated page at /areas/<slug>.",
        initCollapsed: false,
      },
      fields: [
        {
          name: "heading",
          type: "text",
          admin: { description: 'Main page heading (H1), e.g. "Wedding & Event DJ in Poole"' },
        },
        { name: "intro", type: "textarea" },
        { name: "body", type: "richText" },
        {
          name: "nearbyVenues",
          label: "Venues in this area",
          type: "array",
          admin: { description: "Venues Adam has played or regularly works with in this area." },
          fields: [
            { name: "name", type: "text", required: true },
            {
              name: "type",
              type: "select",
              options: [
                { label: "Wedding venue", value: "wedding" },
                { label: "Club / bar", value: "club" },
                { label: "Hotel", value: "hotel" },
                { label: "Festival / outdoor", value: "festival" },
                { label: "Other", value: "other" },
              ],
            },
            { name: "url", type: "text" },
          ],
        },
        faqsField,
      ],
    },
    seoFields,
  ],
};
