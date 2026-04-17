import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { AvailabilitySection } from "@/components/sections/AvailabilitySection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Availability",
  description: "Upcoming confirmed bookings. Don't see your date? Get in touch.",
};

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
      <AvailabilitySection bookings={bookings.docs} intro={intros?.availability} />
    </main>
  );
}
