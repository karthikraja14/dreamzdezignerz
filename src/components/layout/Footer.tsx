import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import { Marquee } from "@/components/motion/Marquee";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-dark">
      {/* Oversized brand marquee */}
      <div className="border-b border-white/[0.06] py-8">
        <Marquee slow>
          {["Interiors", "•", "Construction", "•", "Renovation", "•", "Architecture", "•"].map((w, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-heading)] text-4xl font-light italic text-light/12 md:text-6xl"
            >
              {w}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="site-shell py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-light" aria-label="Dreamz Dezignerz home">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-teal/60 font-[family-name:var(--font-display)] text-sm font-semibold text-teal">
                DD
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase leading-none tracking-[0.14em]">
                Dreamz <span className="text-light/45">Dezignerz</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md text-[0.95rem] leading-7 text-light/45">
              Architecture, construction and interiors delivered by one team —
              with transparent, real-time progress from first drawing to final handover.
            </p>
            <Link
              href="/contact"
              className="u-line mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-medium uppercase tracking-[0.14em] text-teal"
            >
              Start your project <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[0.68rem] font-medium uppercase tracking-[0.2em] text-light/35">
              Expertise
            </h2>
            <ul className="mt-6 space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-light/60 transition-colors hover:text-light">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[0.68rem] font-medium uppercase tracking-[0.2em] text-light/35">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-light/60">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-teal" />{COMPANY.address}</li>
              <li><a href={`tel:${COMPANY.phone}`} className="flex gap-3 hover:text-light"><Phone size={16} className="shrink-0 text-teal" />{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-light"><Mail size={16} className="shrink-0 text-teal" />{COMPANY.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-light/30 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Dreamz Dezignerz. Crafted in Chennai.</p>
          <div className="flex gap-6">
            <Link href="/portfolio" className="hover:text-light">Portfolio</Link>
            <Link href="/track-project" className="hover:text-light">Track project</Link>
            <a href={COMPANY.vystra} target="_blank" rel="noreferrer" className="hover:text-light">Powered by Vystra</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
