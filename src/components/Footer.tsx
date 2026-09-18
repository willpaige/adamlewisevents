import Link from "next/link";
import { getPayload } from "@/lib/payload";
import { SocialIcons } from "./SocialIcons";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/residencies", label: "Residencies" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas Covered" },
  { href: "/availability", label: "Availability" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQs" },
  { href: "/wedding-dj-cost-dorset", label: "Wedding DJ Cost Guide" },
  { href: "/contact", label: "Book Adam" },
];

export async function Footer() {
  const payload = await getPayload();
  const [settings, services, areas] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }),
    payload.find({ collection: "services", limit: 10, sort: "order" }),
    payload.find({ collection: "coverage-areas", limit: 20, sort: "order" }),
  ]);

  const year = new Date().getFullYear();
  const businessName = settings?.businessName?.trim() || "Adam Lewis Events";

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Adam Lewis <span>Events</span>
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
              {services.docs.map((s) => (
                <li key={s.id}>
                  <Link href={s.slug ? `/services/${s.slug}` : "/services"}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Areas</h4>
            <ul className="footer-links">
              {areas.docs.map((a) => (
                <li key={a.id}>
                  <Link href={a.slug ? `/areas/${a.slug}` : "/areas"}>{a.name}</Link>
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
              {settings?.googleBusinessProfileUrl ? (
                <li>
                  <a href={settings.googleBusinessProfileUrl} target="_blank" rel="noopener">
                    Google Reviews
                  </a>
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
            © {year} {businessName}. Bournemouth, Dorset. All rights reserved.
          </p>
          <div className="footer-social">
            <SocialIcons links={settings?.socialLinks} email={settings?.email} />
          </div>
        </div>
      </div>
    </footer>
  );
}
