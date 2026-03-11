import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

const sections = [
  {
    id: "contact",
    eyebrow: "Conversation",
    title: "A direct path to contact.",
    description:
      "The final contact module will connect the narrative to action with clear calls to engage, available channels, and business-ready messaging."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Proof />
        <About />
        <Process />
        <Projects />

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
              <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
                {section.eyebrow}
              </p>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-sm sm:p-10">
                <h2 className="font-display text-4xl text-text-primary sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                  {section.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
