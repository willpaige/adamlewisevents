import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { eventsSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/JsonLd";
import { AvailabilitySection } from "@/components/sections/AvailabilitySection";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "DJ Availability & Upcoming Dates — Bournemouth, Dorset & the South Coast",
  description:
    "Check Adam Lewis's confirmed DJ bookings for the coming months. Don't see your date? He's probably free — enquire and get a reply within 24 hours.",
  path: "/availability",
});

export default async function AvailabilityPage() {
  const payload = await getPayload();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [bookings, intros] = await Promise.all([
    payload.find({
      collection: "bookings",
      limit: 200,
      sort: "date",
      where: { date: { greater_than_equal: today.toISOString() } },
    }),
    payload.findGlobal({ slug: "page-intros" }),
  ]);

  return (
    <main style={{ paddingTop: "6rem" }}>
      {bookings.docs.length ? <JsonLd data={eventsSchema(bookings.docs)} /> : null}
      <AvailabilitySection bookings={bookings.docs} intro={intros?.availability} headingLevel="h1" />
    </main>
  );
}
