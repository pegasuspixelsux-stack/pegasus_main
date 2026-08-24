"use client";

import Link from "next/link";
import { LinkedinLogo, XLogo, GithubLogo } from "@phosphor-icons/react";

type Lang = "en" | "es";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinLogo },
  { label: "X", href: "https://x.com", icon: XLogo },
  { label: "GitHub", href: "https://github.com", icon: GithubLogo },
];

const CONTENT = {
  en: {
    tagline:
      "Engineering digital infrastructure for modern businesses and agency partners.",
    navHeading: "Navigation",
    navLinks: [
      { label: "Systems", href: "#about" },
      { label: "Case Studies", href: "#work" },
      { label: "White-Label", href: "#work" },
      { label: "Architecture", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    servicesHeading: "Services",
    serviceLinks: [
      { label: "Fleet Management", href: "#work" },
      { label: "SaaS Architecture", href: "#work" },
      { label: "Commerce Engines", href: "#work" },
      { label: "White-Label Core", href: "#work" },
      { label: "Custom Dashboards", href: "#work" },
    ],
    newsletterHeading: "Stay updated",
    emailSrLabel: "Email address",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    newsletterHelper: "Occasional technical insights, never spam. Unsubscribe anytime.",
    copyright: "© 2026 Pegasus Pixels. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
    switchLabel: "ES",
    switchHref: "/spanish",
    switchAria: "Switch to Spanish",
  },
  es: {
    tagline:
      "Ingeniería de infraestructura digital para negocios modernos y socios de agencias.",
    navHeading: "Navegación",
    navLinks: [
      { label: "Sistemas", href: "#about" },
      { label: "Casos de Estudio", href: "#work" },
      { label: "White-Label", href: "#work" },
      { label: "Arquitectura", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    servicesHeading: "Servicios",
    serviceLinks: [
      { label: "Gestión de Flotas", href: "#work" },
      { label: "Arquitectura SaaS", href: "#work" },
      { label: "Motores de Comercio", href: "#work" },
      { label: "Core White-Label", href: "#work" },
      { label: "Dashboards a Medida", href: "#work" },
    ],
    newsletterHeading: "Mantente actualizado",
    emailSrLabel: "Correo electrónico",
    emailPlaceholder: "Ingresa tu email",
    subscribe: "Suscribirse",
    newsletterHelper: "Información técnica ocasional, nunca spam. Cancela cuando quieras.",
    copyright: "© 2026 Pegasus Pixels. Todos los derechos reservados.",
    legalLinks: [
      { label: "Política de Privacidad", href: "/privacy" },
      { label: "Términos de Uso", href: "/terms" },
    ],
    switchLabel: "EN",
    switchHref: "/",
    switchAria: "Cambiar a inglés",
  },
};

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = CONTENT[lang];

  return (
    <footer className="relative z-10 bg-canvas-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(94,106,210,0.7)]" />
              Pegasus Pixels
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              {t.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.08] text-muted transition-colors duration-200 hover:border-white/[0.16] hover:text-foreground"
                  >
                    <Icon size={16} weight="bold" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-sm text-muted">{t.navHeading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {t.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-sm text-muted">{t.servicesHeading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {t.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-sm text-muted">{t.newsletterHeading}</h3>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.currentTarget.reset();
              }}
              className="mt-4"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t.emailSrLabel}
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full min-w-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-white/[0.16] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-foreground transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.16] hover:bg-white/[0.05] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-deep"
                >
                  {t.subscribe}
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              {t.newsletterHelper}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">{t.copyright}</p>
          <div className="flex items-center gap-6">
            {t.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={t.switchHref}
              aria-label={t.switchAria}
              className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:border-white/[0.16] hover:text-foreground"
            >
              {t.switchLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
