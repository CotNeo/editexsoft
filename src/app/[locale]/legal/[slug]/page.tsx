import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { DocSections } from "@/components/ui/doc-blocks";
import { IconChevronRight } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import { legalSlugs, type LegalSlug } from "@/i18n/types";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

const isLegalSlug = (value: string): value is LegalSlug =>
  (legalSlugs as readonly string[]).includes(value);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isLegalSlug(slug)) return {};
  const dict = getDictionary(locale);
  const page = dict.legal.pages[slug];
  return pageMeta(locale, `/legal/${slug}`, page.title, page.description);
}

export default async function LegalPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isLegalSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const page = dict.legal.pages[slug];

  return (
    <Section top="none" className="pt-8 sm:pt-12">
      <Container className="max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-fg-subtle"
        >
          <Link href={`/${locale}`} className="hover:text-fg">
            {dict.meta.siteName}
          </Link>
          <IconChevronRight className="h-3 w-3" />
          <span className="text-fg">{dict.legal.title}</span>
        </nav>

        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight text-fg sm:text-[2.5rem]">
          {page.title}
        </h1>
        <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{page.description}</p>
        <p className="mt-4 text-[0.8125rem] text-fg-subtle">
          {dict.legal.updatedLabel}: {dict.legal.updatedAt}
        </p>

        <div className="mt-8">
          <DocSections sections={page.sections} />
        </div>

        <div className="mt-14 flex flex-wrap gap-2 border-t border-border-base pt-8">
          {legalSlugs
            .filter((item) => item !== slug)
            .map((item) => (
              <Link
                key={item}
                href={`/${locale}/legal/${item}`}
                className="rounded-full border border-border-base bg-surface px-4 py-2 text-[0.8125rem] font-medium text-fg-muted transition-colors hover:border-brand-400 hover:text-fg"
              >
                {dict.legal.pages[item].title}
              </Link>
            ))}
        </div>
      </Container>
    </Section>
  );
}
