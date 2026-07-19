import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="site-shell py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-white" aria-label="Dreamz Dezignerz home">
              <span className="grid h-10 w-10 place-items-center border border-teal/70 font-[family-name:var(--font-heading)] text-sm font-bold text-teal">DD</span>
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase leading-none tracking-[0.12em]">
                Dreamz <span className="text-white/45">Dezignerz</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Architecture, construction and interiors delivered by one team,
              with transparent progress from first drawing to final handover.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-teal hover:text-teal-light">
              Discuss your project <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/35">Expertise</h2>
            <ul className="mt-6 space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-white/60 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/35">Start a conversation</h2>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-teal" />{COMPANY.address}</li>
              <li><a href={`tel:${COMPANY.phone}`} className="flex gap-3 hover:text-white"><Phone size={16} className="shrink-0 text-teal" />{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-white"><Mail size={16} className="shrink-0 text-teal" />{COMPANY.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Dreamz Dezignerz. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/track-project" className="hover:text-white">Track project</Link>
            <a href={COMPANY.vystra} target="_blank" rel="noreferrer" className="hover:text-white">Powered by Vystra</a>
          </div>
        </div>
      </div>
    </footer>
  );
}