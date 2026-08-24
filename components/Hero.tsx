"use client";

import { motion } from "motion/react";
import { Star } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

type Lang = "en" | "es";

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

export function Hero({ lang = "en" }: { lang?: Lang }) {
  const isEs = lang === "es";

  return (
    <section className="relative z-10 flex min-h-[100dvh] items-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.12em] text-muted">
            {isEs
              ? "Infraestructura Digital para Negocios Modernos"
              : "Web Design · Apps · Automation"}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-4xl font-normal leading-[1.08] tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-[5.625rem] xl:text-[6.75rem]"
        >
          {isEs ? (
            <>
              <span className="block">Infraestructura para</span>
              <span className="block">
                <span className="inline-block whitespace-nowrap pb-1 font-normal italic leading-[1.15] text-accent">
                  negocios modernos
                </span>
                .
              </span>
            </>
          ) : (
            <>
              <span className="block">Infrastructure for</span>
              <span className="block">
                <span className="inline-block whitespace-nowrap pb-1 font-normal italic leading-[1.15] text-accent">
                  modern businesses
                </span>
                .
              </span>
            </>
          )}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {isEs ? (
            <>
              Más que un sitio web. Diseñamos plataformas empresariales
              completas con paneles integrados, tuberías de gestión de leads y
              sistemas de publicación que escalan contigo: construidos para
              empresas ambiciosas y socios de agencias white-label.
            </>
          ) : (
            <>
              We build end-to-end digital platforms, websites fused with
              custom dashboards, lead management pipelines, and publishing
              systems, for enterprises and white-label partners.
            </>
          )}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-1.5 text-xs text-muted"
        >
          <span className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} weight="fill" />
            ))}
          </span>
          {isEs ? "5.0 en Google" : "5.0 on Google"}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-6 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="mailto:hello@pegasuspixels.dev" variant="primary">
            {isEs ? "Ver Sistemas Desplegados" : "Start a project"}
          </Button>
          <Button href="#about" variant="secondary">
            {isEs ? "Asóciate con Nosotros" : "See how we work"}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
