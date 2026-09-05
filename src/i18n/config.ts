export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

/** hreflang / <html lang> değerleri */
export const localeTags: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** "/tr/pricing" -> "/pricing" */
export const stripLocale = (pathname: string): string => {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
};

/** "/pricing" + "en" -> "/en/pricing" */
export const localizePath = (pathname: string, locale: Locale): string => {
  const clean = stripLocale(pathname);
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
};
