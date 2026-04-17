import type { CollectionConfig } from "payload";

export const Submissions: CollectionConfig = {
  slug: "submissions",
  labels: {
    singular: "Enquiry",
    plural: "Enquiries",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["submittedAt", "name", "eventType", "eventDate", "venue"],
    group: "System",
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    {
      name: "eventType",
      type: "select",
      required: true,
      options: [
        { label: "Wedding", value: "wedding" },
        { label: "Private Event", value: "private" },
        { label: "Corporate", value: "corporate" },
        { label: "Festival / Outdoor", value: "festival" },
        { label: "Club / Bar", value: "club" },
        { label: "Residency", value: "residency" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "eventDate",
      type: "date",
      admin: { date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyyy" } },
    },
    { name: "venue", type: "text" },
    { name: "message", type: "textarea", required: true },
    {
      name: "submittedAt",
      type: "date",
      admin: { readOnly: true },
    },
    {
      name: "ipAddress",
      type: "text",
      admin: { readOnly: true },
    },
  ],
};
