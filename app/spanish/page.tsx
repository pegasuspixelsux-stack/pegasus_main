import type { Metadata } from "next";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pegasus Pixels — Infraestructura Digital para Negocios Modernos",
  description:
    "Pegasus Pixels es una agencia de tecnología que construye infraestructura digital rápida y precisa, lista para producción, para equipos que no pueden darse el lujo de lanzar despacio.",
};

export default function SpanishHome() {
  return (
    <main className="relative min-h-[100dvh] bg-canvas">
      <SetHtmlLang lang="es" />
      <AmbientBackground />
      <Nav lang="es" />
      <Hero lang="es" />
      <Statement lang="es" />
      <Work lang="es" />
      <About lang="es" />
      <Faq lang="es" />
      <Cta lang="es" />
      <Contact lang="es" />
      <Footer lang="es" />
    </main>
  );
}
