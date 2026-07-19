"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function ServicesScroll() {
  return (
    <section id="services" className="section-frame overflow-hidden bg-dark">
      <div className="site-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="section-kicker">Our expertise</div>
          <h2 className="display-heading">One vision.<br />Every discipline.</h2>
          <p className="mt-7 max-w-md text-base leading-7 text-white/50">
            We remove the handoffs that slow projects down. Design, engineering,
            procurement and execution operate as one accountable studio.
          </p>
          <div className="relative mt-10 aspect-[4/5] overflow-hidden">
            <Image
              src="/images/site/interior-living.jpg"
              alt="Refined living room interior with bespoke joinery"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/75">
              Interior / Build / Detail
            </span>
          </div>
        </div>

        <div className="border-t border-white/12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.2) }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group grid min-h-32 grid-cols-[2.75rem_1fr_auto] items-center gap-3 border-b border-white/12 py-7 transition-colors hover:border-teal/50"
              >
                <span className="text-xs font-semibold text-white/25">0{index + 1}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/40">{service.short}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center border border-white/15 text-white/55 transition-all group-hover:border-teal group-hover:bg-teal group-hover:text-dark">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}