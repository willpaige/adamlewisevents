import Link from "next/link";
import { Reveal } from "./Reveal";

export type Crumb = { name: string; path: string };

export function PageHero({
  label,
  heading,
  intro,
  breadcrumbs,
}: {
  label?: string | null;
  heading: string;
  intro?: string | null;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumbs && breadcrumbs.length > 1 ? (
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              {breadcrumbs.map((c, i) => (
                <li key={c.path}>
                  {i < breadcrumbs.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {label ? (
          <Reveal as="p" className="section-label">
            {label}
          </Reveal>
        ) : null}
        <Reveal as="h1" className="section-heading" delay={0.1}>
          {heading}
        </Reveal>
        {intro ? (
          <Reveal as="p" className="page-intro" delay={0.2}>
            {intro}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
