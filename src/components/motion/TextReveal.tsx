"use client";

import { motion, type Variants } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: Tag;
  delay?: number;
  once?: boolean;
  stagger?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Splits a string into words and reveals them with a staggered
 * rise + de-blur effect. Preserves spaces and wraps naturally.
 */
export function TextReveal({
  text,
  className = "",
  as = "h2",
  delay = 0,
  once = true,
  stagger = 0.06,
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "0.9em", opacity: 0, filter: "blur(6px)" },
    visible: {
      y: "0em",
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE },
    },
  };

  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span variants={word} style={{ display: "inline-block", willChange: "transform" }}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
