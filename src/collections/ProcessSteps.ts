import type { CollectionConfig } from "payload";

export const ProcessSteps: CollectionConfig = {
  slug: "process-steps",
  labels: {
    singular: "Process Step",
    plural: "Process Steps",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["number", "title", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    { name: "number", type: "text", required: true, admin: { description: '"01" ... "04"' } },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
