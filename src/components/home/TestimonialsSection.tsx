"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const count = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const paginate = (d: number) => {
    setState([(index + d + count) % count, d]);
  };

  return (
    <section className="section-frame section-dark grain">
      <div className="site-shell">
        <div className="flex items-center justify-between">
          <span className="section-kicker">Client feedback</span>
          <div className="flex items-center gap-1 text-orange">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={15} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="relative mt-10 min-h-[240px] md:min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="max-w-5xl"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.2] tracking-tight text-paper md:text-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center bg-teal font-[family-name:var(--font-display)] text-lg font-bold text-paper">
                  {current.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-paper">{current.name}</p>
                  <p className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.16em] text-paper/50">
                    {current.role}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-paper/15 pt-6">
          <span className="font-[family-name:var(--font-display)] text-sm text-paper/50">
            {String(index + 1).padStart(2, "0")} — {String(count).padStart(2, "0")}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center border border-paper/25 text-paper transition-colors hover:border-teal hover:bg-teal hover:text-ink"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center border border-paper/25 text-paper transition-colors hover:border-teal hover:bg-teal hover:text-ink"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
