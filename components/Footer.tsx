import Link from "next/link";

import { contactLinks, navItems } from "@/components/site-links";

function getLinkAttributes(href: string) {
  if (!href.startsWith("http")) {
    return {};
  }

  return {
    rel: "noreferrer",
    target: "_blank"
  } as const;
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(23,7,10,0.88)_0%,rgba(12,4,6,0.98)_100%)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(243,235,221,0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-text-secondary/72">
              Encerramento
            </p>
            <p className="mt-4 font-display text-[2.15rem] leading-none text-text-primary sm:text-[2.75rem]">
              Jordano
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary">
              Portfólio pessoal para apresentar trabalho selecionado, profundidade técnica
              e um caminho de contato direto.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-text-secondary/70">
                Navegação
              </p>

              <nav className="mt-4 flex flex-col gap-3" aria-label="Navegação do rodapé">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="-mx-2 inline-flex min-h-11 items-center rounded-xl px-2 py-1 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-text-secondary/70">
                Contato direto
              </p>

              <ul className="mt-4 space-y-3">
                {contactLinks.map((link) => (
                  <li
                    key={link.id}
                    className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <a
                      href={link.href}
                      className="group -mx-3 flex min-h-11 flex-col justify-center rounded-xl px-3 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                      {...getLinkAttributes(link.href)}
                    >
                      <span className="font-medium text-text-primary">{link.label}</span>
                      <span className="break-all text-text-secondary transition-colors duration-200 group-hover:text-text-primary/82">
                        {link.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Jordano Giacomet Tomazoni.</p>
          <p className="max-w-2xl leading-7 md:text-right">
            Contato direto por e-mail, LinkedIn ou GitHub.
          </p>
        </div>
      </div>
    </footer>
  );
}
