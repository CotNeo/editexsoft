import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Capabilities } from "@/components/brutal/capabilities";
import { Closing } from "@/components/brutal/closing";
import { Flow } from "@/components/brutal/flow";
import { Hero } from "@/components/brutal/hero";
import { Metrics } from "@/components/brutal/metrics";
import { Network } from "@/components/brutal/network";
import { Support } from "@/components/brutal/support";
import { Tariff } from "@/components/brutal/tariff-section";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { faqJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "", dict.meta.defaultTitle, dict.meta.description);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const faqItems = dict.faqPage.categories.flatMap((category) => category.items).slice(0, 6);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Flow dict={dict} />
      <Capabilities dict={dict} />
      <Metrics dict={dict} />
      <Network locale={locale} dict={dict} />
      <Tariff locale={locale} dict={dict} />
      <Support locale={locale} dict={dict} />
      <Closing locale={locale} dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
    </>
  );
}
