import servicesContent from "@/data/services.json";

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
};

type ServicesContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  items: ServiceItem[];
};

const content = servicesContent as ServicesContent;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.08),_transparent_70%)]"
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
                id="services-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
                {content.description}
              </p>
            </header>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {content.items.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-[2rem] border border-[#d7c7bc]/35 bg-bg-surface p-7 text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(9,2,4,0.24)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-on-light/55">
                      0{index + 1}
                    </p>
                    <div className="h-px flex-1 translate-y-2 bg-text-on-light/12 transition-colors duration-300 group-hover:bg-text-on-light/20" />
                  </div>

                  <h3 className="mt-6 font-display text-3xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-text-on-light/78 sm:text-base">
                    {item.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${item.title} tags`}>
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-badge-border bg-bg-surface-muted/55 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-text-on-light/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
