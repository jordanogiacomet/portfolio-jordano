import { ProjectCard, type ProjectItem } from "@/components/ProjectCard";
import projectsContent from "@/data/projects.json";

type ProjectsContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  curation: {
    label: string;
    title: string;
    items: string[];
  };
  items: ProjectItem[];
};

const content = projectsContent as ProjectsContent;

export function Projects() {
  const [featuredProject, ...secondaryProjects] = content.items;

  if (!featuredProject) {
    return null;
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="page-section page-section--compact [--section-padding-top:clamp(3.3rem,5.2vw,4rem)] [--section-layout-gap:clamp(1.25rem,2.75vw,1.75rem)] [--section-layout-gap-lg:clamp(2rem,2.5vw,2.3rem)] [--section-flow-gap:clamp(1.35rem,2.4vw,1.8rem)]"
    >
     

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid items-start lg:grid-cols-[1fr]">
          <div className="hidden lg:block">
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div>
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] xl:items-start xl:gap-5">
              <header className="max-w-[40rem]">
                <p className="text-sm uppercase tracking-[0.28em] text-text-secondary lg:hidden">
                  {content.sectionLabel}
                </p>
                <h2
                  id="projects-heading"
                  className="mt-3 font-display text-4xl text-text-primary sm:text-5xl lg:mt-0"
                >
                  {content.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary sm:text-[1.05rem] sm:leading-8">
                  {content.description}
                </p>
              </header>

              <aside className="rounded-[1.85rem] border border-white/10 bg-white/[0.025] p-5 shadow-[0_18px_55px_rgba(9,2,4,0.16)] backdrop-blur-sm sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-text-secondary/85">
                  {content.curation.label}
                </p>
                <p className="mt-3 text-base leading-7 text-text-primary sm:text-[1.05rem]">
                  {content.curation.title}
                </p>

                <ul
                  className="mt-5 space-y-3.5"
                  aria-label={content.curation.label}
                >
                  {content.curation.items.map((item) => (
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
            </div>

            <div className="page-section-flow space-y-4 sm:space-y-5">
              <ProjectCard project={featuredProject} index={0} featured />

              {secondaryProjects.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {secondaryProjects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index + 1}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
