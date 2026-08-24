"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

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
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is the difference between your infrastructure and a standard website?",
        answer:
          "A standard website is static and designed only to display information. Our digital infrastructure combines front-end conversion paths with internal staff dashboards, lead management systems, and automated publishing pipelines to run your actual operations.",
      },
      {
        question:
          "Do you work with marketing and design agencies on a white-label basis?",
        answer:
          "Yes. We partner frequently with agencies, functioning as their dedicated technical backbone to build and deploy complex client applications seamlessly under their brand.",
      },
      {
        question: "How long does a typical digital infrastructure build take?",
        answer:
          "Depending on the scope (custom CRMs, databases, and multi-tenant catalogs), projects typically range from 4 to 12 weeks from architecture planning to production deployment.",
      },
      {
        question: "What does your technology stack consist of?",
        answer:
          "We build using modern, high-performance architectures including Next.js, React, TypeScript, Tailwind CSS, and robust database backends like Supabase, optimized for sub-second response times.",
      },
    ],
  },
  es: {
    heading: "Preguntas Frecuentes",
    faqs: [
      {
        question:
          "¿Cuál es la diferencia entre su infraestructura y un sitio web estándar?",
        answer:
          "Un sitio web estándar es estático y solo sirve para mostrar información. Nuestra infraestructura digital combina rutas de conversión frontend con paneles internos para el personal, sistemas de gestión de leads y tuberías de publicación automatizadas para operar tu negocio real.",
      },
      {
        question:
          "¿Trabajan con agencias de marketing y diseño bajo la modalidad white-label?",
        answer:
          "Sí. Nos asociamos frecuentemente con agencias, funcionando como su columna vertebral técnica para construir y desplegar aplicaciones complejas de clientes sin fricciones bajo su propia marca.",
      },
      {
        question:
          "¿Cuánto tiempo toma un desarrollo típico de infraestructura digital?",
        answer:
          "Dependiendo del alcance (ej. integración de CRMs personalizados, bases de datos y catálogos multi-tenant), los proyectos suelen tomar entre 4 y 12 semanas desde la planificación de arquitectura hasta el despliegue en producción.",
      },
      {
        question: "¿Cuál es su stack tecnológico?",
        answer:
          "Construimos utilizando arquitecturas modernas de alto rendimiento que incluyen Next.js, React, TypeScript, Tailwind CSS y potentes backends de bases de datos como Supabase, optimizados para respuestas en milisegundos.",
      },
    ],
  },
};

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-white/[0.06] py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-lg font-normal text-foreground">
          {question}
        </span>
        <CaretDown
          size={18}
          className={`shrink-0 text-muted transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "rotate-180 text-accent" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pt-4 leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq({ lang = "en" }: { lang?: Lang }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 border-b border-white/[0.06] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center text-3xl font-normal tracking-tighter text-foreground sm:text-4xl"
        >
          {t.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-12 border-t border-white/[0.06]"
        >
          {t.faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
