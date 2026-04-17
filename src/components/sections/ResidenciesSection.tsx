import Link from "next/link";
import { Reveal } from "../Reveal";
import type { Residency } from "@/payload-types";

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

export function ResidenciesSection({
  residencies,
  intro,
  showHighlight = true,
}: {
  residencies: Residency[];
  intro?: Intro;
  showHighlight?: boolean;
}) {
  const current = residencies.filter((r) => r.status === "current");
  const previous = residencies.filter((r) => r.status === "previous");

  return (
    <section className="residencies" id="residencies">
      <div className="container">
        {intro?.label ? <Reveal as="p" className="section-label">{intro.label}</Reveal> : null}
        {intro?.heading ? (
          <Reveal as="h2" className="section-heading" delay={0.1}>
            {renderMultiline(intro.heading)}
          </Reveal>
        ) : null}
        {intro?.subheading ? (
          <Reveal as="p" className="res-sub" delay={0.2}>
            {intro.subheading}
          </Reveal>
        ) : null}
        <div className="res-groups">
          {current.length > 0 ? (
            <Reveal>
              <p className="res-group-label">Current Residencies &amp; Bookings</p>
              <div className="res-list">
                {current.map((r) => (
                  <ResidencyItem key={r.id} residency={r} />
                ))}
              </div>
            </Reveal>
          ) : null}
          {previous.length > 0 ? (
            <Reveal delay={0.1}>
              <p className="res-group-label">Previous Residencies &amp; Highlights</p>
              <div className="res-list">
                {previous.map((r) => (
                  <ResidencyItem key={r.id} residency={r} />
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
        {showHighlight ? (
          <Reveal className="res-highlight" delay={0.2}>
            <div>
              <div className="res-highlight-text">
                Second festival booking <span>confirmed for 2026</span> — announcement coming soon.
              </div>
              <div className="res-highlight-sub">
                Promoters and venues — get in touch for the latest availability.
              </div>
            </div>
            <Link
              href="/availability"
              className="btn-secondary"
              style={{
                fontSize: "0.72rem",
                padding: "12px 22px",
                border: "1px solid var(--border-hover)",
                color: "var(--text)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
            >
              View Availability
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function ResidencyItem({ residency }: { residency: Residency }) {
  return (
    <div className="res-item">
      <div>
        <div className="res-name">{residency.venue}</div>
        <div className="res-role">{residency.role}</div>
      </div>
      {residency.location ? <div className="res-meta">{residency.location}</div> : null}
    </div>
  );
}
