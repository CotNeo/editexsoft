import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/page-hero";
import { ExternalButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
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
  return pageMeta(
    locale,
    "/integrations",
    dict.integrationsPage.title,
    dict.integrationsPage.description,
  );
}

export default async function IntegrationsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.integrationsPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description}>
        <nav className="flex flex-wrap items-center justify-center gap-2">
          {page.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border-base bg-surface px-4 py-2 text-[0.8125rem] font-medium text-fg-muted transition-colors hover:border-brand-400 hover:text-fg"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section top="compact">
        <Container>
          <div className="space-y-14">
            {page.categories.map((category) => (
              <Reveal key={category.id} id={category.id} as="section" className="scroll-mt-28">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border-base pb-5">
                  <div>
                    <h2 className="text-2xl font-bold text-fg">{category.title}</h2>
                    <p className="mt-1.5 text-[0.9rem] text-fg-muted">{category.description}</p>
                  </div>
                  <span className="rounded-full bg-bg-muted px-3 py-1 text-[0.75rem] font-semibold text-fg-subtle">
                    {category.items.length}
                  </span>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="group relative flex items-center gap-3 rounded-xl border border-border-base bg-surface px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_18px_36px_-26px_rgba(30,60,180,0.6)]"
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] text-[0.8125rem] font-bold text-white"
                      >
                        {item.name.charAt(0)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.875rem] font-semibold text-fg">
                          {item.name}
                        </span>
                        {item.soon ? (
                          <span className="mt-0.5 inline-block rounded bg-[color-mix(in_oklab,var(--warning)_16%,transparent)] px-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--warning)]">
                            {dict.common.soon}
                          </span>
                        ) : (
                          <span className="mt-0.5 inline-flex items-center gap-1 text-[0.7rem] font-medium text-[var(--success)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                            {dict.common.active}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={80}
            className="mt-16 overflow-hidden rounded-2xl border border-border-base bg-[linear-gradient(120deg,var(--bg-subtle),var(--surface))] p-8 text-center sm:p-12"
          >
            <h2 className="text-2xl font-bold text-fg">{page.requestTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-fg-muted">
              {page.requestDescription}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ExternalButtonLink
                href={whatsappLink(dict.common.whatsappMessage)}
                target="_blank"
                rel="noreferrer noopener"
                variant="whatsapp"
                size="lg"
              >
                <IconWhatsapp className="h-[1.15rem] w-[1.15rem]" />
                {dict.common.whatsappCta}
              </ExternalButtonLink>
              <a
                href={`/${locale}/contact`}
                className="inline-flex h-[3.25rem] items-center gap-2 rounded-xl border border-border-strong bg-surface px-7 text-[0.9375rem] font-semibold text-fg transition-colors hover:border-brand-400"
              >
                {page.requestCta}
                <IconArrowRight className="h-[1.05rem] w-[1.05rem]" />
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
