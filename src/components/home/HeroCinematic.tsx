"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={sectionRef} className="hero-stage">
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/images/site/hero-villa.jpg"
          alt="Contemporary villa designed with warm architectural lighting"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grid" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="site-shell relative z-10 flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-20"
      >
        <div className="mb-8 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
          <span className="h-px w-10 bg-teal" />
          Design. Build. Deliver.
        </div>

        <h1 className="hero-title max-w-6xl">
          Spaces built
          <span> beyond expectation.</span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-white/20 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">
              One accountable team for architecture, construction and interiors,
              with every decision and milestone visible as it happens.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-white/65">
              {["Transparent estimates", "Live project tracking", "End-to-end delivery"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={13} className="text-teal" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Start a project <ArrowUpRight size={17} />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore work
            </Button>
          </div>
        </div>
      </motion.div>

      <a href="#services" className="hero-scroll" aria-label="Scroll to services">
        <ArrowDown size={16} />
      </a>
    </section>
  );
}