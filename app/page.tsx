import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechnicalDepth } from "@/components/TechnicalDepth";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
