import stackContent from "@/data/stack.json";

type StackCategory = {
  name: string;
  items: string[];
};

type StackContent = {
  sectionLabel: string;
  heading: string;
  categories: StackCategory[];
};

const content = stackContent as StackContent;

export function Stack() {
  if (content.categories.length === 0) {
    return null;
  }

  const totalItems = content.categories.reduce(
    (count, category) => count + category.items.length,
    0
  );

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.06),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[14%] top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div>
            <header className="max-w-3xl">
              <h2
                id="stack-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
            </header>

            <div className="mt-10 grid gap-5 xl:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)]">
              <article className="relative overflow-hidden rounded-[2.5rem] border border-[#d7c7bc]/35 bg-bg-surface p-8 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                />

                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.32em] text-text-on-light/55">
                    {String(content.categories.length).padStart(2, "0")} categorias
                  </p>

                  <div className="mt-10 flex flex-wrap items-end gap-4">
                    <p className="font-display text-[clamp(4.5rem,10vw,6.5rem)] leading-none">
                      {String(totalItems).padStart(2, "0")}
                    </p>
                    <p className="pb-2 text-sm uppercase tracking-[0.24em] text-text-on-light/58">
                      temas em foco
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {content.categories.map((category, index) => (
                      <div
                        key={category.name}
                        className="flex items-end justify-between gap-4 border-t border-text-on-light/12 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-text-on-light/45">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 font-display text-3xl leading-none">
                            {category.name}
                          </h3>
                        </div>

                        <p className="text-xs uppercase tracking-[0.22em] text-text-on-light/58">
                          {category.items.length} itens
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="grid gap-5 sm:grid-cols-2">
                {content.categories.map((category, index) => (
                  <article
                    key={category.name}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary/80">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 font-display text-3xl leading-tight text-text-primary">
                          {category.name}
                        </h3>
                      </div>

                      <p className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                        {category.items.length} itens
                      </p>
                    </div>

                    <ul
                      className="mt-6 grid gap-3"
                      aria-label={`${category.name} technologies`}
                    >
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-[#18070a]/45 px-4 py-3"
                        >
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-accent"
                          />
                          <span className="text-sm leading-6 text-text-primary/90">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
