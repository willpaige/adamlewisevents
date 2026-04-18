import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    group: "System",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 480, height: undefined, position: "centre" },
      { name: "medium", width: 960, height: undefined, position: "centre" },
      { name: "large", width: 1600, height: undefined, position: "centre" },
    ],
    focalPoint: true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: { description: "Short description for screen readers." },
    },
  ],
};
