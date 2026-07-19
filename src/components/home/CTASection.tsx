"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="site-shell py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <div className="absolute inset-0">
            <Parallax amount={40} className="relative h-[120%]">
              <Image
                src="/images/site/modern-exterior.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </Parallax>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
          <div className="glow-gold pointer-events-none absolute -right-20 -top-20 h-80 w-80" />

          <div className="relative px-7 py-16 md:px-16 md:py-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-kicker"
            >
              Let&apos;s build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-light leading-[1.05] text-white md:text-7xl"
            >
              Your dream space is one <em className="italic text-teal">conversation</em> away.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-7 text-light/60"
            >
              Book a free consultation. We&apos;ll assess your vision, scope and budget —
              and show you exactly how we&apos;ll bring it to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.35}>
                <Link
                  href="/contact"
                  className="btn-fill group/btn relative inline-flex items-center gap-2 rounded-full bg-teal px-9 py-4 font-[family-name:var(--font-display)] text-[0.75rem] font-medium uppercase tracking-[0.12em] text-dark"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book free consultation
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Link>
              </Magnetic>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-sm font-medium text-light/80 transition-colors hover:text-teal"
              >
                <Phone size={16} /> {COMPANY.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
