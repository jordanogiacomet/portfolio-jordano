import Image from "next/image";
import Link from "next/link";

export type ProjectLinkSet = {
  live?: string | null;
  github?: string | null;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  role: string;
  highlights: string[];
  tags: string[];
  image: string;
  links?: ProjectLinkSet;
};

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  featured?: boolean;
};

const projectLinks = [
  { key: "live", label: "Ver projeto", value: "live" },
  { key: "github", label: "GitHub", value: "github" }
] as const;

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function getRenderableHref(href?: string | null) {
  if (!href) {
    return null;
  }

  const trimmedHref = href.trim();

  if (!trimmedHref || trimmedHref === "#") {
    return null;
  }

  return trimmedHref;
}

export function ProjectCard({
  project,
  index,
  featured = false
}: ProjectCardProps) {
  const links = projectLinks.flatMap((entry) => {
    const href = getRenderableHref(project.links?.[entry.value]);

    if (!href) {
      return [];
    }

    return [{ href, label: entry.label, key: entry.key }];
  });

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#d7c7bc]/35 bg-bg-surface text-text-on-light shadow-[0_24px_80px_rgba(9,2,4,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_32px_95px_rgba(9,2,4,0.24)]">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative grid gap-8 p-5 sm:p-6 xl:grid-cols-[minmax(17rem,0.88fr)_minmax(0,1fr)] xl:items-center xl:gap-10 xl:p-7">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2b0a0f]/10 bg-[#21080d]">
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#120406]/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-text-primary backdrop-blur-sm">
              Projeto em foco
            </div>

            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={project.image}
                alt={`Capa do projeto ${project.title}`}
                fill
                sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <p className="text-xs uppercase tracking-[0.32em] text-text-on-light/62">
                0{index + 1}
              </p>
              <div className="h-px flex-1 bg-text-on-light/12 transition-colors duration-300 group-hover:bg-text-on-light/20" />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-text-on-light/62">
              {project.category}
            </p>

            <h3 className="mt-4 font-display text-4xl leading-[1.02] sm:text-[2.8rem]">
              {project.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-text-on-light/78 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-[#2b0a0f]/10 bg-[#2b0a0f]/4 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-text-on-light/62">
                Recorte
              </p>
              <p className="mt-3 text-sm leading-7 text-text-on-light/78 sm:text-base">
                {project.role}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-text-on-light/62">
                O que este trabalho evidencia
              </p>
              <ul
                className="mt-4 space-y-3"
                aria-label={`Pontos principais de ${project.title}`}
              >
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-7 text-text-on-light/78 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label={`Tecnologias de ${project.title}`}
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-badge-border bg-bg-surface-muted/55 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-text-on-light/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {links.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    target={isExternalHref(link.href) ? "_blank" : undefined}
                    rel={isExternalHref(link.href) ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2b0a0f]/12 bg-[#2b0a0f]/4 px-4 py-2.5 text-sm font-medium text-text-on-light transition duration-200 ease-out hover:bg-[#2b0a0f]/8"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-4 shadow-panel backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.06]">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#1b090c]">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#120406]/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-text-primary backdrop-blur-sm">
            Seleção
          </div>

          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={project.image}
              alt={`Capa do projeto ${project.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <p className="text-xs uppercase tracking-[0.32em] text-text-secondary/80">
            0{index + 1}
          </p>
          <div className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-white/15" />
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-text-secondary/80">
          {project.category}
        </p>

        <h3 className="mt-6 font-display text-3xl leading-tight text-text-primary">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[11px] uppercase tracking-[0.26em] text-text-secondary/70">
            Recorte
          </p>
          <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
            {project.role}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-[0.26em] text-text-secondary/70">
            Mostra
          </p>
          <ul
            className="mt-4 space-y-3"
            aria-label={`Pontos principais de ${project.title}`}
          >
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-7 text-text-secondary sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 rounded-full bg-text-primary/75"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="mt-7 flex flex-wrap gap-2"
          aria-label={`Tecnologias de ${project.title}`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-text-primary/88"
            >
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                target={isExternalHref(link.href) ? "_blank" : undefined}
                rel={isExternalHref(link.href) ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-text-primary transition duration-200 ease-out hover:bg-white/[0.09]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
