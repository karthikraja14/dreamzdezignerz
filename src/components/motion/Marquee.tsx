"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  slow?: boolean;
  gap?: string;
}

/**
 * Seamless infinite marquee. Duplicates its content so the CSS
 * translateX(-50%) loop is perfectly continuous. Pauses on hover.
 */
export function Marquee({
  children,
  className = "",
  reverse = false,
  slow = false,
  gap = "3rem",
}: MarqueeProps) {
  return (
    <div className={`marquee-group relative overflow-hidden ${className}`}>
      <div
        className={`marquee ${slow ? "marquee-slow" : ""}`}
        style={{
          gap,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
