import { Reveal } from "../Reveal";
import { ContactForm } from "../ContactForm";
import { PhoneIcon, EmailIcon, EqualizerIcon, YoutubeIcon, MapPinIcon } from "../Icons";
import type { SiteSetting } from "@/payload-types";

type Intro = {
  label?: string | null;
  heading?: string | null;
  subheading?: string | null;
} | null | undefined;

function renderMultiline(value?: string | null) {
  if (!value) return null;
  return value.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </span>
  ));
}

export function ContactSection({
  settings,
  intro,
}: {
  settings: Partial<SiteSetting> | null | undefined;
  intro?: Intro;
}) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-info">
          {intro?.label ? (
            <Reveal as="p" className="section-label">
              {intro.label}
            </Reveal>
          ) : (
            <Reveal as="p" className="section-label">
              Get in Touch
            </Reveal>
          )}
          <Reveal as="h2" delay={0.1}>
            {intro?.heading ? (
              renderMultiline(intro.heading)
            ) : (
              <>
                Got an event?
                <br />
                <span className="accent">Let&apos;s make it happen.</span>
              </>
            )}
          </Reveal>
          <Reveal as="p" className="contact-sub" delay={0.2}>
            {intro?.subheading ??
              "Festival, club night, wedding or private booking — drop me a line with the date, venue and what you're after. I'll come back to you within 24 hours."}
          </Reveal>
          <Reveal className="contact-details" delay={0.3}>
            {settings?.phone ? (
              <div className="contact-detail">
                <PhoneIcon />
                <a href={`tel:${settings.phone.replace(/\s+/g, "")}`}>{settings.phone}</a>
              </div>
            ) : null}
            {settings?.email ? (
              <div className="contact-detail">
                <EmailIcon />
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </div>
            ) : null}
            {settings?.youtubeUrl ? (
              <div className="contact-detail">
                <YoutubeIcon />
                <a href={settings.youtubeUrl} target="_blank" rel="noopener">
                  Watch on YouTube
                </a>
              </div>
            ) : null}
            {settings?.mixcloudUrl ? (
              <div className="contact-detail">
                <EqualizerIcon />
                <a href={settings.mixcloudUrl} target="_blank" rel="noopener">
                  Listen on Mixcloud
                </a>
              </div>
            ) : null}
            {settings?.locationTagline ? (
              <div className="contact-detail">
                <MapPinIcon />
                {settings.locationTagline}
              </div>
            ) : null}
          </Reveal>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
