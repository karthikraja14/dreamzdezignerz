import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.1em] transition-colors duration-300";

  const variants = {
    primary: "bg-teal text-dark hover:bg-teal-light",
    secondary: "bg-dark-light text-white hover:bg-dark-mid border border-white/15",
    outline: "border border-white/30 text-white hover:bg-white hover:text-dark hover:border-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[0.68rem]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
