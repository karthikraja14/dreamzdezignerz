"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="site-shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white" aria-label="Dreamz Dezignerz home">
            <span className="grid h-8 w-8 place-items-center border border-teal/70 font-[family-name:var(--font-heading)] text-sm font-bold text-teal">DD</span>
            <span className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase leading-none tracking-[0.12em]">
              Dreamz<br /><span className="text-white/55">Dezignerz</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.11em] text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-teal px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-teal-light"
            >
              Discuss project <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-white" : "text-white"}`}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-dark lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white transition-colors hover:text-teal"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-6 bg-teal px-8 py-3 font-semibold text-dark"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
