import { COMPANY } from "@/lib/constants";
import { siteConfig, absoluteUrl } from "@/lib/site";

/**
 * JSON-LD structured data for the business. Helps Google understand the
 * organisation (name, contact, area served) and can power rich results.
 */
export function OrganizationJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": absoluteUrl("/#business"),
    name: COMPANY.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/logo-mark@512.png"),
    logo: absoluteUrl("/logo-icon.png"),
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: { "@type": "State", name: "Tamil Nadu" },
    priceRange: "₹₹₹",
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Optional per-service structured data for service detail pages. */
export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "State", name: "Tamil Nadu" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
