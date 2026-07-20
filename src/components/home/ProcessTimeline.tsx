"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS, COMPANY } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessTimeline() {
  return (
    <section className="section-frame section-sand border-t border-ink/10">
      <div className="site-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-kicker">Process / Workflow</span>
            <TextReveal as="h2" text="From first line to final key." className="display-heading" />
          </div>
          <Link
            href={COMPANY.vystra}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-[family-name:var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-teal"
          >
            Live tracking via Vystra
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* horizontal blueprint step grid */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col gap-8 bg-sand p-7 transition-colors duration-300 hover:bg-paper md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-teal md:text-5xl">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="h-2.5 w-2.5 bg-orange" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 spec">Every milestone visible in real time — no black boxes.</p>
      </div>
    </section>
  );
}
