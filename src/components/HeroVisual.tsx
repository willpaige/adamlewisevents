export function HeroVisual({
  badgeNum,
  badgeLabel,
}: {
  badgeNum?: string | null;
  badgeLabel?: string | null;
}) {
  return (
    <div className="hero-visual">
      <div className="hero-image-frame">
        <div className="hero-vis">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="bar" />
          ))}
        </div>
        <div className="hero-initials">
          <span>AL</span>
        </div>
      </div>
      {(badgeNum || badgeLabel) && (
        <div className="hero-badge">
          {badgeNum ? <div className="hero-badge-num">{badgeNum}</div> : null}
          {badgeLabel ? <div className="hero-badge-label">{badgeLabel}</div> : null}
        </div>
      )}
    </div>
  );
}
