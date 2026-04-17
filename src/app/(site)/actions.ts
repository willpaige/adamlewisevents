"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { getPayload } from "@/lib/payload";

const EVENT_TYPES = [
  "wedding",
  "private",
  "corporate",
  "festival",
  "club",
  "residency",
  "other",
] as const;

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  eventType: z.enum(EVENT_TYPES, { errorMap: () => ({ message: "Pick an event type" }) }),
  eventDate: z
    .string()
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine(
      (v) => {
        if (!v) return true;
        const d = new Date(v);
        if (Number.isNaN(d.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return d >= today;
      },
      { message: "Event date can't be in the past" },
    ),
  venue: z.string().trim().max(200).optional().transform((v) => v || undefined),
  message: z.string().trim().min(1, "Tell Adam a bit about the event").max(2000),
});

export type EnquiryState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof enquirySchema>, string[]>>;
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    eventType: String(formData.get("eventType") ?? ""),
    eventDate: formData.get("eventDate") ? String(formData.get("eventDate")) : undefined,
    venue: formData.get("venue") ? String(formData.get("venue")) : undefined,
    message: String(formData.get("message") ?? ""),
  };

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;
  const payload = await getPayload();

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { totalDocs } = await payload.find({
    collection: "submissions",
    where: {
      and: [
        { email: { equals: data.email } },
        { submittedAt: { greater_than: oneHourAgo } },
      ],
    },
    limit: 0,
    overrideAccess: true,
  });
  if (totalDocs >= 5) {
    return {
      ok: false,
      message: "Too many enquiries from this email in the last hour. Try again later or call 07341 950521.",
    };
  }

  const h = await headers();
  const ipAddress =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    undefined;

  try {
    await payload.create({
      collection: "submissions",
      overrideAccess: true,
      data: {
        name: data.name,
        email: data.email,
        eventType: data.eventType,
        eventDate: data.eventDate,
        venue: data.venue,
        message: data.message,
        submittedAt: new Date().toISOString(),
        ipAddress,
      },
    });
  } catch (err) {
    console.error("submitEnquiry failed", err);
    return {
      ok: false,
      message: "Something went wrong sending your enquiry. Please try again in a moment.",
    };
  }

  return {
    ok: true,
    message: "Thanks — your enquiry is in. Adam will be back to you within 24 hours.",
  };
}
