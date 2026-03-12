import Image from "next/image";

import aboutContent from "@/data/about.json";
import processContent from "@/data/process.json";

type AboutContent = {
  sectionLabel: string;
  headline: string;
  bio: string[];
  profileImage: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessContent = {
  sectionLabel: string;
  heading: string;
  steps: ProcessStep[];
};

const content = aboutContent as AboutContent;
const process = processContent as ProcessContent;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="page-section page-section--standard [--section-padding-top:clamp(4.2rem,6.5vw,4.95rem)] [--section-padding-bottom:clamp(4.55rem,7vw,5.35rem)] [--section-layout-gap:clamp(1.4rem,2.9vw,1.85rem)] [--section-layout-gap-lg:clamp(2rem,2.35vw,2.25rem)] [--section-flow-gap:clamp(1.7rem,3vw,2.1rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.07),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid lg:grid-cols-[0.32fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div className="grid gap-6 lg:gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(15.5rem,0.68fr)] xl:items-start">
            <div>
              <header className="max-w-3xl">
                <h2
                  id="about-heading"
                  className="font-display text-4xl text-text-primary sm:text-5xl"
                >
                  {content.headline}
                </h2>
              </header>

              <div className="page-section-flow space-y-4 sm:space-y-[1.15rem]">
                {content.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-base leading-[1.85] text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="mx-auto w-full max-w-sm xl:ml-auto xl:mr-0">
                <div className="rounded-[2.1rem] border border-white/10 bg-white/[0.035] p-3 shadow-panel backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#1b090c]">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-[#120406]/75 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-text-primary backdrop-blur-sm">
                      {content.sectionLabel}
                    </div>

                    <div className="relative aspect-[4/5]">
                      <Image
                        src={content.profileImage}
                        alt="Retrato editorial que representa Jordano Giacomet Tomazoni"
                        fill
                        sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 32vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {process.steps.length > 0 ? (
            <div
              id="process"
              className="rounded-[2.1rem] border border-white/10 bg-white/[0.025] p-5 shadow-panel backdrop-blur-sm sm:p-6 lg:col-start-2"
            >
              <div className="grid gap-6 xl:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] xl:gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-text-secondary">
                    {process.sectionLabel}
                  </p>
                  <h3 className="mt-3 font-display text-[1.85rem] leading-[1.02] text-text-primary sm:text-[2.1rem]">
                    {process.heading}
                  </h3>
                </div>

                <ol className="grid gap-3 md:grid-cols-3" aria-label={process.sectionLabel}>
                  {process.steps.map((step, index) => {
                    const isFeatured = index === 0;

                    return (
                      <li key={step.number}>
                        <article
                          className={`h-full rounded-[1.55rem] border p-4 sm:p-5 ${
                            isFeatured
                              ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)]"
                              : "border-white/10 bg-[#18070a]/55 text-text-primary"
                          }`}
                        >
                          <p
                            className={`text-[11px] uppercase tracking-[0.3em] ${
                              isFeatured ? "text-text-on-light/62" : "text-text-secondary/80"
                            }`}
                          >
                            {step.number}
                          </p>
                          <h4 className="mt-4 font-display text-[1.45rem] leading-tight sm:text-[1.6rem]">
                            {step.title}
                          </h4>
                          <p
                            className={`mt-3 text-sm leading-6 sm:text-[0.95rem] sm:leading-7 ${
                              isFeatured ? "text-text-on-light/78" : "text-text-secondary"
                            }`}
                          >
                            {step.description}
                          </p>
                        </article>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
