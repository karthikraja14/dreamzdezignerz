"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Palette, Home, Building2, Hammer, Compass, TreePine, ClipboardList, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette, Home, Building2, Hammer, Compass, TreePine, ClipboardList,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-teal/30 text-teal text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Everything You Need,
            <br />
            <span className="text-gradient-teal">Under One Roof</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            From architecture to interiors, construction to project management —
            we offer comprehensive solutions for every civil need.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <ScrollReveal key={service.slug} delay={i * 0.05}>
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="group p-8 rounded-2xl bg-dark-mid/60 border border-white/8 hover:border-teal/25 transition-all flex flex-col lg:flex-row gap-6 items-start"
                    >
                      <div className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                        <Icon size={30} className="text-teal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-2xl">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((f) => (
                            <span key={f} className="px-3 py-1 rounded-full bg-teal/5 text-xs text-teal border border-white/8">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 self-center hidden lg:flex items-center gap-2 text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight size={16} />
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Book a free consultation. We&apos;ll understand your needs and recommend the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Book Free Consultation</Button>
            <Button href="/cost-estimator" variant="outline" size="lg">Estimate Cost</Button>
          </div>
        </div>
      </section>
    </>
  );
}
