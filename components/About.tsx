"use client";

import { motion } from "motion/react";

type Lang = "en" | "es";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { transform: "translateY(20px)", opacity: 0 },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const CONTENT = {
  en: {
    heading: "Architecture, Not Just Design",
    p1: "A static website was never built to run a business. It can describe what you sell, but it can't capture a lead scrolling in from social media, route that lead to the right person on your team, or publish new inventory the moment it changes. Those are separate jobs that most companies still stitch together from four or five disconnected tools.",
    p2: "We build the layer underneath instead: one digital ecosystem that connects the path a visitor actually takes, from the ad they clicked, to the internal dashboard your staff use to manage the lead, to the automated engine that keeps your catalog current. For agency partners, that same infrastructure runs white-label under their brand, with the same reliability we hold ourselves to.",
    subheading: "Precision is the product.",
    p3: "We design systems the way a watchmaker designs a movement: every part sized for exactly the load it carries, nothing decorative, nothing missing. That means typed APIs, tested edge cases, and interfaces that respond in milliseconds, not seconds.",
    p4: "It also means we say no to work outside our range. We take on projects where our engineering can genuinely move the outcome, and we stay close to the metrics that prove it did.",
    metrics: [
      { value: "100+", label: "Projects" },
      { value: "25+", label: "Years of experience" },
      { value: "10,000+", label: "Lines of code" },
    ],
  },
  es: {
    heading: "Arquitectura, No Solo Diseño",
    p1: "Un sitio web estático nunca fue diseñado para operar un negocio. Puede describir lo que vendes, pero no puede capturar un lead que llega desde redes sociales, enrutar ese lead a la persona correcta en tu equipo, o publicar nuevo inventario en el momento en que cambia. Esos son trabajos separados que la mayoría de las empresas todavía unen a la fuerza con cuatro o cinco herramientas desconectadas.",
    p2: "En su lugar, construimos la capa subyacente: un ecosistema digital que conecta el recorrido real del visitante, desde el anuncio en el que hizo clic, hasta el panel interno que usa tu equipo para gestionar el lead, pasando por el motor automatizado que mantiene tu catálogo al día. Para socios de agencia, esa misma infraestructura opera de forma white-label bajo su propia marca, con la misma fiabilidad que exigimos para nosotros mismos.",
    subheading: "La precisión es el producto.",
    p3: "Diseñamos sistemas como un relojero diseña un mecanismo: cada pieza dimensionada exactamente para la carga que soporta, nada decorativo, nada faltante. Eso significa APIs tipadas, casos límite probados y interfaces que responden en milisegundos, no en segundos.",
    p4: "También significa que decimos no al trabajo fuera de nuestro alcance. Tomamos proyectos donde nuestra ingeniería realmente puede mover el resultado, y nos mantenemos cerca de las métricas que lo demuestran.",
    metrics: [
      { value: "100+", label: "Proyectos" },
      { value: "25 años", label: "Experiencia" },
      { value: "10,000+", label: "Líneas de código" },
    ],
  },
};

export function About({ lang = "en" }: { lang?: Lang }) {
  const t = CONTENT[lang];

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
            {t.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-[#8A8F98]">{t.p1}</p>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">{t.p2}</p>

          <h3 className="mt-10 text-2xl font-normal tracking-tighter text-white">
            {t.subheading}
          </h3>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">{t.p3}</p>
          <p className="mt-4 leading-relaxed text-[#8A8F98]">{t.p4}</p>
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
            {t.metrics.map((metric) => (
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
