"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS, COMPANY } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-frame relative overflow-hidden bg-dark-light">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div className="site-shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="section-kicker">How we work</div>
            <TextReveal as="h2" text="A process you can watch unfold." className="display-heading" />
            <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-light/50">
              Six clear stages, zero surprises. Every milestone, photo and payment is
              logged in real time — powered by our{" "}
              <a href={COMPANY.vystra} target="_blank" rel="noreferrer" className="text-teal u-line">
                Vystra
              </a>{" "}
              tracking platform.
            </p>
          </div>

          {/* Steps with animated progress line */}
          <div ref={ref} className="relative pl-10 md:pl-14">
            <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 md:left-[15px]" />
            <motion.div
              className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-teal via-teal to-orange md:left-[15px]"
              style={{ scaleY: lineScaleY }}
            />

            <div className="space-y-12 md:space-y-16">
              {PROCESS_STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-10 top-1 grid h-6 w-6 place-items-center rounded-full border border-teal/40 bg-dark text-[0.6rem] font-semibold text-teal md:-left-14 md:h-8 md:w-8 md:text-xs">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-light text-light md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-light/50">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
