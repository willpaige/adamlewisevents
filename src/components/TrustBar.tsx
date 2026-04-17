import type { ReactNode } from "react";
import { ShieldIcon, ClockIcon, CheckShieldIcon, HeartIcon } from "./Icons";

const fallbackIcons: ReactNode[] = [
  <ShieldIcon key="shield" />,
  <ClockIcon key="clock" />,
  <CheckShieldIcon key="check" />,
  <HeartIcon key="heart" />,
];

export function TrustBar({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="trust-bar">
      <div className="container">
        {items.map((label, i) => (
          <div key={i} className="trust-item">
            {fallbackIcons[i % fallbackIcons.length]}
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
