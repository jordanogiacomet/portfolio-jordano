import servicesContent from "@/data/services.json";

type ServiceItem = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
};

type ServiceFraming = {
  label: string;
  title: string;
  items: string[];
};

type ServicesContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  framing: ServiceFraming;
  items: ServiceItem[];
};

const content = servicesContent as ServicesContent;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="page-section page-section--standard [--section-padding-top:clamp(4.1rem,6.5vw,5rem)] [--section-layout-gap:clamp(1.5rem,3vw,2rem)] [--section-layout-gap-lg:clamp(2.25rem,2.5vw,2.5rem)] [--section-flow-gap:clamp(1.9rem,3.5vw,2.35rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.08),_transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="absolute left-[10%] top-28 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid items-start lg:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,0.33fr)_minmax(0,1fr)]">
          <div className="order-2 self-start lg:order-1 lg:sticky lg:top-24">
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>

            <div className="mt-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(9,2,4,0.18)] backdrop-blur-sm sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                {content.framing.label}
              </p>
              <p className="mt-3 font-display text-[1.8rem] leading-[1.04] text-text-primary sm:text-[2.1rem]">
                {content.framing.title}
              </p>

              <ul className="mt-5 space-y-3" aria-label={content.framing.label}>
                {content.framing.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 rounded-full bg-text-primary/75"
                    />
                    <span className="text-sm leading-6 text-text-secondary sm:text-[0.95rem] sm:leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <header className="max-w-3xl">
              <h2
                id="services-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
              <p className="mt-4 text-base leading-8 text-text-secondary sm:text-lg">
                {content.description}
              </p>
            </header>

            <div className="page-section-flow space-y-3 sm:space-y-4">
              {content.items.map((item, index) => (
                <article
                  key={item.title}
                  className={`group rounded-[2rem] border p-5 transition duration-300 ease-out hover:-translate-y-1 sm:p-7 ${
                    index === 0
                      ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] hover:shadow-[0_30px_90px_rgba(9,2,4,0.24)]"
                      : "border-white/10 bg-white/[0.04] text-text-primary shadow-panel backdrop-blur-sm hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="grid gap-5 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:gap-7">
                    <div className="flex items-start justify-between gap-4 lg:block">
                      <p
                        className={`text-xs uppercase tracking-[0.3em] ${
                          index === 0 ? "text-text-on-light/62" : "text-text-secondary"
                        }`}
                      >
                        0{index + 1}
                      </p>
                      <p
                        className={`text-xs uppercase tracking-[0.24em] lg:mt-6 ${
                          index === 0 ? "text-text-on-light/65" : "text-text-secondary"
                        }`}
                      >
                        {item.eyebrow}
                      </p>
                    </div>

                    <div
                      className={`border-t pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 ${
                        index === 0 ? "border-text-on-light/12" : "border-white/10"
                      }`}
                    >
                      <h3 className="font-display text-[2rem] leading-[1.02] sm:text-[2.35rem]">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                          index === 0 ? "text-text-on-light/78" : "text-text-secondary"
                        }`}
                      >
                        {item.description}
                      </p>

                      <ul
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label={`${item.title} tecnologias e focos`}
                      >
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] ${
                              index === 0
                                ? "border border-badge-border bg-bg-surface-muted/55 text-text-on-light/80"
                                : "border border-white/10 bg-white/[0.05] text-text-primary/88"
                            }`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
