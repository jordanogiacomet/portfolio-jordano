import studiesContent from "@/data/studies.json";

type StudiesContent = {
  sectionLabel: string;
  heading: string;
  items: string[];
};

const content = studiesContent as StudiesContent;

export function Studies() {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <section
      id="studies"
      aria-labelledby="studies-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.05),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[10%] top-24 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div>
            <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
              <h2
                id="studies-heading"
                className="max-w-3xl font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>

              <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-text-secondary">
                {String(content.items.length).padStart(2, "0")} frentes em estudo
              </p>
            </header>

            <ol className="mt-8 grid gap-4 md:grid-cols-2" aria-label={content.heading}>
              {content.items.map((item, index) => (
                <li key={item}>
                  <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-6">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#170709] text-xs uppercase tracking-[0.24em] text-text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div aria-hidden="true" className="h-px flex-1 bg-white/10" />
                    </div>

                    <h3 className="mt-6 max-w-sm font-display text-[1.9rem] leading-tight text-text-primary">
                      {item}
                    </h3>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
