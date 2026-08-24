"use client";

import { motion } from "motion/react";
import { EnvelopeSimple, Clock } from "@phosphor-icons/react";

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

const inputStyles =
  "w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-white/[0.16] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

const CONTENT = {
  en: {
    heading: "Let's talk",
    body: "Tell us what's bottlenecking your operations today. We reply personally, usually within one business day.",
    emailLabel: "Email",
    responseLabel: "Response time",
    responseValue: "Within 1 business day",
    nameLabel: "Name",
    namePlaceholder: "Jane Alvarez",
    emailFieldLabel: "Email",
    emailPlaceholder: "jane@company.com",
    messageLabel: "Message",
    messagePlaceholder: "What are you trying to build?",
    submit: "Send message",
  },
  es: {
    heading: "Hablemos",
    body: "Cuéntanos qué está frenando tus operaciones hoy. Respondemos personalmente, normalmente dentro de un día hábil.",
    emailLabel: "Correo electrónico",
    responseLabel: "Tiempo de respuesta",
    responseValue: "Dentro de 1 día hábil",
    nameLabel: "Nombre",
    namePlaceholder: "Ana Martínez",
    emailFieldLabel: "Correo electrónico",
    emailPlaceholder: "ana@empresa.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "¿Qué estás tratando de construir?",
    submit: "Enviar mensaje",
  },
};

export function Contact({ lang = "en" }: { lang?: Lang }) {
  const t = CONTENT[lang];

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/[0.06] py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <h2 className="text-3xl font-normal tracking-tighter text-foreground sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-muted">{t.body}</p>

          <dl className="mt-10 flex flex-col gap-6 border-t border-white/[0.06] pt-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.08] text-accent">
                <EnvelopeSimple size={16} weight="bold" />
              </span>
              <div>
                <dt className="text-sm text-muted">{t.emailLabel}</dt>
                <dd className="text-foreground">
                  <a
                    href="mailto:hello@pegasuspixels.dev"
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    hello@pegasuspixels.dev
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.08] text-accent">
                <Clock size={16} weight="bold" />
              </span>
              <div>
                <dt className="text-sm text-muted">{t.responseLabel}</dt>
                <dd className="text-foreground">{t.responseValue}</dd>
              </div>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
            }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-muted"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-muted"
                >
                  {t.emailFieldLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm text-muted"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={t.messagePlaceholder}
                className={`${inputStyles} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_1px_1px_rgba(0,0,0,0.35),0_8px_24px_-4px_rgba(94,106,210,0.45)] transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-hover hover:shadow-[0_0_0_1px_rgba(104,114,217,0.6),0_1px_1px_rgba(0,0,0,0.35),0_10px_32px_-4px_rgba(94,106,210,0.6)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              {t.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
