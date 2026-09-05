import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DocsSidebar } from "@/components/sections/docs-sidebar";
import { Container } from "@/components/ui/container";
import { DocSections, slugify } from "@/components/ui/doc-blocks";
import { IconArrowRight, IconChevronRight, IconClock } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { whatsappLink } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { docSlugs, type DocSlug } from "@/i18n/types";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return docSlugs.map((slug) => ({ slug }));
}

const isDocSlug = (value: string): value is DocSlug =>
  (docSlugs as readonly string[]).includes(value);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isDocSlug(slug)) return {};
  const dict = getDictionary(locale);
  const article = dict.docs.articles[slug];
  return pageMeta(locale, `/docs/${slug}`, article.title, article.description);
}

export default async function DocArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isDocSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const article = dict.docs.articles[slug];
  const index = docSlugs.indexOf(slug);
  const previous = index > 0 ? docSlugs[index - 1] : null;
  const next = index < docSlugs.length - 1 ? docSlugs[index + 1] : null;

  return (
    <Section top="none" className="pt-8 sm:pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
          <DocsSidebar
            locale={locale}
            dict={dict}
            whatsapp={whatsappLink(dict.common.whatsappMessage)}
          />

          <article className="min-w-0">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-fg-subtle"
            >
              <Link href={`/${locale}`} className="hover:text-fg">
                {dict.meta.siteName}
              </Link>
              <IconChevronRight className="h-3 w-3" />
              <Link href={`/${locale}/docs`} className="hover:text-fg">
                {dict.docs.eyebrow}
              </Link>
              <IconChevronRight className="h-3 w-3" />
              <span className="text-fg">{article.title}</span>
            </nav>

            <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight text-fg sm:text-[2.5rem]">
              {article.title}
            </h1>
            <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{article.description}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] text-fg-subtle">
              <IconClock className="h-3.5 w-3.5" />
              {article.readingTime} {dict.common.minutes}
            </p>

            <div className="mt-8 rounded-2xl border border-border-base bg-bg-subtle p-5">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-fg-subtle">
                {dict.common.onThisPage}
              </p>
              <ul className="mt-3 space-y-1.5">
                {article.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text-[0.875rem] text-fg-muted transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <DocSections sections={article.sections} />
            </div>

            <nav className="mt-14 grid gap-4 border-t border-border-base pt-8 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/${locale}/docs/${previous}`}
                  className="group rounded-xl border border-border-base bg-surface p-4 transition-colors hover:border-brand-300"
                >
                  <span className="text-[0.75rem] font-semibold uppercase tracking-wide text-fg-subtle">
                    {dict.common.previous}
                  </span>
                  <span className="mt-1 block text-[0.9375rem] font-semibold text-fg">
                    {dict.docs.articles[previous].title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/${locale}/docs/${next}`}
                  className="group rounded-xl border border-border-base bg-surface p-4 text-right transition-colors hover:border-brand-300 sm:col-start-2"
                >
                  <span className="text-[0.75rem] font-semibold uppercase tracking-wide text-fg-subtle">
                    {dict.common.next}
                  </span>
                  <span className="mt-1 flex items-center justify-end gap-1.5 text-[0.9375rem] font-semibold text-fg">
                    {dict.docs.articles[next].title}
                    <IconArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ) : null}
            </nav>
          </article>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: dict.meta.siteName, url: `/${locale}` },
              { name: dict.docs.eyebrow, url: `/${locale}/docs` },
              { name: article.title, url: `/${locale}/docs/${slug}` },
            ]),
          ),
        }}
      />
    </Section>
  );
}
