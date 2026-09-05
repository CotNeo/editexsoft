import Link from "next/link";
import { Mono } from "@/components/brutal/primitives";
import { siteConfig, whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const socials = [
    { href: siteConfig.social.linkedin, label: "LINKEDIN" },
    { href: siteConfig.social.youtube, label: "YOUTUBE" },
    { href: siteConfig.social.instagram, label: "INSTAGRAM" },
    { href: siteConfig.social.x, label: "X" },
  ];

  return (
    <footer className="mt-auto border-t border-ink">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-14 lg:py-16">
          <div className="col-span-12 lg:col-span-4">
            <Mono className="text-accent">{dict.landing.meta.brand}</Mono>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-ink-60">
              {dict.footer.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mono-label text-ink-40 transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {dict.footer.columns.map((column) => (
            <div key={column.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
              <Mono className="block border-b border-ink pb-2 text-ink">{column.title}</Mono>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href} className="border-b border-rule">
                    <Link
                      href={`/${locale}${link.href}`}
                      className="block py-2.5 text-[0.8125rem] text-ink-60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <Mono className="block border-b border-ink pb-2 text-ink">
              {dict.footer.contactTitle}
            </Mono>
            <ul>
              <li className="border-b border-rule">
                <a
                  href={whatsappLink(dict.common.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block py-2.5 text-[0.8125rem] text-ink-60 transition-colors hover:text-accent"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="border-b border-rule">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block py-2.5 text-[0.8125rem] text-ink-60 transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="border-b border-rule py-2.5">
                <span className="text-[0.8125rem] text-ink-60">
                  {siteConfig.contact.workingHours[locale]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-rule py-5 sm:flex-row sm:items-center sm:justify-between">
          <Mono className="text-ink-40">
            © {year} {siteConfig.legalName} — {dict.footer.rights}
          </Mono>
          <Mono className="text-ink-40">
            {dict.footer.madeIn} / {siteConfig.domain}
          </Mono>
        </div>
      </div>

      {/* Kenardan taşan devasa logotype */}
      <div aria-hidden className="overflow-hidden border-t border-rule">
        <div className="shell">
          <span className="block translate-y-[14%] select-none font-display text-[17.5vw] font-black uppercase leading-[0.72] tracking-[-0.06em] text-ink-20">
            Editexsoft
          </span>
        </div>
      </div>
    </footer>
  );
}
