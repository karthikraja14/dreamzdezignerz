"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const show = (step: number) => {
    setDir(step);
    setIndex((prev) => (prev + step + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="section-frame overflow-hidden bg-dark">
      <div className="site-shell">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker">Client stories</div>
            <TextReveal as="h2" text="Trusted to deliver." className="display-heading" />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => show(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-light transition-colors hover:border-teal hover:text-teal"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => show(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-light transition-colors hover:border-teal hover:text-teal"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[20rem] md:min-h-[16rem]">
          <Quote className="pointer-events-none absolute -top-6 left-0 text-teal/15" size={90} strokeWidth={1} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} size={17} className="fill-teal text-teal" />
                ))}
              </div>
              <p className="font-[family-name:var(--font-heading)] text-2xl font-light leading-snug text-light md:text-4xl md:leading-[1.25]">
                “{active.quote}”
              </p>
              <footer className="mt-8">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-light">
                  {active.name}
                </p>
                <p className="mt-1 text-sm text-light/45">{active.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-teal" : "w-4 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
