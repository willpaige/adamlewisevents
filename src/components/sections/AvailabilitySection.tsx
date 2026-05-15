import Link from "next/link";
import { Reveal } from "../Reveal";
import { AvailabilityGrid } from "../AvailabilityGrid";
import type { Booking } from "@/payload-types";

type Intro = {
  label?: string | null;
  heading?: string | null;
  subheading?: string | null;
} | null | undefined;

function renderMultiline(value?: string | null) {
  if (!value) return null;
  return value.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </span>
  ));
}

export function AvailabilitySection({
  bookings,
  intro,
}: {
  bookings: Booking[];
  intro?: Intro;
}) {
  return (
    <section className="availability" id="availability">
      <div className="container">
        {intro?.label ? (
          <Reveal as="p" className="section-label">
            {intro.label}
          </Reveal>
        ) : null}
        {intro?.heading ? (
          <Reveal as="h2" className="section-heading" delay={0.1}>
            {renderMultiline(intro.heading)}
          </Reveal>
        ) : null}
        {intro?.subheading ? (
          <Reveal as="p" className="avail-sub" delay={0.2}>
            {intro.subheading}
          </Reveal>
        ) : (
          <Reveal as="p" className="avail-sub" delay={0.2}>
            Dates I&apos;m already booked for the coming months. Don&apos;t see your date? I&apos;m
            probably free — <Link href="/contact">get in touch</Link> and I&apos;ll confirm within
            24 hours.
          </Reveal>
        )}
        <AvailabilityGrid
          bookings={bookings.map((b) => ({
            date: b.date,
            eventName: b.eventName,
            venue: b.venue,
            type: b.type,
          }))}
        />
        <Reveal as="p" className="avail-note" delay={0.4}>
          Dates shown are confirmed bookings only. Weekly Cameo residency nights run continuously
          and aren&apos;t listed individually. Direct enquiries are welcome, with agent bookings
          managed alongside.
        </Reveal>
      </div>
    </section>
  );
}
