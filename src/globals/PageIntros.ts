import type { GlobalConfig } from "payload";

const introGroup = (name: string, label: string) => ({
  name,
  label,
  type: "group" as const,
  fields: [
    { name: "label", type: "text" as const, admin: { description: "Small uppercase section label above the heading." } },
    { name: "heading", type: "text" as const, required: true },
    { name: "subheading", type: "textarea" as const },
  ],
});

export const PageIntros: GlobalConfig = {
  slug: "page-intros",
  label: "Page Intros",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    introGroup("residencies", "Residencies page"),
    introGroup("services", "Services page"),
    introGroup("availability", "Availability page"),
    introGroup("reviews", "Reviews page"),
    introGroup("contact", "Contact page"),
  ],
};
