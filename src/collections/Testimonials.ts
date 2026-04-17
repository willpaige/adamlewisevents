import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "eventType", "rating", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
    },
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "eventType",
      type: "text",
      admin: { description: 'e.g. "Private Event — Ashdown Park"' },
    },
    {
      name: "avatarInitials",
      type: "text",
      maxLength: 3,
      admin: { description: "1–3 letters shown in the avatar circle" },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
