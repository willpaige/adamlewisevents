import { Reveal } from "../Reveal";

export type Faq = { id?: string | null; question: string; answer: string };

export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
  label = "FAQs",
  headingLevel = "h2",
}: {
  faqs?: Faq[] | null;
  heading?: string;
  label?: string;
  headingLevel?: "h1" | "h2";
}) {
  const items = (faqs ?? []).filter((f) => f.question && f.answer);
  if (!items.length) return null;
  return (
    <section className="faq" id="faq">
      <div className="container">
        <Reveal as="p" className="section-label">
          {label}
        </Reveal>
        <Reveal as={headingLevel} className="section-heading" delay={0.1}>
          {heading}
        </Reveal>
        <div className="faq-list">
          {items.map((f, i) => (
            <Reveal key={f.id ?? i} className="faq-item" delay={Math.min(i * 0.05, 0.4)}>
              <h3 className="faq-q">{f.question}</h3>
              <p className="faq-a">{f.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
