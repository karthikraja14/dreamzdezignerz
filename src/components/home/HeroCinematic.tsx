"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const HIGHLIGHTS = ["Transparent estimates", "Live project tracking", "End-to-end delivery"];

export function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="hero-stage grain">
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src="/images/site/hero-villa.jpg"
          alt="Contemporary villa with warm architectural lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grid" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="site-shell relative z-10 flex min-h-svh flex-col justify-end pb-16 pt-32 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mb-8 flex items-center gap-3 font-[family-name:var(--font-display)] text-[0.7rem] font-medium uppercase tracking-[0.28em] text-light/70"
        >
          <span className="h-px w-10 bg-teal" />
          Design · Build · Deliver — Chennai
        </motion.div>

        <h1 className="hero-title max-w-6xl">
          <MaskLine delay={0.15}>Spaces built</MaskLine>
          <MaskLine delay={0.32}>
            <em>beyond</em> expectation.
          </MaskLine>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            <p className="max-w-xl text-base leading-7 text-light/70 md:text-lg">
              One accountable team for architecture, construction and interiors —
              with every decision and milestone visible as it happens.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-display)] text-[0.72rem] font-medium uppercase tracking-[0.12em] text-light/60">
              {HIGHLIGHTS.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={13} className="text-teal" /> {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.62 }}
            className="flex flex-wrap gap-3"
          >
            <Magnetic strength={0.35}>
              <Link
                href="/contact"
                className="btn-fill group/btn relative inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-[family-name:var(--font-display)] text-[0.74rem] font-medium uppercase tracking-[0.12em] text-dark"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Start a project
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.35}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-[family-name:var(--font-display)] text-[0.74rem] font-medium uppercase tracking-[0.12em] text-light transition-colors hover:border-teal hover:text-teal"
              >
                Explore work
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#services"
        className="hero-scroll"
        aria-label="Scroll to services"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

function MaskLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
