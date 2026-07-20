# Dreamz Dezignerz — Go‑Live Instructions

A step‑by‑step checklist of everything **you** still need to do to take the site fully live.
Do them **one at a time, top to bottom**. Nothing here requires code changes — it's all
config, accounts, and content. When all boxes are ticked, redeploy and you're live.

> Tech: Next.js 16 (App Router). All settings are read from environment variables in
> `.env.local` (copy from `.env.example`). Contact details live in `src/lib/constants.ts`.

---

## 0. Current status (what's already done)

- ✅ 9 pages + custom "Blueprint" design system
- ✅ SEO suite: per‑page metadata, `sitemap.xml`, `robots.txt`, JSON‑LD, social share image
- ✅ Google Analytics wiring (needs your ID)
- ✅ Contact form wired to a configurable endpoint (needs your endpoint)
- ✅ Speed tuning (AVIF/WebP images)
- ✅ Code is on GitHub `main` branch

**Not yet done (this document):** hosting, domain, the 4 env values, real contact
details, real photos, and Vystra portal link.

---

## 1. Host the site & get a live URL  ⭐ START HERE

There is **no hosting or GitHub Actions configured yet**, so pushing to `main` does not
publish anywhere on its own. The fastest, free way to host a Next.js site is **Vercel**.

1. Go to <https://vercel.com> → **Sign up with GitHub**.
2. Click **Add New… → Project**.
3. Find and **Import** the `karthikraja14/dreamzdezignerz` repo.
4. Framework preset will auto‑detect **Next.js**. Leave build settings as default.
5. Click **Deploy**. In ~1 minute you'll get a live URL like
   `https://dreamzdezignerz.vercel.app`.
6. From now on, **every push to `main` auto‑deploys.** (That is your "GitHub Actions" —
   Vercel handles CI/CD for you; no workflow file needed.)

> Alternative: Netlify or Azure Static Web Apps also work. Vercel is recommended because
> it's built by the makers of Next.js.

---

## 2. Buy & connect the domain

1. Buy the domain (e.g. `dreamzdezignerz.com`) from any registrar (GoDaddy, Namecheap,
   Cloudflare, BigRock, etc.).
2. In Vercel → your project → **Settings → Domains → Add** → type your domain.
3. Vercel shows you DNS records (an `A` record and/or `CNAME`). Add those in your
   registrar's DNS panel. SSL/HTTPS is issued automatically.
4. Wait for it to go green (usually minutes, up to a few hours).

---

## 3. Set the environment variables

In Vercel → project → **Settings → Environment Variables**, add each of the following.
(You can also keep a local `.env.local` for testing — copy it from `.env.example`.)

| Variable | Value | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.dreamzdezignerz.com` | Your live domain (no trailing slash) |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Step 4 below |
| `NEXT_PUBLIC_FORM_ENDPOINT` | form POST URL | Step 5 below |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | (Web3Forms only) | Step 5 below |
| `NEXT_PUBLIC_INSTAGRAM_URL` | your IG profile URL | optional |
| `NEXT_PUBLIC_FACEBOOK_URL` | your FB page URL | optional |
| `NEXT_PUBLIC_LINKEDIN_URL` | your LinkedIn URL | optional |

> After adding/changing any variable in Vercel, click **Redeploy** for it to take effect.

---

## 4. Set up Google Analytics (GA4)

1. Go to <https://analytics.google.com> → **Admin → Create → Property**.
2. Enter business name, timezone (India), currency (INR).
3. Create a **Web** data stream for your domain.
4. Copy the **Measurement ID** — it looks like `G-XXXXXXXXXX`.
5. Paste it into `NEXT_PUBLIC_GA_ID` (Step 3). Redeploy.
6. Verify: open your live site, then in GA → **Reports → Realtime** you should see 1 user.

---

## 5. Make the contact form actually send

Pick **one** provider. Both are free for low volume and need no backend.

### Option A — Web3Forms (simplest)
1. Go to <https://web3forms.com> → enter your email → get an **Access Key**.
2. Set `NEXT_PUBLIC_FORM_ENDPOINT = https://api.web3forms.com/submit`.
3. Set `NEXT_PUBLIC_FORM_ACCESS_KEY = <your access key>`.

