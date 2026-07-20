"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const unveil: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", scale: 1.08 },
  visible: { clipPath: "inset(0% 0% 0% 0%)", scale: 1, transition: { duration: 1.1, ease: EASE } },
};

function Corner({ className }: { className: string }) {
  return <Plus size={16} className={`absolute text-teal/50 ${className}`} strokeWidth={1.5} />;
}

export function HeroCinematic() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="hero-atelier blueprint-grid relative border-b border-ink/10">
      {/* corner registration marks */}
      <Corner className="left-4 top-24 md:left-8 md:top-28" />
      <Corner className="right-4 top-24 md:right-8 md:top-28" />

      <div className="site-shell pt-32 pb-0 md:pt-40">
        {/* spec bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/12 pb-4"
        >
          <span className="section-kicker">Dreamz Dezignerz — Est. Chennai</span>
          <span className="spec">Lat 13.08°N / Lng 80.27°E</span>
        </motion.div>

        <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-6 md:pt-16">
          {/* headline block */}
          <div className="md:col-span-7">
            <h1 className="hero-title">
              <Line delay={0.1}>We design,</Line>
              <Line delay={0.22}>
                <em>build</em> &amp; <span className="u">finish</span>
              </Line>
              <Line delay={0.34}>your space.</Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
              className="mt-8 max-w-md text-base leading-7 text-slate"
            >
              One accountable team for architecture, construction and interiors —
              engineered on a transparent, trackable process from first line to final key.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.8, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-ink px-8 py-4 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-teal"
                >
                  Start a project
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border border-ink/25 px-8 py-4 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  View work
                </Link>
              </Magnetic>
            </motion.div>

            {/* mini stat row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid max-w-md grid-cols-3 border-t border-ink/12 pt-6"
            >
              {[
                { n: "8+", l: "Years" },
                { n: "150+", l: "Projects" },
                { n: "100%", l: "On-track" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                    {s.n}
                  </p>
                  <p className="spec mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* image tile with blueprint frame */}
          <div className="md:col-span-5">
            <motion.div variants={unveil} initial="hidden" animate="visible" className="relative">
              <div className="blueprint-tile overflow-hidden bg-light-alt">
                <motion.div style={{ y: imgY }} className="relative aspect-[4/5] w-full scale-110">
                  <Image
                    src="/images/site/hero-villa.jpg"
                    alt="Contemporary villa by Dreamz Dezignerz"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              {/* orange label chip */}
              <div className="absolute -bottom-4 left-4 flex items-center gap-2 bg-orange px-4 py-2.5 md:left-6">
                <span className="h-1.5 w-1.5 bg-white" />
                <span className="font-[family-name:var(--font-display)] text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white">
                  Coastal Villa / ECR
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* bottom scrolling label strip */}
        <div className="mt-16 flex items-center gap-3 border-t border-ink/12 py-5 md:mt-20">
          <span className="h-2 w-2 shrink-0 bg-teal" />
          <p className="spec">
            Interior Design &nbsp;/&nbsp; Residential &nbsp;/&nbsp; Commercial &nbsp;/&nbsp; Renovation &nbsp;/&nbsp; Architecture &nbsp;/&nbsp; Project Management
          </p>
        </div>
      </div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
