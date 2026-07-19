"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { Shield, Eye, BarChart3, Camera, Phone } from "lucide-react";

export default function TrackProjectPage() {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to Vystra Customer Portal API
    setTimeout(() => setIsLoading(false), 2000);
  };

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
            <Shield size={14} className="inline mr-2" />
            Project Tracking
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Track Your
            <br />
            <span className="text-gradient-teal">Project Live</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Get real-time visibility into your project&apos;s progress. See photos, milestones, and updates — anytime, anywhere.
          </motion.p>
        </div>
      </section>

      {/* Login */}
      <section className="py-24 relative">
        <div className="max-w-lg mx-auto px-6">
          <div className="p-8 rounded-2xl card-dark border border-white/8">
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2 text-center">
              Access Your Dashboard
            </h2>
            <p className="text-white/50 text-sm text-center mb-8">
              Enter your registered phone number to receive an OTP
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                <div className="flex">
                  <span className="px-4 py-3 rounded-l-xl border border-r-0 border-white/8 bg-dark-light text-sm text-white/50">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-r-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm bg-dark-mid/50"
                    placeholder="98765 43210"
                    maxLength={10}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={phone.length < 10 || isLoading}
                className="w-full px-6 py-3 bg-teal text-white font-semibold rounded-xl disabled:opacity-50 hover:bg-teal-dark transition-all"
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/8 text-center">
              <p className="text-white/50 text-xs mb-2">Don&apos;t have access yet?</p>
              <a href={`tel:${COMPANY.phone}`} className="text-teal text-sm font-medium hover:underline inline-flex items-center gap-1">
                <Phone size={14} /> Call us to get set up
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Live Progress", desc: "See daily updates and photos" },
              { icon: BarChart3, title: "Milestones", desc: "Track phase completion" },
              { icon: Camera, title: "Photo Gallery", desc: "All site photos in one place" },
            ].map((f) => (
              <div key={f.title} className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-3">
                  <f.icon size={20} className="text-teal" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-white/50 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Powered by Vystra */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-xs">
              Powered by{" "}
              <a href={COMPANY.vystra} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                Vystra
              </a>{" "}
              — our proprietary construction management platform
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
