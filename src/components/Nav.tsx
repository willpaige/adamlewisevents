"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/residencies", label: "Residencies" },
  { href: "/services", label: "Services" },
  { href: "/availability", label: "Availability" },
  { href: "/reviews", label: "Reviews" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : undefined}>
        <div className="container">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            Adam Lewis <span>DJ</span>
          </Link>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav-cta">
                Book Adam
              </Link>
            </li>
          </ul>
          <button
            className={`menu-toggle${open ? " active" : ""}`}
            id="menuToggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="mobile-link" onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="mobile-link" onClick={closeMenu}>
          Book Adam
        </Link>
      </div>
    </>
  );
}
