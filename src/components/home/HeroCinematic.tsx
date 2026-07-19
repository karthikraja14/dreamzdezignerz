"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { y: 26, opacity: 0, filter: "blur(6px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

const unveil: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.15, ease: EASE },
  },
};

function Frame({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      variants={unveil}
      className={`relative overflow-hidden rounded-[4px] bg-light-alt ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </motion.div>
  );
}

export function HeroCinematic() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const collageY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="hero-atelier grain">
      <div className="site-shell pt-32 md:pt-40 pb-16 md:pb-24">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-6"
        >
          <span className="section-kicker">Interior · Construction · Renovation</span>
          <span className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.24em] text-slate">
            Studio · Chennai, India
          </span>
        </motion.div>

        {/* headline */}
        <motion.div style={{ y: textY }} className="pt-10 md:pt-14">
          <h1 className="hero-title max-w-[16ch]">
            <MaskLine delay={0.12}>Spaces designed</MaskLine>
            <MaskLine delay={0.26}>
              to be <em>lived in</em>,
            </MaskLine>
            <MaskLine delay={0.4}>built to last.</MaskLine>
          </h1>
        </motion.div>

        {/* collage */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ y: collageY }}
          className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-12 md:gap-4"
        >
          <Frame
            src="/images/site/hero-villa.jpg"
            alt="Contemporary villa exterior at dusk"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="col-span-2 aspect-[16/10] md:col-span-7 md:aspect-[16/11]"
          />
          <Frame
            src="/images/site/interior-living.jpg"
            alt="Warm modern living room interior"
            sizes="(max-width: 768px) 50vw, 25vw"
            className="aspect-[4/5] md:col-span-5 md:aspect-auto"
          />
          <Frame
            src="/images/site/detail.jpg"
            alt="Architectural material detail"
            sizes="(max-width: 768px) 50vw, 25vw"
            className="aspect-[4/5] md:col-span-3 md:aspect-[3/4]"
          />
          <Frame
            src="/images/site/office.jpg"
            alt="Refined commercial workspace"
            sizes="(max-width: 768px) 50vw, 25vw"
            className="aspect-[4/5] md:col-span-4 md:aspect-[3/4]"
          />
          <motion.div
            variants={rise}
            className="col-span-2 flex flex-col justify-between rounded-[4px] border border-ink/10 bg-white/60 p-6 md:col-span-5 md:aspect-[3/4]"
          >
            <p className="font-[family-name:var(--font-heading)] text-2xl leading-snug text-ink md:text-[1.7rem]">
              One accountable team for architecture, construction &amp; interiors.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-[family-name:var(--font-display)] text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-teal"
                >
                  <span className="inline-flex items-center gap-2">
                    Start a project
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 font-[family-name:var(--font-display)] text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  View work
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex items-center gap-3 font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.2em] text-slate"
        >
          <ArrowDownRight size={15} className="text-teal" />
          Transparent estimates · Live project tracking · End-to-end delivery
        </motion.div>
      </div>
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
