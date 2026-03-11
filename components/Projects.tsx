import { ProjectCard, type ProjectItem } from "@/components/ProjectCard";
import projectsContent from "@/data/projects.json";

type ProjectsContent = {
  sectionLabel: string;
  heading: string;
  description: string;
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
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
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
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div>
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

            <div className="mt-10 space-y-5">
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
