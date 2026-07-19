"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ServiceData {
  slug: string;
  title: string;
  short: string;
  icon: string;
  description: string;
  features: string[];
}

export function ServicePageClient({ service }: { service: ServiceData }) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate hover:text-teal transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="text-sm">All Services</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-ink leading-tight mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate text-lg max-w-2xl"
          >
            {service.short}
          </motion.p>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-ink mb-6">
                  About This Service
                </h2>
                <p className="text-slate leading-relaxed mb-8">{service.description}</p>
                <Button href="/contact">Get a Quote for {service.title}</Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 rounded-[4px] card-dark">
                <h3 className="font-semibold text-ink mb-6">What&apos;s Included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal shrink-0 mt-0.5" />
                      <span className="text-slate text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sand border-t border-ink/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-ink mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate mb-8">
            Let&apos;s discuss how our {service.title.toLowerCase()} service can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Book Consultation</Button>
            <Button href="/cost-estimator" variant="outline" size="lg">Estimate Cost</Button>
          </div>
        </div>
      </section>
    </>
  );
}
