import contactContent from "@/data/contact.json";
import type { ContactLinkId } from "@/components/site-links";
import { contactLinks } from "@/components/site-links";
import type { CSSProperties } from "react";

type ContactContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  primaryCtaText: string;
  primaryLinkId: ContactLinkId;
  secondaryCtaText: string;
  secondaryLinkId: ContactLinkId;
  guidance: {
    label: string;
    title: string;
    items: string[];
  };
  closingNote: string;
};

const content = contactContent as ContactContent;

const primaryLink = contactLinks.find((link) => link.id === content.primaryLinkId);
const secondaryLink = contactLinks.find((link) => link.id === content.secondaryLinkId);

const sectionStyle = {
  "--section-padding-top": "clamp(4.15rem, 6.4vw, 4.95rem)",
  "--section-padding-bottom": "clamp(4.4rem, 6.9vw, 5.25rem)",
  "--section-layout-gap": "clamp(1.5rem, 3vw, 1.9rem)",
  "--section-layout-gap-lg": "clamp(2.2rem, 2.7vw, 2.55rem)",
  "--section-flow-gap": "clamp(1.6rem, 2.8vw, 2rem)"
} as CSSProperties;

function getLinkAttributes(href: string) {
  if (!href.startsWith("http")) {
    return {};
  }

  return {
    rel: "noreferrer",
    target: "_blank"
  } as const;
}

export function Contact() {
  if (!primaryLink || !secondaryLink) {
    return null;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="page-section page-section--standard"
      style={sectionStyle}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.07),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid lg:grid-cols-[0.32fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.35rem] border border-[#d7c7bc]/24 bg-[linear-gradient(135deg,#f3ebdd_0%,#ead9cb_55%,#e0ccbc_100%)] text-text-on-light shadow-[0_28px_96px_rgba(8,2,4,0.24)]">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-[-12%] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(142,35,54,0.16),_transparent_72%)]"
            />

            <div className="relative p-6 sm:p-8 lg:p-9">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] xl:items-start xl:gap-9">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-text-on-light/62">
                    Canal direto
                  </p>

                  <h2
                    id="contact-heading"
                    className="mt-4 max-w-3xl font-display text-[2.55rem] leading-[0.95] sm:text-[3.2rem] lg:text-[3.85rem]"
                  >
                    {content.heading}
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-text-on-light/78 sm:text-[1.05rem]">
                    {content.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={primaryLink.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1f090d] px-6 py-3 text-sm font-medium text-text-primary transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {content.primaryCtaText}
                    </a>

                    <a
                      href={secondaryLink.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2b0a0f]/15 px-6 py-3 text-sm font-medium text-text-on-light transition-colors duration-200 hover:bg-[#2b0a0f]/5"
                      {...getLinkAttributes(secondaryLink.href)}
                    >
                      {content.secondaryCtaText}
                    </a>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-[1.7rem] text-text-on-light/62">
                    {content.closingNote}
                  </p>
                </div>

                <aside className="self-start rounded-[1.8rem] border border-white/10 bg-[#23080d]/98 p-5 text-text-primary shadow-[0_18px_60px_rgba(9,2,4,0.16)] sm:p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                    {content.guidance.label}
                  </p>
                  <h3 className="mt-3 font-display text-[1.6rem] leading-[1.04] sm:text-[1.95rem]">
                    {content.guidance.title}
                  </h3>

                  <ol className="mt-5 space-y-3" aria-label={content.guidance.label}>
                    {content.guidance.items.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                      >
                        <span className="pt-1 text-[11px] uppercase tracking-[0.3em] text-text-secondary">
                          0{index + 1}
                        </span>
                        <p className="text-sm leading-6 text-text-secondary sm:text-[0.97rem]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </aside>
              </div>

              <div className="page-section-flow grid gap-3 border-t border-[#2b0a0f]/10 pt-5 md:grid-cols-3 lg:gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="h-full rounded-[1.45rem] border border-[#2b0a0f]/10 bg-white/45 px-5 py-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/55 sm:px-5 sm:py-5"
                    {...getLinkAttributes(link.href)}
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-text-on-light/62">
                      {link.label}
                    </p>
                    <p className="mt-3 break-words text-[1.05rem] font-semibold leading-6 text-text-on-light sm:text-[1.1rem]">
                      {link.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-on-light/72">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
