"use client";

import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { transform: "translateY(20px)", opacity: 0 },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export function Cta() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.06] py-24">
      {/* Localized ambient glow, scoped to this section only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(94,106,210,0.28), transparent 65%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="text-3xl font-normal tracking-tighter text-foreground sm:text-4xl md:text-5xl">
          Ready to replace fragmented tools with unified digital
          infrastructure?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Let&apos;s build the engine that powers your business operations or
          white-label client stack.
        </p>
        <div className="mt-10">
          <Button
            href="mailto:hello@pegasuspixels.dev"
            variant="primary"
            icon={<ArrowRight size={18} weight="bold" />}
          >
            Start a project
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
