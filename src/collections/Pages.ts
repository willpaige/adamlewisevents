import type { CollectionConfig } from "payload";
import { faqsField, seoFields, slugField } from "@/fields/seo";

/**
 * Long-form guide pages rendered at /<slug> (e.g. /faq, /wedding-dj-cost-dorset).
 */
export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    slugField("title"),
    {
      name: "label",
      type: "text",
      admin: { description: 'Small uppercase label above the heading, e.g. "Pricing guide"' },
    },
    {
      name: "heroHeading",
      type: "text",
      admin: { description: "Main page heading (H1). Defaults to the title." },
    },
    { name: "intro", type: "textarea" },
    { name: "body", type: "richText" },
    faqsField,
    {
      name: "showFaqsFirst",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Show the FAQ list above the body text (for pages where the FAQs are the main content)." },
    },
    seoFields,
  ],
};
