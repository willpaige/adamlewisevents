import { Reveal } from "../Reveal";
import { Stars } from "../Stars";
import type { Testimonial } from "@/payload-types";

type Intro = {
  label?: string | null;
  heading?: string | null;
  subheading?: string | null;
} | null | undefined;

export function TestimonialsSection({
  testimonials,
  intro,
  heading = "What people say",
  label = "Reviews",
}: {
  testimonials: Testimonial[];
  intro?: Intro;
  heading?: string;
  label?: string;
}) {
  const sectionLabel = intro?.label ?? label;
  const sectionHeading = intro?.heading ?? heading;
  return (
    <section className="testimonials" id="reviews">
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
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} className="test-card" delay={0.1 + i * 0.1}>
              <Stars count={t.rating ?? 5} />
              <p className="test-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="test-author">
                <div className="test-avatar">{t.avatarInitials}</div>
                <div>
                  <div className="test-name">{t.authorName}</div>
                  {t.eventType ? <div className="test-event">{t.eventType}</div> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
