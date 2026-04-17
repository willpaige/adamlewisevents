import type { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: "bookings",
  labels: {
    singular: "Booked Date",
    plural: "Booked Dates",
  },
  admin: {
    useAsTitle: "eventName",
    defaultColumns: ["date", "eventName", "venue", "type"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  defaultSort: "date",
  fields: [
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    { name: "eventName", type: "text", required: true },
    { name: "venue", type: "text" },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Festival", value: "festival" },
        { label: "Residency", value: "residency" },
        { label: "Wedding", value: "wedding" },
        { label: "Private Event", value: "private" },
        { label: "Corporate", value: "corporate" },
      ],
    },
  ],
};
