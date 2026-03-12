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
      className="page-section page-section--standard"
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

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.78fr)] xl:items-start">
            <div>
              <header className="max-w-3xl">
                <h2
                  id="about-heading"
                  className="font-display text-4xl text-text-primary sm:text-5xl"
                >
                  {content.headline}
                </h2>
              </header>

              <div className="page-section-flow space-y-5">
                {content.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-4 shadow-panel backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#1b090c]">
                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#120406]/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-text-primary backdrop-blur-sm">
                    {content.sectionLabel}
                  </div>

                  <div className="relative aspect-[4/5]">
                    <Image
                      src={content.profileImage}
                      alt="Retrato editorial que representa Jordano Giacomet Tomazoni"
                      fill
                      sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {process.steps.length > 0 ? (
            <div
              id="process"
              className="rounded-[2.3rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-8 lg:col-start-2"
            >
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] xl:gap-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                    {process.sectionLabel}
                  </p>
                  <h3 className="mt-4 font-display text-[2rem] leading-[1.02] text-text-primary sm:text-[2.35rem]">
                    {process.heading}
                  </h3>
                </div>

                <ol className="grid gap-4 md:grid-cols-3" aria-label={process.sectionLabel}>
                  {process.steps.map((step, index) => {
                    const isFeatured = index === 0;

                    return (
                      <li key={step.number}>
                        <article
                          className={`h-full rounded-[1.75rem] border p-5 sm:p-6 ${
                            isFeatured
                              ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)]"
                              : "border-white/10 bg-[#18070a]/55 text-text-primary"
                          }`}
                        >
                          <p
                            className={`text-xs uppercase tracking-[0.3em] ${
                              isFeatured ? "text-text-on-light/62" : "text-text-secondary/80"
                            }`}
                          >
                            {step.number}
                          </p>
                          <h4 className="mt-5 font-display text-[1.7rem] leading-tight sm:text-[1.9rem]">
                            {step.title}
                          </h4>
                          <p
                            className={`mt-4 text-sm leading-7 sm:text-base ${
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
