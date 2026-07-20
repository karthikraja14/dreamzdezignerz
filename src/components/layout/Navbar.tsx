"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Magnetic } from "@/components/motion/Magnetic";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-ink/10 bg-paper/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="site-shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label="Dreamz Dezignerz home">
            <Image src="/logo-icon.png" alt="Dreamz Dezignerz" width={40} height={28} priority style={{ width: "auto" }} className="h-7" />
            <span className="font-[family-name:var(--font-display)] text-[0.82rem] font-bold uppercase leading-none tracking-[0.14em]">
              Dreamz <span className="text-teal">Dezignerz</span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="u-line font-[family-name:var(--font-display)] text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-[family-name:var(--font-display)] text-[0.72rem] font-medium uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-teal"
              >
                <span className="inline-flex items-center gap-2">
                  Discuss project
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </Link>
            </Magnetic>
          </div>

          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2 text-ink lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-teal via-teal-light to-orange"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ opacity: 1, clipPath: "circle(160% at calc(100% - 44px) 44px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-paper lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight text-ink transition-colors hover:text-teal"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-[family-name:var(--font-display)] text-xs font-medium uppercase tracking-[0.12em] text-paper"
              >
                Get free quote <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
