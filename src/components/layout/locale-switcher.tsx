"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShort, localizePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <div
      className={cn("flex items-center font-mono text-[0.7rem] tracking-[0.16em]", className)}
      aria-label={label}
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center">
          {index > 0 ? (
            <span aria-hidden className="px-1.5 text-ink-20">
              /
            </span>
          ) : null}
          <Link
            href={localizePath(pathname, item)}
            hrefLang={item}
            aria-current={item === locale ? "true" : undefined}
            className={cn(
              "relative py-1 font-semibold transition-colors",
              item === locale
                ? "text-ink after:absolute after:-bottom-0.5 after:left-0 after:block after:h-[2px] after:w-full after:bg-accent after:content-['']"
                : "text-ink-40 hover:text-ink",
            )}
          >
            {localeShort[item]}
          </Link>
        </span>
      ))}
    </div>
  );
}
