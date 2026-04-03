"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/components/site-links";

type NavHref = (typeof navItems)[number]["href"];

const primaryNavItems = navItems.slice(0, -1);
const contactNavItem = navItems[navItems.length - 1] ?? navItems[0];

function getDesktopLinkClassName(isActive: boolean) {
  return `inline-flex min-h-11 items-center rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c] ${
    isActive
      ? "bg-white/[0.1] text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      : "text-text-secondary hover:bg-white/[0.05] hover:text-text-primary"
  }`;
}

function getMobileLinkClassName(isActive: boolean) {
  return `flex min-h-12 items-center rounded-[1.4rem] border px-4 py-3 text-sm font-medium tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c] ${
    isActive
      ? "border-white/16 bg-white/[0.08] text-text-primary"
      : "border-white/10 bg-white/[0.03] text-text-secondary hover:bg-white/[0.06] hover:text-text-primary"
  }`;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<NavHref>(navItems[0]?.href ?? "#home");

  useEffect(() => {
    const syncHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }

      const activationOffset = window.innerHeight * 0.2 + 96;
      let nextActiveHref: NavHref = navItems[0]?.href ?? "#home";

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);

        if (section && window.scrollY + activationOffset >= section.offsetTop) {
          nextActiveHref = item.href;
        }
      }

      setActiveHref((currentHref) =>
        currentHref === nextActiveHref ? currentHref : nextActiveHref
      );
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);
    window.addEventListener("hashchange", syncHeaderState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      window.removeEventListener("resize", syncHeaderState);
      window.removeEventListener("hashchange", syncHeaderState);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const shellClassName = isScrolled
    ? "border-white/12 bg-[linear-gradient(135deg,rgba(23,8,11,0.94),rgba(31,9,13,0.82))] shadow-panel backdrop-blur-xl"
    : "border-white/10 bg-[linear-gradient(135deg,rgba(26,9,12,0.72),rgba(26,9,12,0.34))] backdrop-blur-lg";

  const isContactActive = activeHref === contactNavItem.href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 lg:px-10">
      <div
        className={`mx-auto max-w-7xl rounded-[2rem] border transition-all duration-300 ${shellClassName}`}
      >
        <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
          <Link
            href="#home"
            className="group inline-flex min-h-11 items-center rounded-[1.5rem] px-2 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c]"
            aria-current={activeHref === "#home" ? "page" : undefined}
            onClick={() => {
              setActiveHref("#home");
              setIsMenuOpen(false);
            }}
          >
            <span className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="hidden h-2.5 w-2.5 rounded-full bg-bg-surface/80 shadow-[0_0_18px_rgba(243,235,221,0.35)] sm:block"
              />
              <span className="flex flex-col">
                <span className="hidden text-[0.58rem] uppercase tracking-[0.34em] text-text-secondary/70 sm:block">
                  Engenharia de software
                </span>
                <span className="font-display text-[1.15rem] uppercase tracking-[0.2em] text-text-primary transition-colors duration-200 group-hover:text-bg-surface sm:text-[1.22rem]">
                  Jordano Giacomet Tomazoni
                </span>
              </span>
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <nav
              className="flex items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              aria-label="Navegação principal"
            >
              {primaryNavItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={getDesktopLinkClassName(isActive)}
                    onClick={() => setActiveHref(item.href)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href={contactNavItem.href}
              aria-current={isContactActive ? "page" : undefined}
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c] ${
                isContactActive
                  ? "border-[rgba(243,235,221,0.82)] bg-bg-surface text-text-on-light shadow-[0_16px_34px_rgba(0,0,0,0.26)]"
                  : "border-white/12 bg-white/[0.06] text-text-primary hover:border-white/24 hover:bg-white/[0.1]"
              }`}
              onClick={() => setActiveHref(contactNavItem.href)}
            >
              {contactNavItem.label}
            </Link>
          </div>

          <button
            type="button"
            className="group ml-auto inline-flex h-11 w-11 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.05] text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-all duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!isMenuOpen}
        className={`mx-auto mt-3 max-w-7xl origin-top rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(25,9,13,0.96),rgba(16,5,8,0.98))] p-3 shadow-panel backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible pointer-events-auto translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        }`}
        id="mobile-menu"
      >
        <nav className="flex flex-col gap-2.5" aria-label="Navegação no celular">
          {primaryNavItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={getMobileLinkClassName(isActive)}
                onClick={() => {
                  setActiveHref(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={contactNavItem.href}
            aria-current={isContactActive ? "page" : undefined}
            className={`mt-1 inline-flex min-h-12 items-center justify-center rounded-[1.4rem] border bg-bg-surface px-4 py-3 text-sm font-medium text-text-on-light shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,235,221,0.92)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b080c] ${
              isContactActive
                ? "border-[rgba(243,235,221,0.82)]"
                : "border-[rgba(243,235,221,0.32)] hover:-translate-y-0.5"
            }`}
            onClick={() => {
              setActiveHref(contactNavItem.href);
              setIsMenuOpen(false);
            }}
          >
            {contactNavItem.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
