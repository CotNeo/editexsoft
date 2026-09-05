"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalButtonLink } from "@/components/ui/button";
import { IconWhatsapp } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function DocsSidebar({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string;
}) {
  const pathname = usePathname() || "";

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-fg-subtle">
        {dict.docs.sidebarTitle}
      </p>

      <nav className="mt-4 space-y-6" aria-label={dict.docs.sidebarTitle}>
        {dict.docs.categories.map((category) => (
          <div key={category.title}>
            <p className="text-[0.8125rem] font-semibold text-fg">{category.title}</p>
            <ul className="mt-2 space-y-0.5 border-l border-border-base">
              {category.slugs.map((slug) => {
                const href = `/${locale}/docs/${slug}`;
                const active = pathname === href;
                return (
                  <li key={slug}>
                    <Link
                      href={href}
                      className={cn(
                        "-ml-px block border-l-2 py-1.5 pl-4 text-[0.875rem] transition-colors",
                        active
                          ? "border-brand-500 font-semibold text-brand-600 dark:text-brand-400"
                          : "border-transparent text-fg-muted hover:border-border-strong hover:text-fg",
                      )}
                    >
                      {dict.docs.articles[slug].title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl border border-border-base bg-bg-subtle p-5">
        <p className="text-[0.9rem] font-semibold text-fg">{dict.docs.helpTitle}</p>
        <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg-muted">
          {dict.docs.helpDescription}
        </p>
        <ExternalButtonLink
          href={whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          variant="whatsapp"
          size="sm"
          className="mt-4 w-full"
        >
          <IconWhatsapp className="h-4 w-4" />
          {dict.common.whatsappCta}
        </ExternalButtonLink>
      </div>
    </aside>
  );
}
