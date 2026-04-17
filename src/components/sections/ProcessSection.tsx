import { Reveal } from "../Reveal";
import type { ProcessStep } from "@/payload-types";

export function ProcessSection({
  steps,
  label = "How It Works",
  heading = "Simple from start to finish",
}: {
  steps: ProcessStep[];
  label?: string;
  heading?: string;
}) {
  return (
    <section className="process" id="process">
      <div className="container">
        <Reveal as="p" className="section-label" style={{ textAlign: "center" }}>
          {label}
        </Reveal>
        <Reveal as="h2" className="section-heading" delay={0.1}>
          {heading}
        </Reveal>
        <div className="process-steps">
          {steps.map((s, i) => (
            <Reveal key={s.id} className="process-step" delay={i * 0.1}>
              <div className="step-num">{s.number}</div>
              <div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
