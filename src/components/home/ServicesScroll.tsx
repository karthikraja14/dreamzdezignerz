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
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="services" className="section-frame overflow-hidden bg-dark">
      <div className="site-shell">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_22rem] md:items-end">
          <div>
            <div className="section-kicker">What we do</div>
            <TextReveal
              as="h2"
              text="Everything under one roof."
              className="display-heading"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="text-[0.95rem] leading-7 text-light/50">
              Seven disciplines, one accountable team. From the first sketch to the
              final handover, we design and build spaces that perform for decades.
            </p>
          </Reveal>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          className="relative border-t border-white/10"
        >
          {/* Cursor-following image preview (desktop) */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                className="pointer-events-none absolute z-20 hidden aspect-[4/3] w-72 overflow-hidden rounded-xl lg:block"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={PREVIEWS[active]}
                  alt=""
                  fill
                  sizes="288px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/10" />
              </motion.div>
            )}
          </AnimatePresence>

          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex items-center gap-6 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:py-9"
            >
              <span className="w-12 shrink-0 font-[family-name:var(--font-display)] text-sm text-light/30 transition-colors group-hover:text-teal">
                0{i + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-light text-light transition-all duration-500 group-hover:translate-x-2 group-hover:text-teal md:text-4xl">
                  {service.title}
                </h3>
              </div>
              <p className="hidden max-w-xs text-sm leading-6 text-light/45 md:block">
                {service.short}
              </p>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-light transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-dark">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
