"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
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
      <section className="hero-atelier grain">
        <div className="site-shell pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="section-kicker">About the studio</span>
            <span className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.24em] text-slate">
              Est. Chennai
            </span>
          </div>
          <h1 className="hero-title mt-10 max-w-[15ch]">
            Building dreams, <em>since day one.</em>
          </h1>
          <Reveal className="mt-8 max-w-2xl text-lg leading-8 text-slate">
            Dreamz Dezignerz is a full-service construction and interior design firm
            committed to transforming visions into extraordinary spaces — engineered
            with precision, delivered with transparency.
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-frame section-light border-t border-ink/10">
        <div className="site-shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="section-kicker">Our story</span>
            <TextReveal as="h2" text="From a vision to an atelier." className="display-heading" />
            <div className="mt-7 space-y-4 leading-7 text-slate">
              <p>
                Dreamz Dezignerz was born from a simple belief: everyone deserves a space that
                reflects their aspirations. What started as a passion for design and engineering
                has grown into a comprehensive construction and interior design firm.
              </p>
              <p>
                We combine cutting-edge technology with traditional craftsmanship. Our project
                management platform, Vystra, gives you real-time visibility into every aspect of
                your project — from material procurement to daily progress photos.
              </p>
              <p>
                Today, with over 150 projects delivered and 50,000+ sq.ft transformed, we&apos;re
                just getting started — on a mission to become the most trusted name in end-to-end
                construction and design.
              </p>
            </div>
          </div>
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-light-alt">
                <Image
                  src="/images/site/interior-living.jpg"
                  alt="Interior crafted by Dreamz Dezignerz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 grid h-32 w-32 place-items-center rounded-[4px] bg-ink text-center text-paper">
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-3xl">8+</span>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-[0.62rem] uppercase tracking-[0.18em] text-paper/60">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-sand py-24">
        <div className="site-shell grid gap-6 md:grid-cols-2">
          {[
            { icon: Eye, title: "Our Vision", body: "To be the most innovative and trusted construction and design company in India — setting new standards in quality, transparency, and client experience through technology-driven execution." },
            { icon: Target, title: "Our Mission", body: "To deliver exceptional end-to-end construction and interior design services that exceed expectations — combining architectural excellence, premium craftsmanship, and real-time transparency." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-[4px] border border-ink/10 bg-paper p-8 md:p-10">
                <item.icon size={30} className="text-teal" />
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-2xl text-ink">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-frame section-light">
        <div className="site-shell">
          <SectionHeading label="Our values" title="What drives us" description="These principles guide every decision we make and every space we create." align="left" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group h-full rounded-[4px] border border-ink/10 bg-white/60 p-7 transition-colors hover:border-teal/40">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-teal/10">
                    <value.icon size={22} className="text-teal" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-frame section-sand">
        <div className="site-shell">
          <SectionHeading label="Our team" title="The people behind the magic" description="A passionate team of engineers, designers, and project managers." align="left" />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.12}>
                <div className="h-full rounded-[4px] border border-ink/10 bg-paper p-8">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-teal/10">
                    <Users size={26} className="text-teal" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl text-ink">{member.name}</h3>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.16em] text-teal">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24">
        <div className="site-shell text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl font-[family-name:var(--font-heading)] text-3xl text-paper md:text-5xl"
          >
            Ready to work with us?
          </motion.h2>
          <p className="mx-auto mt-5 max-w-xl text-paper/60">
            Let&apos;s discuss your project. Book a free consultation and see how we can transform your space.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" arrow>
              Get started today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
