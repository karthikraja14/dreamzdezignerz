"use client";

import { STATS } from "@/lib/constants";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

export function StatsScroll() {
  return (
    <section className="section-sand border-y border-ink/10 py-20 md:py-28">
      <div className="site-shell">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="border-l border-ink/15 pl-5">
              <div className="flex items-baseline font-[family-name:var(--font-heading)] text-5xl text-ink md:text-7xl">
                <Counter value={stat.value} />
                <span className="text-teal">{stat.suffix}</span>
              </div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.2em] text-slate">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
