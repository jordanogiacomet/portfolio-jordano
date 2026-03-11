export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type ExperienceEntryProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceEntry({ item, index }: ExperienceEntryProps) {
  const featured = index === 0;

  return (
    <li className="relative md:pl-12">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-8 hidden h-4 w-4 -translate-x-[calc(50%-1px)] rounded-full border md:block ${
          featured
            ? "border-accent bg-bg-surface shadow-[0_0_0_6px_rgba(142,35,54,0.18)]"
            : "border-white/20 bg-[#170709]"
        }`}
      />

      <article
        className={`rounded-[2rem] border p-6 shadow-panel sm:p-8 ${
          featured
            ? "border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)]"
            : "border-white/10 bg-white/[0.04] text-text-primary backdrop-blur-sm"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.28em] ${
                featured ? "text-text-on-light/55" : "text-text-secondary/80"
              }`}
            >
              {item.company}
            </p>
            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-[2.2rem]">
              {item.role}
            </h3>
          </div>

          <p
            className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] ${
              featured
                ? "border-badge-border bg-bg-surface-muted text-text-on-light/70"
                : "border-white/10 bg-white/[0.05] text-text-secondary"
            }`}
          >
            {item.period}
          </p>
        </div>

        <p
          className={`mt-6 max-w-3xl text-base leading-8 ${
            featured ? "text-text-on-light/85" : "text-text-secondary"
          }`}
        >
          {item.description}
        </p>
      </article>
    </li>
  );
}
