"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const show = (direction: number) => {
    setActive((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section-frame overflow-hidden bg-[#0d1012]">
      <div className="site-shell grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <div>
          <div className="section-kicker">Client perspective</div>
          <div className="mt-8 flex gap-2">
            <button onClick={() => show(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center border border-white/15 text-white transition-colors hover:border-teal hover:text-teal">
              <ArrowLeft size={16} />
            </button>
            <button onClick={() => show(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center border border-white/15 text-white transition-colors hover:border-teal hover:text-teal">
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="mt-5 text-xs text-white/35">0{active + 1} / 0{TESTIMONIALS.length}</p>
        </div>

        <div className="min-h-[22rem] border-l border-white/12 pl-7 md:pl-12">
          <Quote size={34} className="text-orange" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <blockquote className="max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-medium leading-tight text-white md:text-5xl">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-9 text-sm font-semibold text-white">
                {TESTIMONIALS[active].name}
                <span className="ml-3 font-normal text-white/40">{TESTIMONIALS[active].role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}