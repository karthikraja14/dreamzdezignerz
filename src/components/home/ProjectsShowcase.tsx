"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

const PROJECTS = [
  {
    title: "Coastal Villa",
    place: "ECR, Chennai",
    tag: "Residential",
    image: "/images/site/hero-villa.jpg",
    className: "md:col-span-7 aspect-[16/11]",
  },
  {
    title: "Warm Minimal Living",
    place: "Anna Nagar",
    tag: "Interior",
    image: "/images/site/interior-living.jpg",
    className: "md:col-span-5 aspect-[4/5]",
  },
  {
    title: "Tidel Workspace",
    place: "Taramani",
    tag: "Commercial",
    image: "/images/site/office.jpg",
    className: "md:col-span-5 aspect-[4/5]",
  },
  {
    title: "Sculpted Facade",
    place: "OMR",
    tag: "Architecture",
    image: "/images/site/modern-exterior.jpg",
    className: "md:col-span-7 aspect-[16/11]",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="section-frame section-light">
      <div className="site-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-kicker">Selected work / Index</span>
            <TextReveal as="h2" text="Places we've shaped." className="display-heading" />
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 border border-ink/25 px-6 py-3 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-teal hover:text-teal"
          >
            All projects <ArrowUpRight size={15} className="text-teal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1} className={project.className}>
              <Link href="/portfolio" className="group block h-full">
                <div className="blueprint-tile relative h-full overflow-hidden bg-light-alt">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="project-image object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-orange text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-teal-light">
                        {project.place}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-paper md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <motion.span className="border border-paper/30 px-3 py-1 font-[family-name:var(--font-display)] text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/90">
                      {project.tag}
                    </motion.span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
