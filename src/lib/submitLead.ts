import { siteConfig } from "@/lib/site";

export type LeadResult = { ok: boolean; demo?: boolean; error?: string };

/**
 * Submit a lead / contact payload to the configured form endpoint.
 *
 * Works with Formspree, Web3Forms, or any endpoint that accepts a JSON POST.
 * If no endpoint is configured (NEXT_PUBLIC_FORM_ENDPOINT is empty) it resolves
 * in "demo" mode so the UI still shows a success state during development.
 */
export async function submitLead(
  data: Record<string, unknown>,
  formName = "Contact form",
): Promise<LeadResult> {
  const { formEndpoint, formAccessKey, name } = siteConfig;

  if (!formEndpoint) {
    // No backend wired yet — simulate a short delay so the success UI feels real.
    await new Promise((r) => setTimeout(r, 800));
    return { ok: true, demo: true };
  }

  const payload: Record<string, unknown> = {
    ...data,
    subject: `${formName} — ${name}`,
    from_site: siteConfig.url,
  };
  // Web3Forms requires the access key in the request body.
  if (formAccessKey) payload.access_key = formAccessKey;

  try {
    const res = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, error: `Submission failed (${res.status}). Please try again.` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
