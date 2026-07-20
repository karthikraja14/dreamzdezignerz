import Script from "next/script";
import { siteConfig } from "@/lib/site";

/**
 * Google Analytics 4 (gtag.js). Renders nothing unless NEXT_PUBLIC_GA_ID is set,
 * so it's safe to keep in the tree during development and before go-live.
 */
export function GoogleAnalytics() {
  const gaId = siteConfig.gaId;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
