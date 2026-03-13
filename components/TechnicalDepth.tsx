import experienceContent from "@/data/experience.json";
import stackContent from "@/data/stack.json";
import studiesContent from "@/data/studies.json";
import technicalDepthContent from "@/data/technical-depth.json";

type StackCategory = {
  name: string;
  description?: string;
  items: string[];
};

type StackContent = {
  categories: StackCategory[];
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type ExperienceContent = {
  items: ExperienceItem[];
};

type StudiesContent = {
  items: string[];
};

type TechnicalDepthContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  framing: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };
  domainsLabel: string;
  domainsDescription: string;
  experienceLabel: string;
  experienceDescription: string;
  studiesLabel: string;
  studiesDescription: string;
};

const stack = stackContent as StackContent;
const experience = experienceContent as ExperienceContent;
const studies = studiesContent as StudiesContent;
const content = technicalDepthContent as TechnicalDepthContent;

function FramingCard({
  framing,
  className = ""
}: {
  framing: TechnicalDepthContent["framing"];
  className?: string;
}) {
  return (
    <aside
      className={`rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-5 shadow-panel backdrop-blur-sm sm:p-6 ${className}`.trim()}
    >
      <p className="text-[11px] uppercase tracking-[0.3em] text-text-secondary/85">
        {framing.label}
      </p>
      <p className="mt-3 font-display text-[1.55rem] leading-[1.08] text-text-primary sm:text-[1.75rem]">
        {framing.title}
      </p>
      <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-[0.95rem] sm:leading-7">
        {framing.description}
      </p>

      <ul className="mt-5 space-y-3.5" aria-label={framing.label}>
        {framing.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-t border-white/10 pt-3.5 first:border-t-0 first:pt-0"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 rounded-full bg-text-primary/80"
            />
            <span className="text-sm leading-6 text-text-secondary sm:text-[0.95rem] sm:leading-7">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function TechnicalDepth() {
  const hasContent =
    stack.categories.length > 0 || experience.items.length > 0 || studies.items.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <section
      id="technical-depth"
      aria-labelledby="technical-depth-heading"
      className="page-section page-section--expansive [--section-padding-top:clamp(4.95rem,7.8vw,5.95rem)] [--section-padding-bottom:clamp(5.15rem,8.35vw,6.1rem)] [--section-layout-gap:clamp(1.9rem,3.75vw,2.25rem)] [--section-layout-gap-lg:clamp(2.55rem,2.95vw,2.95rem)] [--section-flow-gap:clamp(2.15rem,3.9vw,2.65rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.07),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid items-start lg:grid-cols-[0.32fr_1fr]">
          <div className="hidden self-start lg:block lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
            <FramingCard framing={content.framing} className="mt-4 max-w-sm sm:mt-5" />
          </div>

          <div>
            <header className="max-w-[42rem]">
              <p className="text-sm uppercase tracking-[0.28em] text-text-secondary lg:hidden">
                {content.sectionLabel}
              </p>
              <h2
                id="technical-depth-heading"
                className="mt-3 font-display text-4xl leading-[0.98] text-text-primary sm:text-[3.15rem] lg:mt-0"
              >
                {content.heading}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary sm:text-[1.02rem] sm:leading-8">
                {content.description}
              </p>
            </header>

            <div className="page-section-flow space-y-5 sm:space-y-6">
              <FramingCard framing={content.framing} className="lg:hidden" />

              {stack.categories.length > 0 ? (
                <article
                  id="stack"
                  className="relative overflow-hidden rounded-[2.35rem] border border-[#d7c7bc]/35 bg-bg-surface p-6 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                  />

                  <div className="relative grid gap-8 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] xl:gap-10">
                    <div className="max-w-sm">
                      <p className="text-xs uppercase tracking-[0.32em] text-text-on-light/62">
                        {content.domainsLabel}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-text-on-light/76 sm:text-[0.98rem] sm:leading-7">
                        {content.domainsDescription}
                      </p>
                    </div>

                    <div className="grid gap-3.5">
                      {stack.categories.map((category, index) => (
                        <article
                          key={category.name}
                          className="rounded-[1.6rem] border border-text-on-light/12 bg-[#f8f1e7]/55 p-4 first:border-text-on-light/12 sm:p-5"
                        >
                          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] lg:gap-6">
                            <div>
                              <p className="text-xs uppercase tracking-[0.28em] text-text-on-light/62">
                                {String(index + 1).padStart(2, "0")}
                              </p>
                              <h3 className="mt-2.5 font-display text-[1.85rem] leading-[1.02] sm:text-[2rem]">
                                {category.name}
                              </h3>
                              {category.description ? (
                                <p className="mt-3 max-w-md text-sm leading-6 text-text-on-light/74 sm:text-[0.98rem] sm:leading-7">
                                  {category.description}
                                </p>
                              ) : null}
                            </div>

                            <div className="border-t border-text-on-light/12 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                              <p className="text-[10px] uppercase tracking-[0.22em] text-text-on-light/62 sm:text-[11px] sm:tracking-[0.24em]">
                                Tecnologias e bases
                              </p>
                              <p className="mt-2.5 text-sm leading-6 text-text-on-light/78 sm:text-[0.98rem] sm:leading-7">
                                {category.items.join(" · ")}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </article>
              ) : null}

              <div className="grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.82fr)]">
                {experience.items.length > 0 ? (
                  <article
                    id="experience"
                    className="rounded-[2.1rem] border border-white/10 bg-white/[0.04] p-5 shadow-panel backdrop-blur-sm sm:p-6"
                  >
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                        {content.experienceLabel}
                      </p>
                      <p className="mt-3 text-[0.98rem] leading-7 text-text-secondary sm:text-base sm:leading-8">
                        {content.experienceDescription}
                      </p>
                    </div>

                    <ol className="mt-6 space-y-3">
                      {experience.items.map((item, index) => {
                        const isFeatured = index === 0;

                        return (
                          <li key={`${item.company}-${item.role}`}>
                            <article
                              className={`rounded-[1.65rem] border p-4 sm:p-5 ${
                                isFeatured
                                  ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_20px_70px_rgba(9,2,4,0.18)]"
                                  : "border-white/10 bg-[#18070a]/45 text-text-primary"
                              }`}
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <p
                                    className={`text-xs uppercase tracking-[0.28em] ${
                                      isFeatured
                                        ? "text-text-on-light/62"
                                      : "text-text-secondary/80"
                                    }`}
                                  >
                                    {item.company}
                                  </p>
                                  <h3 className="mt-2.5 font-display text-[1.65rem] leading-[1.05] sm:text-[1.75rem]">
                                    {item.role}
                                  </h3>
                                </div>

                                <p
                                  className={`inline-flex w-fit rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em] ${
                                    isFeatured
                                      ? "border-badge-border bg-bg-surface-muted/55 text-text-on-light/70"
                                      : "border-white/10 bg-white/[0.05] text-text-secondary"
                                  }`}
                                >
                                  {item.period}
                                </p>
                              </div>

                              <p
                                className={`mt-4 text-sm leading-6 sm:text-[0.98rem] sm:leading-7 ${
                                  isFeatured ? "text-text-on-light/78" : "text-text-secondary"
                                }`}
                              >
                                {item.description}
                              </p>
                            </article>
                          </li>
                        );
                      })}
                    </ol>
                  </article>
                ) : null}

                {studies.items.length > 0 ? (
                  <article
                    id="studies"
                    className="rounded-[2.1rem] border border-white/10 bg-white/[0.03] p-5 shadow-panel backdrop-blur-sm sm:p-6"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                        {content.studiesLabel}
                      </p>
                      <p className="mt-3 text-[0.98rem] leading-7 text-text-secondary sm:text-base sm:leading-8">
                        {content.studiesDescription}
                      </p>
                    </div>

                    <ol className="mt-6 grid gap-2.5 sm:grid-cols-2" aria-label={content.studiesLabel}>
                      {studies.items.map((item, index) => (
                        <li key={item}>
                          <div className="h-full rounded-[1.25rem] border border-white/10 bg-[#18070a]/45 px-4 py-3.5">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/80 sm:text-[11px] sm:tracking-[0.24em]">
                              {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="mt-2.5 text-sm leading-6 text-text-primary/90 sm:leading-7">
                              {item}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </article>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
