import { ExperienceEntry, type ExperienceItem } from "@/components/ExperienceEntry";
import experienceContent from "@/data/experience.json";

type ExperienceContent = {
  sectionLabel: string;
  items: ExperienceItem[];
};

const content = experienceContent as ExperienceContent;

export function Experience() {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.06),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-28 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
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
                id="experience-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.sectionLabel}
              </h2>
            </header>

            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute bottom-8 left-[7px] top-8 hidden w-px bg-gradient-to-b from-[#f3ebdd]/55 via-white/18 to-transparent md:block"
              />

              <ol className="space-y-5">
                {content.items.map((item, index) => (
                  <ExperienceEntry
                    key={`${item.company}-${item.role}`}
                    item={item}
                    index={index}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
