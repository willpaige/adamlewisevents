import type { CollectionConfig } from "payload";

export const Residencies: CollectionConfig = {
  slug: "residencies",
  admin: {
    useAsTitle: "venue",
    defaultColumns: ["venue", "role", "location", "status", "order"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    {
      name: "venue",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: {
        description: "e.g. 'Resident DJ', 'Guest Slot', 'Headliner'",
      },
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "current",
      options: [
        { label: "Current", value: "current" },
        { label: "Previous", value: "previous" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Lower numbers appear first within their group.",
      },
    },
  ],
};
