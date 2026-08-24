import { AmbientBackground } from "@/components/AmbientBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
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
      <Footer />
    </main>
  );
}
