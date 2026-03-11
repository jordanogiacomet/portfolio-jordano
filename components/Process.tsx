import processContent from "@/data/process.json";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessContent = {
  heading: string;
  steps: ProcessStep[];
};

const content = processContent as ProcessContent;

export function Process() {
  if (content.steps.length === 0) {
    return null;
  }

  const stepsLabel = `${String(content.steps.length).padStart(2, "0")} Steps`;

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.06),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[14%] top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm uppercase tracking-[0.28em] text-text-secondary">
              {stepsLabel}
            </p>
          </div>

          <div>
            <header className="max-w-3xl">
              <h2
                id="process-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
            </header>

            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {content.steps.map((step, index) => {
                const isFeatured = index === 0;

                return (
                  <article
                    key={step.number}
                    className={
                      isFeatured
                        ? "relative overflow-hidden rounded-[2.25rem] border border-[#d7c7bc]/35 bg-bg-surface p-7 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] sm:p-8"
                        : "relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 shadow-panel backdrop-blur-sm sm:p-8"
                    }
                  >
                    <div
                      aria-hidden="true"
                      className={
                        isFeatured
                          ? "absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
                          : "absolute right-0 top-0 h-28 w-28 rounded-full bg-white/[0.05] blur-3xl"
                      }
                    />

                    <div className="relative">
                      <p
                        className={
                          isFeatured
                            ? "text-xs uppercase tracking-[0.32em] text-text-on-light/55"
                            : "text-xs uppercase tracking-[0.32em] text-text-secondary/80"
                        }
                      >
                        {step.number}
                      </p>

                      <div
                        aria-hidden="true"
                        className={
                          isFeatured
                            ? "mt-6 h-px w-full bg-text-on-light/12"
                            : "mt-6 h-px w-full bg-white/10"
                        }
                      />

                      <h3
                        className={
                          isFeatured
                            ? "mt-8 font-display text-3xl leading-tight"
                            : "mt-8 font-display text-3xl leading-tight text-text-primary"
                        }
                      >
                        {step.title}
                      </h3>

                      <p
                        className={
                          isFeatured
                            ? "mt-4 text-base leading-8 text-text-on-light/78"
                            : "mt-4 text-base leading-8 text-text-secondary"
                        }
                      >
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
