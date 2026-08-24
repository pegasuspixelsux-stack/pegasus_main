"use client";

import { motion } from "motion/react";
import { Button } from "@/components/Button";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { transform: "translateY(14px)", opacity: 0 },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100dvh] items-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-[4.5rem] font-normal leading-[1.08] tracking-tighter text-transparent sm:text-[5.625rem] md:text-[6.75rem]"
        >
          Infrastructure for{" "}
          <span className="inline-block pb-1 font-normal italic leading-[1.15] text-accent">
            modern businesses
          </span>
          .
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          We build end-to-end digital platforms, websites fused with custom
          dashboards, lead management pipelines, and publishing systems, for
          enterprises and white-label partners.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="mailto:hello@pegasuspixels.dev" variant="primary">
            Start a project
          </Button>
          <Button href="#about" variant="secondary">
            See how we work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
