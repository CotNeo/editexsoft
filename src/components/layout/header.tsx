"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/ui/logo";
import { stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export type HeaderNav = {
  features: string;
  integrations: string;
  pricing: string;
  download: string;
  docs: string;
  faq: string;
  contact: string;
  login: string;
  cta: string;
  openMenu: string;
  closeMenu: string;
  toggleTheme: string;
  changeLanguage: string;
  skipToContent: string;
};

export function Header({
  locale,
  nav,
  appUrl,
}: {
  locale: Locale;
  nav: HeaderNav;
  appUrl: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/features", label: nav.features },
    { href: "/integrations", label: nav.integrations },
    { href: "/pricing", label: nav.pricing },
    { href: "/docs", label: nav.docs },
    { href: "/contact", label: nav.contact },
  ];

  const current = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-[1.5px] focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-[0.7rem] focus:uppercase focus:tracking-[0.16em]"
      >
        {nav.skipToContent}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[var(--header-height)] bg-paper transition-colors duration-200",
          open ? "border-b border-transparent" : scrolled ? "border-b border-ink" : "border-b border-rule",
        )}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <Link href={`/${locale}`} aria-label="EditexSoft" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active =
                current === link.href || (link.href !== "/" && current.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className={cn(
                    "group relative py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors",
                    active ? "text-ink" : "text-ink-60 hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 block h-[2px] w-full origin-left bg-accent transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <LocaleSwitcher locale={locale} label={nav.changeLanguage} className="hidden sm:flex" />

            <a
              href={appUrl}
              className="hidden font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-60 transition-colors hover:text-ink xl:block"
            >
              {nav.login}
            </a>

            <Link
              href={`/${locale}/download`}
              className="hidden border-[1.5px] border-ink px-4 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper sm:inline-flex"
            >
              {nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? nav.closeMenu : nav.openMenu}
              aria-expanded={open}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-ink lg:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "block h-[2px] w-4 bg-ink transition-transform duration-200",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "block h-[2px] w-4 bg-ink transition-transform duration-200",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü — tam ekran kağıt */}
      <div
        className={cn(
          "fixed inset-0 top-[var(--header-height)] z-40 bg-paper transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="shell flex h-full flex-col overflow-y-auto pb-10 pt-2">
          <nav aria-label="Mobile">
            {[...links, { href: "/faq", label: nav.faq }].map((link, index) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-rule py-4"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.75rem] font-extrabold uppercase leading-none tracking-[-0.04em] text-ink">
                  {link.label}
                </span>
                <span aria-hidden className="ml-auto font-mono text-ink-20 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
            <a
              href={appUrl}
              className="flex items-baseline gap-4 border-b border-rule py-4"
              onClick={() => setOpen(false)}
            >
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-40">07</span>
              <span className="font-display text-[1.75rem] font-extrabold uppercase leading-none tracking-[-0.04em] text-ink">
                {nav.login}
              </span>
            </a>
          </nav>

          <div className="mt-8 flex items-center justify-between gap-4">
            <LocaleSwitcher locale={locale} label={nav.changeLanguage} />
            <Link
              href={`/${locale}/download`}
              onClick={() => setOpen(false)}
              className="border-[1.5px] border-ink bg-ink px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-paper"
            >
              {nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
