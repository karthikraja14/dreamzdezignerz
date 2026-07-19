"use client";

import { Marquee } from "@/components/motion/Marquee";

const PHRASES = [
  "Architecture",
  "Interiors",
  "Turnkey Construction",
  "Renovation",
  "Landscape",
  "Project Management",
];

export function MarqueeBand() {
  return (
    <section className="section-sand border-y border-ink/10 py-8 md:py-10">
      <Marquee gap="0rem" slow>
        {PHRASES.map((p) => (
          <span key={p} className="flex items-center">
            <span className="px-8 font-[family-name:var(--font-heading)] text-3xl italic text-ink/80 md:text-5xl">
              {p}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
