import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { IconCheck, IconClose } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { faqJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "/pricing", dict.pricingPage.title, dict.pricingPage.description);
}

function Cell({ value }: { value: string }) {
  if (value === "yes")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--success)_15%,transparent)] text-[var(--success)]">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bg-muted text-fg-subtle">
        <IconClose className="h-3 w-3" />
      </span>
    );
  return <span className="text-[0.875rem] font-medium text-fg">{value}</span>;
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.pricingPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <Section top="compact">
        <Container>
          <PricingCards
            locale={locale}
            pricing={page}
            popularLabel={dict.common.popular}
            appUrl={siteConfig.appUrl}
          />
        </Container>
      </Section>

      <Section top="none" className="bg-bg-subtle">
        <Container>
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-fg sm:text-3xl">
              {page.comparisonTitle}
            </h2>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-border-base bg-surface">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border-base bg-bg-subtle">
                    <th className="px-5 py-4 text-[0.8125rem] font-semibold uppercase tracking-wide text-fg-subtle">
                      &nbsp;
                    </th>
                    {page.plans.map((plan) => (
                      <th
                        key={plan.id}
                        className="px-5 py-4 text-center text-[0.9375rem] font-bold text-fg"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.map((group) => (
                    <Fragment key={group.group}>
                      <tr className="bg-bg-muted/60">
                        <td
                          colSpan={4}
                          className="px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-fg-subtle"
                        >
                          {group.group}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.label} className="border-b border-border-base last:border-0">
                          <td className="px-5 py-3.5 text-[0.9rem] text-fg-muted">{row.label}</td>
                          {row.values.map((value, index) => (
                            <td key={index} className="px-5 py-3.5 text-center">
                              <Cell value={value} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section top="none">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-fg sm:text-3xl">{page.faqTitle}</h2>
            <Accordion items={page.faq} className="mt-8" defaultOpen={0} />
          </Reveal>
        </Container>
      </Section>

      <CtaBand locale={locale} dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }}
      />
    </>
  );
}
