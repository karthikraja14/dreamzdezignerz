"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = ["all", "residential", "interior", "commercial", "renovation"];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === active);

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
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Spaces We&apos;ve
            <br />
            <span className="text-gradient-teal">Transformed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Every project tells a story of collaboration, craftsmanship, and transformation.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  active === cat
                    ? "bg-teal text-white shadow-lg shadow-teal/20"
                    : "bg-dark-light text-white border border-white/8 hover:border-teal/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-charcoal-light cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-charcoal" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal/20 text-teal backdrop-blur-sm border border-teal/20 capitalize">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-teal group-hover:border-gold transition-all">
                        <ArrowUpRight size={18} className="text-white/60 group-hover:text-white" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/50 text-xs">
                          <span>{project.specs.area}</span>
                          <span>•</span>
                          <span>{project.specs.duration}</span>
                          <span>•</span>
                          <span>{project.specs.type}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Info */}
          <ScrollReveal>
            <div className="mt-16 text-center p-8 rounded-2xl bg-white border border-white/8">
              <p className="text-white font-semibold mb-2">Want to see more?</p>
              <p className="text-white/50 text-sm">
                We have 150+ completed projects. Contact us for a detailed portfolio presentation tailored to your project type.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
