"use client";

import { STATS } from "@/lib/constants";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

export function StatsScroll() {
  return (
    <section className="section-light border-b border-ink/10">
      <div className="site-shell">
        <div className="grid grid-cols-2 border-x border-ink/12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="relative border-b border-ink/12 p-7 md:border-b-0 md:border-r md:p-9 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:last-child]:md:border-r-0"
            >
              <span className="spec text-teal">{String(i + 1).padStart(2, "0")}</span>
              <div className="mt-4 flex items-baseline font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-ink md:text-6xl">
                <Counter value={stat.value} />
                <span className="text-orange">{stat.suffix}</span>
              </div>
              <p className="mt-3 spec">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
