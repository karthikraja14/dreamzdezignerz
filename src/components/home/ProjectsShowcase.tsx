"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

const images = [
  "/images/site/modern-exterior.jpg",
  "/images/site/detail.jpg",
  "/images/site/office.jpg",
  "/images/site/interior-living.jpg",
];

const layouts = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-12 aspect-[16/7]",
];

export function ProjectsShowcase() {
  return (
    <section className="section-frame bg-[#0d1012]">
      <div className="site-shell">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_24rem] md:items-end">
          <div>
            <div className="section-kicker">Selected work</div>
            <h2 className="display-heading">Built to be<br />experienced.</h2>
          </div>
          <p className="text-sm leading-7 text-white/45">
            A selection across homes, workplaces and hospitality. Every project
            balances spatial clarity, material honesty and long-term performance.
          </p>
        </div>

        <div className="grid auto-rows-[18rem] grid-cols-1 gap-3 md:grid-cols-12">
          {PORTFOLIO_PROJECTS.slice(0, 4).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={`group relative overflow-hidden ${layouts[index]}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="absolute inset-0">
                <Image
                  src={images[index]}
                  alt={project.title}
                  fill
                  sizes={index === 3 ? "100vw" : "(max-width: 768px) 100vw, 55vw"}
                  className="project-image object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-8">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-teal">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/55">
                      {project.specs.area} / {project.specs.duration}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/35 text-white transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-dark">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/portfolio" className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white hover:text-teal">
            View complete portfolio <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}