"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@pegasuspixels.dev" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Toggle a boolean only when crossing the threshold, never track the
  // continuous scroll value in React state (would re-render every frame).
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled((prev) => {
      if (latest > 24 && !prev) return true;
      if (latest <= 24 && prev) return false;
      return prev;
    });
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[#050506]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(94,106,210,0.7)]" />
          Pegasus Pixels
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#about" variant="secondary" className="px-5 py-2.5">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] text-foreground transition-colors duration-200 hover:border-white/[0.16] active:scale-[0.97] md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ transform: "rotate(-90deg) scale(0.6)", opacity: 0 }}
                animate={{ transform: "rotate(0deg) scale(1)", opacity: 1 }}
                exit={{ transform: "rotate(90deg) scale(0.6)", opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="grid place-items-center"
              >
                <X size={18} weight="bold" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ transform: "rotate(90deg) scale(0.6)", opacity: 0 }}
                animate={{ transform: "rotate(0deg) scale(1)", opacity: 1 }}
                exit={{ transform: "rotate(-90deg) scale(0.6)", opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="grid place-items-center"
              >
                <List size={18} weight="bold" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="fixed inset-0 top-16 z-40 bg-[#050506]/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ transform: "translateY(-12px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{ transform: "translateY(-12px)", opacity: 0 }}
              transition={{ duration: 0.22, ease: EASE_OUT, delay: 0.03 }}
              className="flex flex-col gap-1 px-6 pt-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ transform: "translateY(-8px)", opacity: 0 }}
                  animate={{ transform: "translateY(0px)", opacity: 1 }}
                  transition={{
                    duration: 0.22,
                    ease: EASE_OUT,
                    delay: 0.05 + i * 0.04,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/[0.06] py-4 text-lg text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ transform: "translateY(-8px)", opacity: 0 }}
                animate={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.22, ease: EASE_OUT, delay: 0.13 }}
                className="pt-6"
              >
                <Button href="#about" className="w-full">
                  Start a project
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
