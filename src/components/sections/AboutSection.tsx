import { Reveal } from "../Reveal";
import type { AboutPage } from "@/payload-types";

function renderMultiline(value?: string | null) {
  if (!value) return null;
  return value.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </span>
  ));
}

export function AboutSection({ about }: { about: Partial<AboutPage> | null | undefined }) {
  if (!about) return null;
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal className="about-left">
          {about.label ? <p className="section-label">{about.label}</p> : null}
          {about.heading ? (
            <h2 className="section-heading">{renderMultiline(about.heading)}</h2>
          ) : null}
        </Reveal>
        <div className="about-right">
          {(about.paragraphs ?? []).map((p, i) => (
            <Reveal
              key={p.id ?? i}
              as="p"
              className="about-text"
              delay={i * 0.1}
            >
              {p.body}
            </Reveal>
          ))}
          {about.byline ? (
            <Reveal className="about-name" delay={0.25}>
              {about.byline}
            </Reveal>
          ) : null}
          {about.role ? (
            <Reveal className="about-role" delay={0.25}>
              {about.role}
            </Reveal>
          ) : null}
          {about.stats && about.stats.length > 0 ? (
            <div className="about-stats">
              {about.stats.map((s, i) => (
                <Reveal key={s.id ?? i} className="about-stat" delay={i * 0.1}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-desc">{s.description}</div>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
