import { Reveal } from "../Reveal";
import { MapPinIcon } from "../Icons";
import type { CoverageArea } from "@/payload-types";

export function CoverageAreasSection({
  areas,
  heading = "Based in Bournemouth,\navailable across the South",
  subheading = "I'm based on the South Coast and regularly DJ events across Dorset, Hampshire, Wiltshire, and Somerset. Happy to travel further for the right event.",
  label = "Areas Covered",
  note = "Further afield? No problem. I regularly travel across the South West and beyond for the right event — just get in touch.",
}: {
  areas: CoverageArea[];
  heading?: string;
  subheading?: string;
  label?: string;
  note?: string;
}) {
  return (
    <section className="areas" id="areas">
      <div className="container">
        <Reveal as="p" className="section-label">{label}</Reveal>
        <Reveal as="h2" className="section-heading" delay={0.1}>
          {heading.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </Reveal>
        {subheading ? (
          <Reveal as="p" className="areas-sub" delay={0.2}>
            {subheading}
          </Reveal>
        ) : null}
        <div className="areas-grid">
          {areas.map((a, i) => (
            <Reveal key={a.id} className="area-card" delay={i * 0.05}>
              <MapPinIcon />
              <div>
                <div className="area-name">{a.name}</div>
                {a.detail ? <div className="area-detail">{a.detail}</div> : null}
              </div>
            </Reveal>
          ))}
        </div>
        {note ? (
          <Reveal as="p" className="areas-note" delay={0.6}>
            {note}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
