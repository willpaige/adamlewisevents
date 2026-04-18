import type { CollectionConfig } from "payload";

export const GalleryEvents: CollectionConfig = {
  slug: "gallery-events",
  labels: {
    singular: "Gallery Event",
    plural: "Gallery Events",
  },
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "type", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    { name: "label", type: "text", required: true },
    { name: "type", type: "text", required: true, admin: { description: 'e.g. "Summer Residency", "Royal Regatta"' } },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: { description: "Optional photo (replaces the animated bars)." },
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
