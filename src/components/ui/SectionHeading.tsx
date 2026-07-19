"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="inline-block text-teal text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] leading-tight text-white"
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } text-white/50`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
