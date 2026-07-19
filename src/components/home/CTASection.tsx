"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative min-h-[75svh] overflow-hidden">
      <Image
        src="/images/site/detail.jpg"
        alt="Warm contemporary interior detail"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.94),rgba(5,7,8,.62),rgba(5,7,8,.2))]" />
      <div className="site-shell relative z-10 flex min-h-[75svh] items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="section-kicker">Your project starts here</div>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Let&apos;s make the first decision together.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60">
            Share your site, budget and ambition. Our team will respond with a clear
            next step, not a generic sales pitch.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Book consultation <ArrowUpRight size={16} />
            </Button>
            <Button href="/cost-estimator" variant="outline" size="lg">
              Estimate investment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}