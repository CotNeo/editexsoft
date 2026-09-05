import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { IconCheck, iconMap, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "/features", dict.featuresPage.title, dict.featuresPage.description);
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.featuresPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <Section top="compact">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {page.groups.map((group, index) => {
              const Icon = iconMap[group.icon as IconName] ?? iconMap.sync;
              return (
                <Reveal
                  key={group.title}
                  delay={(index % 2) * 80}
                  className="h-full rounded-2xl border border-border-base bg-surface p-7 transition-colors hover:border-brand-300 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] text-white shadow-[0_14px_30px_-16px_var(--brand-600)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-fg">{group.title}</h2>
                      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-fg-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-border-base pt-6">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span className="text-[0.9rem] leading-snug text-fg-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={100}
            className="mt-8 overflow-hidden rounded-2xl border border-border-base bg-bg-subtle p-8 sm:p-10"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-2xl font-bold text-fg">{page.highlight.title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {page.highlight.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {page.highlight.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border-base bg-surface px-4 py-5 text-center"
                  >
                    <p className="font-display text-[1.5rem] font-extrabold text-gradient">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[0.75rem] leading-snug text-fg-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
