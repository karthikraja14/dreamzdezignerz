"use client";

import { Marquee } from "@/components/motion/Marquee";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TAGS = [
  "Turnkey Delivery",
  "Transparent Pricing",
  "Live Tracking",
  "In-house Team",
  "On-time Handover",
  "Warranty Backed",
];

export function MarqueeBand() {
  return (
    <section className="section-teal border-y border-teal-dark/30">
      <div className="site-shell grid gap-8 py-14 md:grid-cols-12 md:items-center md:py-16">
        <div className="md:col-span-8">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
            Not just a contractor. One team that draws it, builds it and finishes it —
            <span className="text-ink"> accountable end to end.</span>
          </p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-teal"
          >
            Why us
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 py-4">
        <Marquee gap="0rem" slow>
          {TAGS.map((t) => (
            <span key={t} className="flex items-center">
              <span className="px-7 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/90">
                {t}
              </span>
              <span className="h-1.5 w-1.5 bg-orange" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
