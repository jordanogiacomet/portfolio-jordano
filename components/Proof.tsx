import proofContent from "@/data/proof.json";

type ProofStat = {
  value: string;
  label: string;
};

type ProofContent = {
  sectionLabel: string;
  heading: string;
  stats: ProofStat[];
  signals: string[];
};

const content = proofContent as ProofContent;

export function Proof() {
  const [featuredStat, ...secondaryStats] = content.stats;

  if (!featuredStat) {
    return null;
  }

  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.08),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
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
                id="proof-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
            </header>

            <div className="mt-10 grid gap-5 lg:grid-cols-12">
              <article className="relative overflow-hidden rounded-[2.5rem] border border-[#d7c7bc]/35 bg-bg-surface p-8 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(9,2,4,0.24)] sm:p-10 lg:col-span-6">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                />

                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.32em] text-text-on-light/50">
                    01
                  </p>

                  <div className="mt-10 flex items-end gap-4">
                    <p className="font-display text-[clamp(4.5rem,10vw,7rem)] leading-none">
                      {featuredStat.value}
                    </p>
                    <div className="mb-3 h-px flex-1 bg-text-on-light/15" />
                  </div>

                  <p className="mt-6 max-w-sm text-base leading-7 text-text-on-light/78 sm:text-lg">
                    {featuredStat.label}
                  </p>
                </div>
              </article>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
                {secondaryStats.map((stat, index) => (
                  <article
                    key={stat.label}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-text-secondary/80">
                      0{index + 2}
                    </p>
                    <p className="mt-6 font-display text-5xl leading-none text-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:col-span-12">
                <p className="text-xs uppercase tracking-[0.32em] text-text-secondary">
                  Sinais
                </p>

                <ul className="mt-5 flex flex-wrap gap-3" aria-label="Sinais principais">
                  {content.signals.map((signal) => (
                    <li
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-text-primary sm:text-sm"
                    >
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
