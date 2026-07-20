# Vystra Integration Guide

How the **Dreamz Dezignerz marketing website** connects to **Vystra**, your construction
management platform (source in `Downloads/vantro`, live at `build.vystra.in`).

---

## What Vystra actually is (from the `vantro` codebase)

| Part | Tech | Purpose |
|---|---|---|
| `backend/` | **FastAPI (Python)** + SQLAlchemy | REST API, auth, billing, projects |
| `frontend/` | **Vite + React** (Capacitor for Android) | The web/mobile app UI |
| `android/` | Capacitor | Google Play app |
| DB | SQLite (local) / **Azure SQL** (prod) | Data store |
| Extras | Stripe billing, Firebase push, Azure Communication Services email | SaaS plumbing |

**It is a separate, standalone product** — a full multi‑tenant SaaS that *contractors*
log into to run their sites (projects, workers, attendance, materials, expenses,
quotations, invoices, 20 calculators, dashboards).

### Important finding about login
Vystra authenticates with **email + password**. The email OTP in the code
(`backend/app/api/auth.py`) is used **only to verify email during sign‑up** — there is
**no public "track my project by phone + OTP" flow** and **no public read‑only customer
tracking API**.

> That's why the old `/track-project` page on the website (a phone‑number → "Send OTP"
> form) was **fiction** — it didn't connect to anything. It has now been replaced with an
> honest **"Open your dashboard"** button that links to the real Vystra portal.

---

## The integration model

```
┌─────────────────────────────┐         link out          ┌──────────────────────────┐
│  Dreamz Dezignerz website   │  ───────────────────────▶ │  Vystra portal            │
│  (Next.js marketing site)   │   /track-project button   │  build.vystra.in          │
│  - drives leads             │                            │  (FastAPI + React app)   │
│  - "Track Project" CTA      │ ◀───────────────────────  │  - real login & data     │
└─────────────────────────────┘        (customers)         └──────────────────────────┘
```

The two apps stay **decoupled**. The website's job is marketing + lead capture; Vystra's
job is the actual project management. They are joined by a **link**, not shared code.

---

## Level 1 — Link‑out  ✅ DONE (recommended, zero backend work)

**Changes on the website side (already made):**
- `/track-project` now shows an **"Open your dashboard"** button → opens `COMPANY.vystra`.
- Removed the fake phone‑OTP form.

**What you still need to do:**
1. In `src/lib/constants.ts`, confirm `COMPANY.vystra` is the correct portal URL
   (default: `https://build.vystra.in`).
2. (Optional) Add a **"Client Login"** link in the website navbar pointing to the same
   URL, so returning clients find it immediately.

**Changes on the Vystra side:** none.

This is enough to "integrate" for launch: clients click through from your site to the
real Vystra login.

---

## Level 2 — Branded client login (medium effort, Vystra‑side work)

If you want *homeowners* (not just contractors/staff) to log in and see only their
project, Vystra needs to support **customer accounts**:

**Changes required in `vantro` (backend):**
1. Add a **customer role** (read‑only) or a "client portal" user type linked to a
   `Customer` + their `Project`(s).
2. Add an invite/onboarding flow: when you add a customer to a project, email them a
   login (reuse the existing ACS email + OTP service already in `auth.py`).
3. Restrict that role's API responses to only their own project data (progress, photos,
   milestones — hide financials/workers).

**Changes on the website side:** point the "Open your dashboard" button at the customer
login route (e.g. `build.vystra.in/client`).

---

## Level 3 — Embedded live tracking on the website (large effort)

Show project status **inside** the Dreamz site (no redirect). This needs Vystra to expose
a **public, read‑only tracking API** and the website to call it.

**Changes required in `vantro` (backend):**
1. New endpoint, e.g. `GET /api/public/track/{token}` returning a **safe subset**:
   project name, % complete, current phase, recent photos, next milestone. **No**
   financial or worker data.
2. A per‑project **share token** (or phone → SMS OTP → short‑lived token) so only the
   right client sees the data. SMS OTP would need an SMS provider (Twilio / MSG91 /
   Azure) — the current code only does *email* OTP.
3. CORS: add the website's domain to `ALLOWED_ORIGINS` in Vystra's env.

**Changes on the website side (`dreamzdezignerz`):**
1. Add a server route/handler that calls the Vystra public API using an env var
   `NEXT_PUBLIC_VYSTRA_API_URL`.
2. Rebuild `/track-project` to render live status from that API instead of linking out.

> This is real product development on the Vystra backend. **Not recommended for launch** —
> do Level 1 now, consider Level 2/3 later based on demand.

---

## Recommendation

| Phase | Action | Effort |
|---|---|---|
| **Now (launch)** | Level 1 link‑out (done). Just verify `COMPANY.vystra`. | ~0 |
| Later | Level 2 branded client login in Vystra | Medium (Vystra backend) |
| Much later | Level 3 embedded live tracking | Large (Vystra API + SMS) |

For go‑live, **you don't need to touch the `vantro` code at all** — the website already
links to your existing Vystra portal.
