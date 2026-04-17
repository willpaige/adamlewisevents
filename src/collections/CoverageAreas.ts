import type { CollectionConfig } from "payload";

export const CoverageAreas: CollectionConfig = {
  slug: "coverage-areas",
  labels: {
    singular: "Coverage Area",
    plural: "Coverage Areas",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "detail", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "detail", type: "text" },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
