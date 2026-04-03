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
  "--section-padding-top": "clamp(3.8rem, 6.1vw, 4.45rem)",
  "--section-padding-bottom": "clamp(3.95rem, 6.4vw, 4.7rem)",
  "--section-layout-gap": "clamp(1.35rem, 2.8vw, 1.7rem)",
  "--section-layout-gap-lg": "clamp(2rem, 2.6vw, 2.3rem)",
  "--section-flow-gap": "clamp(1.45rem, 2.6vw, 1.8rem)"
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
      className="page-section page-section--compact"
      style={sectionStyle}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid items-start lg:grid-cols-[1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.35rem] border border-[#d7c7bc]/24 bg-[linear-gradient(135deg,#f3ebdd_0%,#ead9cb_55%,#e0ccbc_100%)] text-text-on-light shadow-[0_28px_96px_rgba(8,2,4,0.24)]">

            <div className="relative p-6 sm:p-8 lg:p-9">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.06fr)_minmax(18rem,0.8fr)] xl:items-start xl:gap-7">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-text-on-light/62">
                    Conversa inicial
                  </p>

                  <h2
                    id="contact-heading"
                    className="mt-4 max-w-3xl font-display text-[2.45rem] leading-[0.96] sm:text-[3rem] lg:text-[3.55rem]"
                  >
                    {content.heading}
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-text-on-light/78 sm:text-[1.02rem] sm:leading-8">
                    {content.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={primaryLink.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1f090d] px-6 py-3 text-sm font-medium text-text-primary shadow-[0_16px_36px_rgba(31,9,13,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23080d]"
                    >
                      {content.primaryCtaText}
                    </a>

                    <a
                      href={secondaryLink.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2b0a0f]/15 bg-white/35 px-6 py-3 text-sm font-medium text-text-on-light transition-colors duration-200 hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23080d]"
                      {...getLinkAttributes(secondaryLink.href)}
                    >
                      {content.secondaryCtaText}
                    </a>
                  </div>

                  <div className="mt-6 rounded-[1.55rem] border border-[#2b0a0f]/10 bg-white/52 px-4 py-4 shadow-[0_18px_50px_rgba(31,9,13,0.08)] sm:px-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-text-on-light/60">
                      Próximo passo
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-text-on-light/78 sm:text-[0.98rem] sm:leading-7">
                      {content.closingNote}
                    </p>
                  </div>
                </div>

                <aside className="grid gap-4 self-center">
                  <div className="rounded-[1.8rem] border border-[#2b0a0f]/10 bg-white/45 p-5 text-text-on-light shadow-[0_18px_50px_rgba(31,9,13,0.08)] sm:p-6 self-center">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-text-on-light/60">
                      Canais diretos
                    </p>

                    <ul className="mt-4 space-y-3.5" aria-label="Canais diretos">
                      {contactLinks.map((link) => (
                        <li
                          key={link.id}
                          className="border-t border-[#2b0a0f]/10 pt-3.5 first:border-t-0 first:pt-0"
                        >
                          <a
                            href={link.href}
                            className="group block rounded-[1rem] transition-transform duration-200 hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23080d]"
                            {...getLinkAttributes(link.href)}
                          >
                            <p className="text-[10px] uppercase tracking-[0.28em] text-text-on-light/62">
                              {link.label}
                            </p>
                            <p className="mt-1 break-words text-[1rem] font-semibold leading-6 text-text-on-light [overflow-wrap:anywhere]">
                              {link.value}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-text-on-light/74 transition-colors duration-200 group-hover:text-text-on-light/82">
                              {link.description}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
