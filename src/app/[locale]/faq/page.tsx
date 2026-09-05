import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { faqJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "/faq", dict.faqPage.title, dict.faqPage.description);
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.faqPage;
  const all = page.categories.flatMap((category) => category.items);

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <Section top="compact">
        <Container className="max-w-4xl">
          <div className="space-y-12">
            {page.categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 60}>
                <h2 className="text-xl font-bold text-fg">{category.title}</h2>
                <Accordion items={category.items} className="mt-4" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(all)) }}
      />
    </>
  );
}
