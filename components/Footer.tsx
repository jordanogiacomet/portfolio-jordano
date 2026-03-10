import Link from "next/link";

import { navItems, socialLinks } from "@/components/site-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#17070af2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="font-display text-2xl text-text-primary">Jordano</p>
            <p className="text-sm leading-7 text-text-secondary">
              Portfolio shell prepared for a premium editorial single-page experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Jordano Giacomet Tomazoni. All rights reserved.</p>

          <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
