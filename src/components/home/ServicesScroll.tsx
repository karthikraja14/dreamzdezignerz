"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

const PREVIEWS = [
  "/images/site/interior-living.jpg",
  "/images/site/hero-villa.jpg",
  "/images/site/office.jpg",
  "/images/site/detail.jpg",
  "/images/site/modern-exterior.jpg",
  "/images/site/interior-living.jpg",
  "/images/site/office.jpg",
];

export function ServicesScroll() {
  const [active, setActive] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="services" className="section-frame section-light">
      <div className="site-shell">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div>
            <span className="section-kicker">What we do</span>
            <TextReveal
              as="h2"
              text="Everything under one roof."
              className="display-heading"
            />
          </div>
          <Reveal className="max-w-md pb-2 text-base leading-7 text-slate">
            Seven disciplines, one accountable team — from the first sketch to the
            final handover, designed and built to perform for decades.
          </Reveal>
        </div>

        <div
          ref={wrapRef}
          onMouseMove={handleMove}
          className="relative mt-14 border-t border-ink/12"
        >
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group flex items-center justify-between gap-6 border-b border-ink/12 py-7 transition-colors md:py-9"
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-slate/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-[family-name:var(--font-heading)] text-3xl transition-all duration-500 md:text-5xl ${
                    active === i ? "translate-x-2 text-teal" : "text-ink"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <p className="hidden max-w-xs text-sm text-slate md:block">{service.short}</p>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                    active === i
                      ? "border-teal bg-teal text-paper"
                      : "border-ink/20 text-ink"
                  }`}
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}

          {/* cursor-following preview */}
          <motion.div
            style={{ x, y }}
            className="pointer-events-none absolute left-0 top-0 z-20 -ml-32 -mt-24 hidden aspect-[4/3] w-64 overflow-hidden rounded-[4px] shadow-2xl lg:block"
          >
            <AnimatePresence mode="wait">
              {active !== null && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={PREVIEWS[active]}
                    alt=""
                    fill
                    sizes="256px"
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
