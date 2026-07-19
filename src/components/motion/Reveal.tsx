"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: Direction;
  once?: boolean;
  blur?: boolean;
  as?: "div" | "span" | "li" | "section";
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 34,
  direction = "up",
  once = true,
  blur = true,
  as = "div",
}: RevealProps) {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y },
    down: { x: 0, y: -y },
    left: { x: y, y: 0 },
    right: { x: -y, y: 0 },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offsets[direction],
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: EASE },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-70px" }}
    >
      {children}
    </MotionTag>
  );
}
