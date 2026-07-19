"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function StatsScroll() {
  return (
    <section className="border-y border-white/10 bg-teal text-dark">
      <div className="site-shell grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="flex min-h-44 flex-col justify-center border-dark/15 px-4 py-8 even:border-l lg:border-l lg:first:border-l-0"
          >
            <strong className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
              {stat.value.toLocaleString()}{stat.suffix}
            </strong>
            <span className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-dark/65">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}