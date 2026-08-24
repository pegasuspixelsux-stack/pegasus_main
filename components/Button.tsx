"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

/**
 * Primary and secondary CTA. Feedback is instantaneous: transform-only
 * transitions, a 0.97 press scale, and a brightening border/glow on hover.
 * Nothing here animates layout — only transform, opacity, and color.
 */
export function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium " +
    "transition-[transform,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] " +
    "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

  const variants = {
    primary: cn(
      "bg-accent text-white",
      "shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_1px_1px_rgba(0,0,0,0.35),0_8px_24px_-4px_rgba(94,106,210,0.45)]",
      "hover:bg-accent-hover hover:shadow-[0_0_0_1px_rgba(104,114,217,0.6),0_1px_1px_rgba(0,0,0,0.35),0_10px_32px_-4px_rgba(94,106,210,0.6)]"
    ),
    secondary: cn(
      "bg-white/[0.03] text-foreground border border-white/[0.08]",
      "hover:border-white/[0.16] hover:bg-white/[0.05]"
    ),
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
