import Image from "next/image";
import Link from "next/link";

import heroContent from "@/data/hero.json";

type HeroLink = {
  text: string;
  link: string;
};

type HeroHighlight = {
  label: string;
  description: string;
};

type HeroVisual = {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
};

type HeroContent = {
  name: string;
  greeting: string;
  titleLines: string[];
  description: string;
  cta: HeroLink;
  secondaryCta: HeroLink;
  highlights: HeroHighlight[];
  visual: HeroVisual;
};

const content = heroContent as HeroContent;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate overflow-hidden border-b border-white/10 bg-hero-radial px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(243,235,221,0.16),_transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-end lg:gap-14">
          <div className="max-w-3xl">
            <p className="animate-hero-reveal text-sm uppercase tracking-[0.34em] text-text-secondary">
              {content.greeting}
            </p>

            <h1
              id="home-heading"
              className="mt-5 space-y-2 text-balance font-display text-5xl leading-[0.92] text-text-primary sm:text-6xl lg:text-[5.75rem]"
              aria-label={`${content.name}, ${content.titleLines.join(" ")}`}
            >
              {content.titleLines.map((line, index) => {
                const delay = `${120 + index * 120}ms`;
                const lineClassName =
                  index === content.titleLines.length - 1
                    ? "text-[0.72em] italic text-text-secondary"
                    : "";

                return (
                  <span
                    key={line}
                    className={`animate-hero-reveal block ${lineClassName}`}
                    style={{ animationDelay: delay }}
                  >
                    {line}
                  </span>
                );
              })}
            </h1>

            <p
              className="animate-hero-reveal mt-8 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
              style={{ animationDelay: "420ms" }}
            >
              {content.description}
            </p>

            <div
              className="animate-hero-reveal mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "520ms" }}
            >
              <Link
                href={content.cta.link}
                className="inline-flex items-center justify-center rounded-full bg-bg-surface px-6 py-3 text-sm font-medium text-text-on-light transition-transform duration-200 hover:-translate-y-0.5"
              >
                {content.cta.text}
              </Link>
              <Link
                href={content.secondaryCta.link}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-white/5"
              >
                {content.secondaryCta.text}
              </Link>
            </div>
          </div>

          <div
            className="animate-hero-reveal rounded-[2rem] border border-white/10 bg-[#1b090cf2] p-4 shadow-panel backdrop-blur-sm"
            style={{ animationDelay: "320ms" }}
          >
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#2b0a0f]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={content.visual.src}
                  alt={content.visual.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-[#160609] via-[#160609f0] to-transparent px-6 pb-6 pt-16">
                <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                  {content.visual.eyebrow}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-text-primary/90">
                  {content.visual.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.highlights.map((highlight, index) => (
            <article
              key={highlight.label}
              className="animate-hero-reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              style={{ animationDelay: `${520 + index * 90}ms` }}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-text-secondary">
                0{index + 1}
              </p>
              <h2 className="mt-4 font-display text-2xl leading-tight text-text-primary">
                {highlight.label}
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
