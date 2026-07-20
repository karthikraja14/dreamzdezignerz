"use client";

import Link from "next/link";
import {
  Palette, Home, Building2, Hammer, Compass, TreePine, ClipboardList,
  ArrowUpRight, type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

const ICONS: Record<string, LucideIcon> = {
  Palette, Home, Building2, Hammer, Compass, TreePine, ClipboardList,
};

export function ServicesScroll() {
  return (
    <section id="services" className="section-frame section-light">
      <div className="site-shell">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div>
            <span className="section-kicker">Capabilities / 07</span>
            <TextReveal as="h2" text="Everything under one roof." className="display-heading" />
          </div>
          <Reveal className="max-w-md pb-2 text-base leading-7 text-slate">
            Seven disciplines, one accountable team — from the first sketch to the
            final handover, engineered to perform for decades.
          </Reveal>
        </div>

        {/* blueprint tile grid */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Palette;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-10 bg-paper p-7 transition-colors duration-300 hover:bg-white md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="spec text-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-12 w-12 place-items-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{service.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-orange">
                      Explore
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          {/* CTA tile fills the 8th cell */}
          <Reveal delay={0.12}>
            <Link
              href="/services"
              className="group flex h-full flex-col justify-between gap-10 bg-ink p-7 text-paper transition-colors duration-300 hover:bg-teal md:p-8"
            >
              <span className="spec text-white/60">Full list</span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white md:text-2xl">
                  See all services
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white">
                  View
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
