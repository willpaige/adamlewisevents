import { Reveal } from "../Reveal";
import type { Service } from "@/payload-types";

type Intro = {
  label?: string | null;
  heading?: string | null;
  subheading?: string | null;
} | null | undefined;

export function ServicesSection({
  services,
  intro,
  heading = "Whatever the event",
  label = "Services",
}: {
  services: Service[];
  intro?: Intro;
  heading?: string;
  label?: string;
}) {
  const sectionLabel = intro?.label ?? label;
  const sectionHeading = intro?.heading ?? heading;
  return (
    <section className="services" id="services">
      <div className="container">
        {sectionLabel ? <Reveal as="p" className="section-label">{sectionLabel}</Reveal> : null}
        {sectionHeading ? (
          <Reveal as="h2" className="section-heading" delay={0.1}>
            {sectionHeading}
          </Reveal>
        ) : null}
        {intro?.subheading ? (
          <Reveal as="p" className="res-sub" delay={0.2} style={{ marginBottom: "2rem" }}>
            {intro.subheading}
          </Reveal>
        ) : null}
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.id} className="service-card" delay={0.1 + i * 0.05}>
              <div className="service-num">{s.number}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              {s.tags && s.tags.length > 0 ? (
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span key={t.id ?? t.label} className="service-tag">
                      {t.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
