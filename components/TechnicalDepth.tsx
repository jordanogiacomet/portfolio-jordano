import experienceContent from "@/data/experience.json";
import stackContent from "@/data/stack.json";
import studiesContent from "@/data/studies.json";
import technicalDepthContent from "@/data/technical-depth.json";

type StackCategory = {
  name: string;
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
    items: string[];
  };
  domainsLabel: string;
  experienceLabel: string;
  experienceDescription: string;
  studiesLabel: string;
  studiesDescription: string;
};

const stack = stackContent as StackContent;
const experience = experienceContent as ExperienceContent;
const studies = studiesContent as StudiesContent;
const content = technicalDepthContent as TechnicalDepthContent;

export function TechnicalDepth() {
  const hasContent =
    stack.categories.length > 0 || experience.items.length > 0 || studies.items.length > 0;

  if (!hasContent) {
    return null;
  }

  const summaryStats = [
    {
      value: String(stack.categories.length).padStart(2, "0"),
      label: "domínios"
    },
    {
      value: String(experience.items.length).padStart(2, "0"),
      label: "contextos"
    },
    {
      value: String(studies.items.length).padStart(2, "0"),
      label: "frentes"
    }
  ];

  return (
    <section
      id="technical-depth"
      aria-labelledby="technical-depth-heading"
      className="page-section"
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
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div className="self-start lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>

            <aside className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                {content.framing.label}
              </p>
              <p className="mt-4 text-lg leading-8 text-text-primary">
                {content.framing.title}
              </p>

              <ul className="mt-6 space-y-4" aria-label={content.framing.label}>
                {content.framing.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 rounded-full bg-text-primary/80"
                    />
                    <span className="text-sm leading-7 text-text-secondary sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div>
            <header className="max-w-3xl">
              <h2
                id="technical-depth-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
                {content.description}
              </p>
            </header>

            <div className="mt-12 space-y-5">
              {stack.categories.length > 0 ? (
                <article
                  id="stack"
                  className="relative overflow-hidden rounded-[2.5rem] border border-[#d7c7bc]/35 bg-bg-surface p-8 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] sm:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                  />

                  <div className="relative grid gap-10 xl:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-text-on-light/62">
                        {content.domainsLabel}
                      </p>

                      <div className="mt-8 grid gap-4 border-t border-text-on-light/12 pt-6 sm:grid-cols-3">
                        {summaryStats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-display text-[2.75rem] leading-none">
                              {stat.value}
                            </p>
                            <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-text-on-light/62">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {stack.categories.map((category, index) => (
                        <article
                          key={category.name}
                          className="border-t border-text-on-light/12 pt-4 first:border-t-0 first:pt-0"
                        >
                          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                              <p className="text-xs uppercase tracking-[0.28em] text-text-on-light/62">
                                {String(index + 1).padStart(2, "0")}
                              </p>
                              <h3 className="mt-3 font-display text-3xl leading-tight">
                                {category.name}
                              </h3>
                            </div>

                            <p className="text-xs uppercase tracking-[0.22em] text-text-on-light/62">
                              {category.items.length} temas
                            </p>
                          </div>
                          <p className="mt-4 max-w-3xl text-sm leading-7 text-text-on-light/78 sm:text-base">
                            {category.items.join(" · ")}
                          </p>
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
                    className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm sm:p-8"
                  >
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                        {content.experienceLabel}
                      </p>
                      <p className="mt-4 text-base leading-8 text-text-secondary sm:text-lg">
                        {content.experienceDescription}
                      </p>
                    </div>

                    <ol className="mt-8 space-y-4">
                      {experience.items.map((item, index) => {
                        const isFeatured = index === 0;

                        return (
                          <li key={`${item.company}-${item.role}`}>
                            <article
                              className={`rounded-[1.8rem] border p-5 sm:p-6 ${
                                isFeatured
                                  ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_20px_70px_rgba(9,2,4,0.18)]"
                                  : "border-white/10 bg-[#18070a]/45 text-text-primary"
                              }`}
                            >
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
                                  <h3 className="mt-3 font-display text-[1.85rem] leading-tight">
                                    {item.role}
                                  </h3>
                                </div>

                                <p
                                  className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] ${
                                    isFeatured
                                      ? "border-badge-border bg-bg-surface-muted/55 text-text-on-light/70"
                                      : "border-white/10 bg-white/[0.05] text-text-secondary"
                                  }`}
                                >
                                  {item.period}
                                </p>
                              </div>

                              <p
                                className={`mt-5 text-sm leading-7 sm:text-base ${
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
                    className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-8"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                        {content.studiesLabel}
                      </p>
                      <p className="mt-4 text-base leading-8 text-text-secondary">
                        {content.studiesDescription}
                      </p>
                    </div>

                    <ol
                      className="mt-8 grid gap-3 sm:grid-cols-2"
                      aria-label={content.studiesLabel}
                    >
                      {studies.items.map((item, index) => (
                        <li key={item}>
                          <div className="h-full rounded-[1.4rem] border border-white/10 bg-[#18070a]/45 px-4 py-4">
                            <p className="text-[11px] uppercase tracking-[0.24em] text-text-secondary/80">
                              {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-text-primary/90">
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
