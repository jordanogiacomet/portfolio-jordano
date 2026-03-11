import Image from "next/image";

import aboutContent from "@/data/about.json";

type AboutContent = {
  sectionLabel: string;
  headline: string;
  bio: string[];
  profileImage: string;
};

const content = aboutContent as AboutContent;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.07),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.78fr)] xl:items-start">
            <div>
              <header className="max-w-3xl">
                <h2
                  id="about-heading"
                  className="font-display text-4xl text-text-primary sm:text-5xl"
                >
                  {content.headline}
                </h2>
              </header>

              <div className="mt-8 space-y-5">
                {content.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-4 shadow-panel backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#1b090c]">
                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#120406]/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-text-primary backdrop-blur-sm">
                    {content.sectionLabel}
                  </div>

                  <div className="relative aspect-[4/5]">
                    <Image
                      src={content.profileImage}
                      alt="Editorial profile placeholder representing Jordano Giacomet Tomazoni"
                      fill
                      sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
