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

export function About() {
  return (
    <section id="about" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Part 1 — mission statement */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-normal tracking-tighter text-foreground sm:text-4xl">
            About Pegasus Pixels
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            We are a small team of engineers and designers who treat software
            like a craft, not a checklist. Every project starts with the same
            question: what does this product need to do perfectly, and what
            can we leave out. That discipline shows up in the details, from
            how a button responds to a click to how a system holds up a year
            after launch. We work in short, transparent cycles, ship real
            code early, and stay accountable for what we build long after the
            invoice is paid.
          </p>
        </motion.div>

        {/* Part 2 — split layout: copy left, visual mockup right */}
        <div className="mt-24 grid items-center gap-16 md:grid-cols-2 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-normal tracking-tighter text-foreground">
              Precision is the product.
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              We design systems the way a watchmaker designs a movement: every
              part sized for exactly the load it carries, nothing decorative,
              nothing missing. That means typed APIs, tested edge cases, and
              interfaces that respond in milliseconds, not seconds.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              It also means we say no to work outside our range. We take on
              projects where our engineering can genuinely move the outcome,
              and we stay close to the metrics that prove it did.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-6">
              <div>
                <dt className="text-sm text-muted">Founded</dt>
                <dd className="mt-1 text-xl font-semibold text-foreground">
                  2021
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Engineers</dt>
                <dd className="mt-1 text-xl font-semibold text-foreground">
                  12
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 24px 64px -12px rgba(94,106,210,0.25)",
              }}
            >
              {/* Abstract precision-engineering composition, not a fake app screenshot */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(94,106,210,0.35), transparent 55%)",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
                initial={{ opacity: 0.4, transform: "translate(-50%,-50%) scale(0.9)" }}
                whileInView={{
                  opacity: [0.4, 0.7, 0.4],
                  transform: [
                    "translate(-50%,-50%) scale(0.9)",
                    "translate(-50%,-50%) scale(1.05)",
                    "translate(-50%,-50%) scale(0.9)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_6px_rgba(94,106,210,0.7)]" />

              <div className="absolute bottom-6 left-6 right-6 border-t border-white/[0.08] pt-4 text-xs text-muted">
                Systems designed in-house
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
