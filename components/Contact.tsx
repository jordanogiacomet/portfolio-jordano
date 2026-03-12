import contactContent from "@/data/contact.json";
import type { ContactLinkId } from "@/components/site-links";
import { contactLinks } from "@/components/site-links";

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
      className="page-section"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.07),_transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">
              {content.sectionLabel}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d7c7bc]/24 bg-[linear-gradient(135deg,#f3ebdd_0%,#ead9cb_55%,#e0ccbc_100%)] text-text-on-light shadow-[0_32px_120px_rgba(8,2,4,0.28)]">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-[-12%] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(142,35,54,0.16),_transparent_72%)]"
            />

            <div className="relative p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(19rem,0.76fr)] xl:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-text-on-light/62">
                    Canal direto
                  </p>

                  <h2
                    id="contact-heading"
                    className="mt-5 max-w-3xl font-display text-[2.8rem] leading-[0.96] sm:text-5xl lg:text-[4.2rem]"
                  >
                    {content.heading}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-text-on-light/78 sm:text-lg">
                    {content.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-text-on-light/62">
                    {content.closingNote}
                  </p>
                </div>

                <aside className="rounded-[2rem] border border-white/10 bg-[#23080d] p-6 text-text-primary shadow-[0_24px_80px_rgba(9,2,4,0.18)] sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                    {content.guidance.label}
                  </p>
                  <h3 className="mt-4 font-display text-[1.9rem] leading-[1.02] sm:text-[2.2rem]">
                    {content.guidance.title}
                  </h3>

                  <ol className="mt-6 space-y-4" aria-label={content.guidance.label}>
                    {content.guidance.items.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                      >
                        <span className="pt-1 text-xs uppercase tracking-[0.3em] text-text-secondary">
                          0{index + 1}
                        </span>
                        <p className="text-sm leading-7 text-text-secondary sm:text-base">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </aside>
              </div>

              <div className="mt-12 grid gap-4 border-t border-[#2b0a0f]/10 pt-6 md:grid-cols-3 lg:gap-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="h-full rounded-[1.6rem] border border-[#2b0a0f]/10 bg-white/45 px-5 py-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:bg-white/55 sm:px-6 sm:py-6"
                    {...getLinkAttributes(link.href)}
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-text-on-light/62">
                      {link.label}
                    </p>
                    <p className="mt-4 break-words text-lg font-semibold leading-6 text-text-on-light">
                      {link.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-text-on-light/72">
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
