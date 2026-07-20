import { COMPANY } from "@/lib/constants";

/**
 * Central, deploy-time site configuration.
 *
 * Everything here reads from environment variables (see `.env.example`) with
 * safe fallbacks, so you can update values without touching component code:
 *   1. Copy `.env.example` -> `.env.local`
 *   2. Fill in the real values (domain, GA id, form endpoint, etc.)
 *   3. Redeploy.
 *
 * Contact details (phone / email / address / WhatsApp) live in
 * `src/lib/constants.ts` under `COMPANY` — edit them there.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dreamzdezignerz.com";
// Normalise: strip any trailing slash so we can safely concatenate paths.
const siteUrl = rawUrl.replace(/\/$/, "");

export const siteConfig = {
  /** Public production URL — set NEXT_PUBLIC_SITE_URL once the domain is live. */
  url: siteUrl,
  name: COMPANY.name,
  shortName: "Dreamz Dezignerz",
  title: "Dreamz Dezignerz | Interior • Construction • Renovation",
  description:
    "End-to-end interior design, construction, renovation & project management in Chennai. Precision engineering, bespoke design and real-time project tracking powered by Vystra.",
  locale: "en_IN",

  /** Google Analytics 4 Measurement ID, e.g. "G-XXXXXXXXXX". Leave empty to disable. */
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",

  /**
   * Where contact / lead forms POST to.
   * - Formspree:  https://formspree.io/f/xxxxxxxx
   * - Web3Forms:  https://api.web3forms.com/submit  (also set NEXT_PUBLIC_FORM_ACCESS_KEY)
   * Leave empty to keep forms in "demo" mode (no network call).
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  /** Web3Forms access key (only needed if using Web3Forms). */
  formAccessKey: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "",

  /** Social handles (used for JSON-LD `sameAs`). Fill in when available. */
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
} as const;

/** Absolute URL helper for canonicals, sitemap and OG tags. */
export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
