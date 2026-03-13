"use client";

import { useState } from "react";

import faqContent from "@/data/faq.json";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQContent = {
  heading: string;
  description: string;
  items: FAQItem[];
};

const content = faqContent as FAQContent;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    content.items.length > 0 ? 0 : null
  );

  if (content.items.length === 0) {
    return null;
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="page-section page-section--compact"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(243,235,221,0.06),_transparent_72%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="page-section-layout grid lg:grid-cols-[0.32fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">FAQ</p>
          </div>

          <div>
            <header className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-8">
              <h2
                id="faq-heading"
                className="font-display text-4xl text-text-primary sm:text-5xl"
              >
                {content.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                {content.description}
              </p>
            </header>

            <div className="page-section-flow space-y-4">
              {content.items.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;
                const buttonId = `faq-question-${index}`;

                return (
                  <article
                    key={item.question}
                    className={`rounded-[1.75rem] border bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 ${
                      isOpen
                        ? "border-[#f3ebdd]/24 bg-white/[0.05]"
                        : "border-white/10 hover:border-white/20 hover:bg-white/[0.045]"
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-7 sm:py-7"
                        onClick={() =>
                          setOpenIndex((currentIndex) =>
                            currentIndex === index ? null : index
                          )
                        }
                      >
                        <span className="flex flex-1 items-start gap-4 sm:gap-5">
                          <span className="pt-1 text-[10px] uppercase tracking-[0.3em] text-text-secondary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-body text-lg font-semibold leading-7 text-text-primary sm:text-[1.15rem]">
                            {item.question}
                          </span>
                        </span>

                        <span className="flex shrink-0 items-center gap-3 pt-1">
                          <span className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">
                            {isOpen ? "Fechar" : "Abrir"}
                          </span>
                          <span
                            aria-hidden="true"
                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#170709] text-text-primary"
                          >
                            <span className="absolute h-px w-4 bg-current" />
                            <span
                              className={`absolute h-4 w-px bg-current transition-transform duration-300 ${
                                isOpen ? "scale-y-0" : "scale-y-100"
                              }`}
                            />
                          </span>
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-6 pb-6 sm:px-7 sm:pb-7"
                    >
                      <div className="border-t border-white/10 pt-5 sm:pt-6">
                        <p className="max-w-3xl font-body text-base leading-8 text-text-secondary">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
