import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const sections = [
  {
    id: "about",
    eyebrow: "Foundations",
    title: "Structure first, content next.",
    description:
      "The portfolio scaffold is now in place with semantic anchors, premium spacing, and a responsive shell ready for section-specific content."
  },
  {
    id: "projects",
    eyebrow: "Selected Work",
    title: "A case-study-ready projects area.",
    description:
      "Projects will drop into a dedicated section with room for outcome-driven cards, visual assets, and supporting technical context."
  },
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
        <section
          id="home"
          className="relative isolate min-h-screen border-b border-white/10 bg-hero-radial px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-36"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:min-h-[80vh] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-8">
              <p className="text-sm uppercase tracking-[0.32em] text-text-secondary">
                Project Scaffold
              </p>
              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-5xl leading-tight text-text-primary sm:text-6xl lg:text-7xl">
                  Dark editorial foundations for a serious portfolio.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                  The layout shell includes the fixed navigation, footer, theme system,
                  smooth scrolling, and responsive section anchors required for the next
                  stories.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-bg-surface px-6 py-3 text-sm font-medium text-text-on-light transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Browse Structure
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-white/5"
                >
                  Jump to Contact
                </Link>
              </div>
            </div>

            <div className="grid max-w-xl gap-4 sm:grid-cols-2">
              {[
                "Responsive shell",
                "Premium theme tokens",
                "Fixed navigation",
                "Static export ready"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-text-secondary">
                    Ready
                  </p>
                  <p className="mt-4 font-display text-2xl text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
