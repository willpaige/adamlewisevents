import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { SocialIcons } from "./SocialIcons";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/residencies", label: "Residencies" },
  { href: "/services", label: "Services" },
  { href: "/availability", label: "Availability" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Book Adam" },
];

const bookingsLinks = [
  { label: "Festivals" },
  { label: "Club Nights" },
  { label: "Weddings" },
  { label: "Private Parties" },
  { label: "Corporate" },
];

export async function Footer() {
  const payload = await getPayload();
  const settings = await payload.findGlobal({ slug: "site-settings" });

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Adam Lewis <span>DJ</span>
            </div>
            <p className="footer-tagline">{settings?.footerTagline}</p>
          </div>
          <div>
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Bookings For</h4>
            <ul className="footer-links">
              {bookingsLinks.map((link) => (
                <li key={link.label}>
                  <Link href="/services">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              {settings?.phone ? (
                <li>
                  <a href={`tel:${settings.phone.replace(/\s+/g, "")}`}>{settings.phone}</a>
                </li>
              ) : null}
              {settings?.email ? (
                <li>
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </li>
              ) : null}
              {settings?.youtubeUrl ? (
                <li>
                  <a href={settings.youtubeUrl} target="_blank" rel="noopener">
                    YouTube
                  </a>
                </li>
              ) : null}
              {settings?.mixcloudUrl ? (
                <li>
                  <a href={settings.mixcloudUrl} target="_blank" rel="noopener">
                    Mixcloud
                  </a>
                </li>
              ) : null}
              <li>
                <Link href="/availability">Check Availability</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Adam Lewis DJ. Bournemouth, Dorset. All rights reserved.
          </p>
          <div className="footer-social">
            <SocialIcons links={settings?.socialLinks} email={settings?.email} />
          </div>
        </div>
      </div>
    </footer>
  );
}
