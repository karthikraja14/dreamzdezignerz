"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { Counter } from "@/components/motion/Counter";

export function StatsScroll() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-dark-light py-20 md:py-24">
      <div className="glow-gold pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2" />
      <div className="glow-clay pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2" />
      <div className="site-shell relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-gradient font-[family-name:var(--font-heading)] text-5xl font-light md:text-7xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[0.66rem] font-medium uppercase tracking-[0.18em] text-light/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
