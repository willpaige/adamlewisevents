import Link from "next/link";
import { HeroVisual } from "../HeroVisual";
import { MapPinIcon } from "../Icons";
import { ArrowRightIcon } from "../Icons";
import type { HomeHero } from "@/payload-types";

type Hero = Partial<HomeHero> | null | undefined;

function renderTitle(title?: string | null) {
  if (!title) return null;
  return title.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </span>
  ));
}

export function HeroSection({ hero }: { hero: Hero }) {
  if (!hero) return null;
  const primary = hero.primaryCta;
  const secondary = hero.secondaryCta;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {hero.locationBadge ? (
            <div className="hero-location">
              <MapPinIcon />
              {hero.locationBadge}
            </div>
          ) : null}
          {hero.heroLabel ? <p className="hero-label">{hero.heroLabel}</p> : null}
          {hero.heroTitle ? (
            <h1 className="hero-title">{renderTitle(hero.heroTitle)}</h1>
          ) : null}
          {hero.heroDescription ? <p className="hero-desc">{hero.heroDescription}</p> : null}
          <div className="hero-actions">
            {primary?.label && primary.href ? (
              <Link href={primary.href} className="btn-primary">
                {primary.label}
              </Link>
            ) : null}
            {secondary?.label && secondary.href ? (
              <a
                href={secondary.href}
                target={secondary.href.startsWith("http") ? "_blank" : undefined}
                rel={secondary.href.startsWith("http") ? "noopener" : undefined}
                className="btn-secondary"
              >
                {secondary.label}
                <ArrowRightIcon />
              </a>
            ) : null}
          </div>
        </div>
        <HeroVisual badgeNum={hero.badgeYears} badgeLabel={hero.badgeLabel} />
      </div>
    </section>
  );
}
