import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DocsSidebar } from "@/components/sections/docs-sidebar";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconClock } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { whatsappLink } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "/docs", dict.docs.title, dict.docs.description);
}

export default async function DocsIndexPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.docs.eyebrow} title={dict.docs.title} description={dict.docs.description} />

      <Section top="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
            <DocsSidebar
              locale={locale}
              dict={dict}
              whatsapp={whatsappLink(dict.common.whatsappMessage)}
            />

            <div className="space-y-12">
              {dict.docs.categories.map((category, categoryIndex) => (
                <Reveal key={category.title} delay={categoryIndex * 60}>
                  <h2 className="text-lg font-bold text-fg">{category.title}</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {category.slugs.map((slug) => {
                      const article = dict.docs.articles[slug];
                      return (
                        <Link
                          key={slug}
                          href={`/${locale}/docs/${slug}`}
                          className="group flex h-full flex-col rounded-2xl border border-border-base bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-32px_rgba(30,60,180,0.55)]"
                        >
                          <h3 className="text-[1.0625rem] font-semibold text-fg">
                            {article.title}
                          </h3>
                          <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-fg-muted">
                            {article.description}
                          </p>
                          <div className="mt-5 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-[0.75rem] text-fg-subtle">
                              <IconClock className="h-3.5 w-3.5" />
                              {article.readingTime} {dict.common.minutes}
                            </span>
                            <IconArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
