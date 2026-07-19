"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS, COMPANY } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });

  return (
    <section className="section-frame section-light border-t border-ink/10">
      <div className="site-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="section-kicker">How we work</span>
          <TextReveal as="h2" text="A calm, clear path from idea to handover." className="display-heading" />
          <p className="mt-6 max-w-md text-base leading-7 text-slate">
            Every project follows a proven, transparent process — with milestones
            you can watch unfold in real time.
          </p>
          <Link
            href={COMPANY.vystra}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.14em] text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Live tracking via Vystra <ArrowUpRight size={15} className="text-teal" />
          </Link>
        </div>

        {/* steps */}
        <div ref={ref} className="relative pl-8">
          {/* track */}
          <div className="absolute left-0 top-2 h-full w-px bg-ink/12" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-teal"
          />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessRow key={step.step} step={step} index={i} progress={scrollYProgress} count={PROCESS_STEPS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
  progress,
  count,
}: {
  step: { step: number; title: string; description: string };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  count: number;
}) {
  const threshold = index / count;
  const opacity = useTransform(progress, [threshold - 0.05, threshold + 0.05], [0.4, 1]);
  const dotBg = useTransform(progress, [threshold, threshold + 0.02], ["#e4dccd", "#b5623f"]);

  return (
    <motion.div style={{ opacity }} className="relative">
      <motion.span
        style={{ backgroundColor: dotBg }}
        className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-paper"
      />
      <div className="flex items-baseline gap-4">
        <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-slate">
          {String(step.step).padStart(2, "0")}
        </span>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-ink md:text-3xl">
          {step.title}
        </h3>
      </div>
      <p className="mt-2 max-w-md text-[0.95rem] leading-7 text-slate">{step.description}</p>
    </motion.div>
  );
}
