import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
  arrow = false,
  external = false,
}: ButtonProps) {
  const base =
    "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-[family-name:var(--font-display)] font-medium uppercase tracking-[0.12em] transition-all duration-300 will-change-transform";

  const variants = {
    primary: "btn-fill bg-teal text-dark hover:text-dark",
    secondary: "bg-dark-mid text-light border border-white/12 hover:border-white/30",
    outline: "border border-white/25 text-light hover:border-teal hover:text-teal",
    ghost: "text-light/70 hover:text-teal",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[0.66rem]",
    md: "px-7 py-3.5 text-[0.72rem]",
    lg: "px-9 py-4 text-[0.75rem]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {arrow && (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
