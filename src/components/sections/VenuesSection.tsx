import { Reveal } from "../Reveal";

type Venue = { id?: string | null; name: string; type?: string | null; url?: string | null };

const TYPE_LABEL: Record<string, string> = {
  wedding: "Wedding venue",
  club: "Club / bar",
  hotel: "Hotel",
  festival: "Festival / outdoor",
  other: "Venue",
};

export function VenuesSection({ venues, areaName }: { venues?: Venue[] | null; areaName: string }) {
  const items = (venues ?? []).filter((v) => v.name);
  if (!items.length) return null;
  return (
    <section className="venues">
      <div className="container">
        <Reveal as="p" className="section-label">
          Venues
        </Reveal>
        <Reveal as="h2" className="section-heading" delay={0.1}>
          Venues in and around {areaName}
        </Reveal>
        <ul className="venue-list">
          {items.map((v, i) => (
            <Reveal key={v.id ?? i} as="li" className="venue-item" delay={Math.min(i * 0.04, 0.4)}>
              <div className="venue-name">
                {v.url ? (
                  <a href={v.url} target="_blank" rel="noopener">
                    {v.name}
                  </a>
                ) : (
                  v.name
                )}
              </div>
              {v.type ? <div className="venue-type">{TYPE_LABEL[v.type] ?? v.type}</div> : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
