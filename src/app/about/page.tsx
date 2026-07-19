"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";

const team = [
  { name: "Karthik Raja", role: "Founder & CEO", description: "Civil engineer with 8+ years of experience in construction and project management." },
  { name: "Design Team", role: "Lead Architects", description: "A team of passionate architects and interior designers crafting spaces that inspire." },
  { name: "Project Managers", role: "Execution Experts", description: "Dedicated managers ensuring every project is delivered on-time and within budget." },
];

const values = [
  { icon: Target, title: "Precision", description: "Every detail matters. We engineer perfection into every square foot." },
  { icon: Shield, title: "Transparency", description: "No hidden costs, no surprises. Real-time tracking of your project progress." },
  { icon: Heart, title: "Passion", description: "We don't just build spaces — we craft experiences that enrich lives." },
  { icon: Award, title: "Quality", description: "Premium materials, skilled craftsmen, and rigorous quality checks at every stage." },
];

export default function AboutPage() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Building Dreams
            <br />
            <span className="text-gradient-teal">Since Day One</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            DreamzDesignerz is a full-service construction and interior design firm
            committed to transforming visions into extraordinary spaces.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-teal text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
                  From a Vision to an <span className="text-gradient-teal">Empire</span>
                </h2>
                <div className="space-y-4 text-white/50 leading-relaxed">
                  <p>
                    DreamzDesignerz was born from a simple belief: everyone deserves a space that
                    reflects their aspirations. What started as a passion for design and engineering
                    has grown into a comprehensive construction and interior design firm.
                  </p>
                  <p>
                    We combine cutting-edge technology with traditional craftsmanship. Our proprietary
                    project management platform, Vystra, gives you real-time visibility into every
                    aspect of your project — from material procurement to daily progress photos.
                  </p>
                  <p>
                    Today, with over 150 projects delivered and 50,000+ sq.ft of space transformed,
                    we&apos;re just getting started. Our mission is to become the most trusted name in
                    end-to-end construction and design.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light overflow-hidden border border-white/8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-teal/20 text-8xl font-[family-name:var(--font-heading)] font-bold">DD</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-teal">8+</span>
                    <p className="text-xs text-teal/70">Years</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-dark-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 rounded-2xl border border-white/8 bg-white/5">
                <Eye size={32} className="text-teal mb-4" />
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
                  Our Vision
                </h3>
                <p className="text-white/60 leading-relaxed">
                  To be the most innovative and trusted construction and design company in India —
                  setting new standards in quality, transparency, and client experience through
                  technology-driven project execution.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl border border-white/8 bg-white/5">
                <Target size={32} className="text-teal mb-4" />
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
                  Our Mission
                </h3>
                <p className="text-white/60 leading-relaxed">
                  To deliver exceptional end-to-end construction and interior design services that
                  exceed expectations — combining architectural excellence, premium craftsmanship,
                  and real-time project transparency for every client.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="These principles guide every decision we make and every space we create."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl card-dark border border-white/8 text-center hover:border-teal/20 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-teal" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Magic"
            description="A passionate team of engineers, designers, and project managers."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="p-8 rounded-2xl card-dark border border-white/8 text-center hover:border-teal/20 transition-all">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal/20 to-copper/20 mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                    {member.name}
                  </h3>
                  <p className="text-teal text-sm mb-3">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project. Book a free consultation and see how we can transform your space.
          </p>
          <Button href="/contact" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  );
}
