import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/page-hero";
import { ExternalButtonLink, buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CopyButton } from "@/components/ui/copy-button";
import {
  IconAlert,
  IconArrowRight,
  IconBook,
  IconDownload,
  IconWhatsapp,
  IconWindows,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig, whatsappLink } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMeta(locale, "/download", dict.downloadPage.title, dict.downloadPage.description);
}

export default async function DownloadPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.downloadPage;
  const { download } = siteConfig;
  const configured = download.url.startsWith("http") || download.url.startsWith("/downloads/");

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description}>
        <div className="flex flex-col items-center gap-4">
          <a
            href={download.url}
            download
            className={buttonClass({ size: "lg", className: "px-8 text-base" })}
          >
            <IconWindows className="h-5 w-5" />
            {page.downloadCta}
            <IconDownload className="h-[1.15rem] w-[1.15rem]" />
          </a>

          <dl className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8125rem] text-fg-muted">
            <div className="flex items-center gap-1.5">
              <dt className="text-fg-subtle">{page.versionLabel}:</dt>
              <dd className="font-semibold text-fg">v{download.version}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt className="text-fg-subtle">{page.releaseLabel}:</dt>
              <dd className="font-semibold text-fg">{download.releaseDate}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt className="text-fg-subtle">{page.sizeLabel}:</dt>
              <dd className="font-semibold text-fg">{download.sizeMb} MB</dd>
            </div>
          </dl>
        </div>
      </PageHero>

      <Section top="compact">
        <Container>
          {!configured ? (
            <Reveal className="mb-10 flex items-start gap-3 rounded-xl border border-[color-mix(in_oklab,var(--warning)_38%,var(--border))] bg-[color-mix(in_oklab,var(--warning)_8%,transparent)] p-4">
              <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-[var(--warning)]" />
              <p className="text-[0.875rem] leading-relaxed text-fg-muted">{page.pendingNotice}</p>
            </Reveal>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <Reveal className="rounded-2xl border border-border-base bg-surface p-7 sm:p-8">
              <h2 className="text-xl font-bold text-fg">{page.requirementsTitle}</h2>
              <dl className="mt-6 divide-y divide-[var(--border)]">
                {page.requirements.map((requirement) => (
                  <div
                    key={requirement.label}
                    className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4"
                  >
                    <dt className="text-[0.8125rem] font-semibold text-fg">{requirement.label}</dt>
                    <dd className="text-[0.875rem] leading-relaxed text-fg-muted">
                      {requirement.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={80} className="rounded-2xl border border-border-base bg-surface p-7 sm:p-8">
                <h2 className="text-xl font-bold text-fg">{page.nextStepsTitle}</h2>
                <ol className="mt-6 space-y-4">
                  {page.nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-3.5">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] text-[0.75rem] font-bold text-brand-600 dark:text-brand-400">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-[0.875rem] leading-relaxed text-fg-muted">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 flex flex-col gap-3 border-t border-border-base pt-6 sm:flex-row">
                  <Link
                    href={`/${locale}/docs/installation`}
                    className={buttonClass({ variant: "outline", className: "flex-1" })}
                  >
                    <IconBook className="h-4 w-4" />
                    {page.guideCta}
                  </Link>
                  <ExternalButtonLink
                    href={whatsappLink(dict.common.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="whatsapp"
                    className="flex-1"
                  >
                    <IconWhatsapp className="h-4 w-4" />
                    {page.supportCta}
                  </ExternalButtonLink>
                </div>
              </Reveal>

              {download.sha256 ? (
                <Reveal delay={140} className="rounded-2xl border border-border-base bg-bg-subtle p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[0.9375rem] font-bold text-fg">{page.checksumLabel}</h2>
                    <CopyButton
                      value={download.sha256}
                      copyLabel={dict.common.copy}
                      copiedLabel={dict.common.copied}
                    />
                  </div>
                  <p className="mt-3 break-all font-mono text-[0.75rem] text-fg-muted">
                    {download.sha256}
                  </p>
                  <p className="mt-4 text-[0.8125rem] leading-relaxed text-fg-muted">
                    {page.checksumHelp}
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-border-base bg-surface px-3 py-2.5">
                    <code className="font-mono text-[0.75rem] text-fg">{page.checksumCommand}</code>
                  </pre>
                </Reveal>
              ) : null}
            </div>
          </div>

          <Reveal delay={80} id="changelog" className="mt-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-fg">{page.changelogTitle}</h2>
            <div className="mt-8 space-y-4">
              {page.changelog.map((release) => (
                <div
                  key={release.version}
                  className="grid gap-4 rounded-2xl border border-border-base bg-surface p-6 sm:grid-cols-[10rem_1fr] sm:p-7"
                >
                  <div>
                    <p className="font-display text-lg font-bold text-fg">v{release.version}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-fg-subtle">{release.date}</p>
                  </div>
                  <ul className="space-y-2">
                    {release.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span className="text-[0.875rem] leading-relaxed text-fg-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12 flex justify-center">
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-600 hover:underline dark:text-brand-400"
            >
              {dict.home.pricingTeaser.cta}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
