"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <section className="section-frame bg-dark">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <div className="section-kicker">How it moves</div>
            <h2 className="display-heading">Clarity from brief to handover.</h2>
            <div className="mt-10 border-l-2 border-orange bg-white/[0.035] p-6">
              <MonitorSmartphone size={22} className="text-orange" />
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                Your site, always in view.
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Vystra gives you milestone status, site photos and approvals without
                chasing updates across calls and chat threads.
              </p>
            </div>
          </div>

          <ol className="border-t border-white/12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/12 py-7 md:grid-cols-[4rem_13rem_1fr] md:items-center"
              >
                <span className="text-xs font-semibold text-teal">0{step.step}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="col-start-2 text-sm leading-6 text-white/40 md:col-start-auto">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}