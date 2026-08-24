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

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] bg-canvas">
      <AmbientBackground />
      <Nav />
      <Hero />
      <Statement />
      <Work />
      <About />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
