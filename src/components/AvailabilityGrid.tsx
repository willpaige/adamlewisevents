import { Reveal } from "./Reveal";

type Booking = {
  date: string;
  eventName: string;
  venue?: string | null;
  type: "festival" | "residency" | "wedding" | "private" | "corporate" | string;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TYPE_LABELS: Record<string, string> = {
  festival: "Festival",
  residency: "Residency",
  wedding: "Wedding",
  private: "Private Event",
  corporate: "Corporate",
};

export function AvailabilityGrid({ bookings }: { bookings: Booking[] }) {
  if (!bookings || bookings.length === 0) {
    return (
      <Reveal className="avail-grid" delay={0.3}>
        <div className="avail-empty">
          <div className="avail-empty-title">Diary&apos;s open</div>
          <div className="avail-empty-text">
            No confirmed dates on the calendar right now — which means I&apos;m available.
            Drop me a line to book your event.
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="avail-grid" delay={0.3}>
      {bookings.map((b, i) => {
        const d = new Date(b.date);
        const day = d.getDate();
        const month = MONTHS[d.getMonth()];
        const year = d.getFullYear();
        const typeLabel = TYPE_LABELS[b.type] ?? "Booked";
        return (
          <div key={i} className="avail-card">
            <div className="avail-date">
              <div className="avail-day">{day}</div>
              <div className="avail-month">{month}</div>
              <div className="avail-year">{year}</div>
            </div>
            <div className="avail-body">
              <span className="avail-type">{typeLabel}</span>
              <div className="avail-event">{b.eventName}</div>
              {b.venue ? <div className="avail-venue">{b.venue}</div> : null}
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
