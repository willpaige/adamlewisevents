import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaSection({
  heading = "Ready to talk?",
  text = "Send the date, the venue and what you're after — you'll hear back within 24 hours with availability and a no-obligation quote.",
  phone,
}: {
  heading?: string;
  text?: string | null;
  phone?: string | null;
}) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal as="h2" className="section-heading">
          {heading}
        </Reveal>
        {text ? (
          <Reveal as="p" className="cta-sub" delay={0.1}>
            {text}
          </Reveal>
        ) : null}
        <Reveal className="cta-actions" delay={0.15}>
          <Link href="/contact" className="btn-primary">
            Book Adam
          </Link>
          {phone ? (
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="btn-secondary">
              Call {phone}
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
