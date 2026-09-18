import Script from "next/script";

/** GA4 tag. Rendered only in production and only when an ID is configured in Site Settings. */
export function GoogleAnalytics({ measurementId }: { measurementId?: string | null }) {
  const id = measurementId?.trim();
  if (!id || process.env.VERCEL_ENV !== "production") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
