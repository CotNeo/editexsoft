import { en } from "@/i18n/dictionaries/en";
import { tr, type Dictionary } from "@/i18n/dictionaries/tr";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
export * from "@/i18n/config";
