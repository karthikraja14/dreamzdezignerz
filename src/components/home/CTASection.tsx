"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Parallax } from "@/components/motion/Parallax";
import { Magnetic } from "@/components/motion/Magnetic";
import { TextReveal } from "@/components/motion/TextReveal";
import { COMPANY } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-40">
        <Parallax amount={50} className="relative h-[130%]">
          <Image
            src="/images/site/modern-exterior.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="site-shell relative z-10 py-24 text-center md:py-36">
        <span className="section-kicker justify-center">
          Start a project
        </span>
        <TextReveal
          as="h2"
          text="Let's build something worth living in."
          className="mx-auto mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-[0.98] tracking-tight text-paper md:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-paper/60">
          Tell us about your space. We&apos;ll reply within 24 hours with next steps —
          transparent pricing, no pressure.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.3}>
            <Link
              href="/contact"
              className="btn-fill group inline-flex items-center gap-2 bg-teal px-9 py-4 font-[family-name:var(--font-display)] text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-paper"
            >
              <span className="relative z-10 transition-colors group-hover:text-paper">
                Book a free consultation
              </span>
            </Link>
          </Magnetic>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border border-paper/25 px-9 py-4 font-[family-name:var(--font-display)] text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:border-teal hover:text-teal"
          >
            <Phone size={15} /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
