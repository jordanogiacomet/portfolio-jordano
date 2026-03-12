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
      className="page-section page-section--compact"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.08),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid lg:grid-cols-[0.32fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div>
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:items-start">
              <header className="max-w-3xl">
                <h2
                  id="projects-heading"
                  className="font-display text-4xl text-text-primary sm:text-5xl"
                >
                  {content.heading}
                </h2>
                <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
                  {content.description}
                </p>
              </header>

              <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-7">
                <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                  {content.curation.label}
                </p>
                <p className="mt-4 text-lg leading-8 text-text-primary">
                  {content.curation.title}
                </p>

                <ul
                  className="mt-6 space-y-4"
                  aria-label={content.curation.label}
                >
                  {content.curation.items.map((item) => (
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

            <div className="page-section-flow space-y-5">
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