### Option B — Formspree
1. Go to <https://formspree.io> → create a form → copy its endpoint
   (`https://formspree.io/f/xxxxxxxx`).
2. Set `NEXT_PUBLIC_FORM_ENDPOINT = https://formspree.io/f/xxxxxxxx`.
3. Leave `NEXT_PUBLIC_FORM_ACCESS_KEY` blank.

Redeploy, then submit a test message from `/contact` and confirm you receive the email.

> Until this is set, the form shows a success message but **does not send** anything
> (demo mode). This is by design so nothing breaks before go‑live.

---

## 6. Replace all placeholder contact details

Edit **`src/lib/constants.ts`** → the `COMPANY` object. Update every field with real data:

```ts
export const COMPANY = {
  name: "Dreamz Dezignerz",
  phone: "+91 XXXXX XXXXX",        // ← real phone
  email: "hello@dreamzdezignerz.com", // ← real email
  whatsapp: "91XXXXXXXXXX",         // ← real WhatsApp (country code + number, no +)
  address: "Your full office address, Chennai", // ← real address
  vystra: "https://build.vystra.in", // Vystra portal (see Vystra section)
  // ...
};
```

These values feed the header, footer, contact page, WhatsApp button, and SEO structured
data — so changing them here updates the whole site.

Commit + push (or edit on GitHub) → Vercel auto‑redeploys.

---

## 7. Add real portfolio photos

1. Put your project photos in **`public/images/portfolio/`** using the exact filenames
   referenced in `src/lib/constants.ts` → `PORTFOLIO_PROJECTS` (e.g. `villa-ecr.jpg`,
   `apartment-anna-nagar.jpg`, `office-tidel.jpg`, etc.).
2. Recommended: JPG/PNG, ~1600px wide, under ~500 KB each (Next.js compresses further).
3. If you want different projects, edit the `PORTFOLIO_PROJECTS` array (title, slug,
   specs, image path) and add matching images.

> Currently the portfolio detail pages reuse the 5 stock photos in
> `public/images/site/`. Replace those too if you want fully original imagery.

---

## 8. Vystra project‑tracking integration

See the dedicated section below (**"Vystra Integration"**). Short version: the
`/track-project` page now links out to your live Vystra portal (`build.vystra.in`).
Just make sure `COMPANY.vystra` points to the correct URL.

---

## 9. Final pre‑launch checks

- [ ] Site opens on the real domain over HTTPS
- [ ] Submit the contact form → email received
- [ ] WhatsApp button opens a chat to the correct number
- [ ] Phone/email links work on mobile
- [ ] GA Realtime shows your visit
- [ ] All portfolio images load (no broken images)
- [ ] `/track-project` → "Open your dashboard" opens the Vystra portal
- [ ] Submit your domain's `sitemap.xml` in **Google Search Console**
      (<https://search.google.com/search-console>) for faster indexing
- [ ] Share a link in WhatsApp/LinkedIn → the blueprint preview card shows correctly

---

## 10. Nice‑to‑have (optional, later)

- Favicon/app‑icon set generated from the logo (currently a default favicon)
- Cost‑estimator "email me this estimate" lead capture
- Headless CMS (Sanity) so non‑developers can edit content — larger task, see notes
- Blog/updates section for SEO
- Customer reviews pulled from Google

---

### Quick reference — who changes what

| Thing | Where | Who |
|---|---|---|
| Domain, env vars, deploy | Vercel dashboard | You |
| Contact details | `src/lib/constants.ts` | You (or ask me) |
| Portfolio photos | `public/images/portfolio/` | You |
| Design / features / new pages | code | Me |
