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

const METRICS = [
  { value: "100+", label: "Projects" },
  { value: "25+", label: "Years of experience" },
  { value: "10,000+", label: "Lines of code" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 border-y border-white/[0.06] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <h2 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl">
            Architecture, Not Just Design
          </h2>
          <p className="mt-6 leading-relaxed text-[#8A8F98]">
            A static website was never built to run a business. It can
            describe what you sell, but it can&apos;t capture a lead
            scrolling in from social media, route that lead to the right
            person on your team, or publish new inventory the moment it
            changes. Those are separate jobs that most companies still stitch
            together from four or five disconnected tools.
          </p>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">
            We build the layer underneath instead: one digital ecosystem that
            connects the path a visitor actually takes, from the ad they
            clicked, to the internal dashboard your staff use to manage the
            lead, to the automated engine that keeps your catalog current.
            For agency partners, that same infrastructure runs white-label
            under their brand, with the same reliability we hold ourselves
            to.
          </p>

          <h3 className="mt-10 text-2xl font-normal tracking-tighter text-white">
            Precision is the product.
          </h3>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">
            We design systems the way a watchmaker designs a movement: every
            part sized for exactly the load it carries, nothing decorative,
            nothing missing. That means typed APIs, tested edge cases, and
            interfaces that respond in milliseconds, not seconds.
          </p>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">
            It also means we say no to work outside our range. We take on
            projects where our engineering can genuinely move the outcome,
            and we stay close to the metrics that prove it did.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 lg:self-center"
        >
          <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
            {METRICS.map((metric) => (
              <div key={metric.label} className="py-6 first:pt-0">
                <div className="text-sm text-[#8A8F98]">{metric.label}</div>
                <div className="mt-2 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-7xl font-normal tracking-tighter text-transparent sm:text-8xl">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
