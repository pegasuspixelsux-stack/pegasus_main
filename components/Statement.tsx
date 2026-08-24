"use client";

import { motion } from "motion/react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { transform: "translateY(20px)", opacity: 0 },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/**
 * Unboxed two-column statement, sitting directly on the page background
 * between Hero and About. No card, no border-radius container — just a
 * hairline top/bottom frame to separate it from its neighbors.
 */
export function Statement() {
  return (
    <section className="relative z-10 border-y border-white/[0.06] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <h2 className="text-3xl font-normal tracking-tighter text-foreground sm:text-4xl">
            Stop patching tools. Start deploying systems.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7"
        >
          <p className="text-lg leading-relaxed text-muted">
            Every business has the same bottleneck: customer requests trapped
            in email threads, inventory data lagging behind reality, and
            staff manually bridging the gap between disconnected apps. We
            build the solution: a unified digital infrastructure that
            captures demand, routes internal workflows, and updates your
            catalog automatically, turning fragmented operations into a
            single continuous engine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
