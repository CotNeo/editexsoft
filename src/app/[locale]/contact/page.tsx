import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp,
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
  return pageMeta(locale, "/contact", dict.contactPage.title, dict.contactPage.description);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.contactPage;

  const icons = { whatsapp: IconWhatsapp, email: IconMail, phone: IconPhone };
  const hrefs: Record<string, string> = {
    whatsapp: whatsappLink(dict.common.whatsappMessage),
    email: `mailto:${siteConfig.contact.email}`,
    phone: `tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, "")}`,
  };
  const values: Record<string, string> = {
    whatsapp: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    phone: siteConfig.contact.phoneDisplay,
  };

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <Section top="compact">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {page.channels.map((channel, index) => {
              const Icon = icons[channel.id as keyof typeof icons] ?? IconMail;
              return (
                <Reveal key={channel.id} delay={index * 70} className="h-full">
                  <a
                    href={hrefs[channel.id]}
                    target={channel.id === "whatsapp" ? "_blank" : undefined}
                    rel={channel.id === "whatsapp" ? "noreferrer noopener" : undefined}
                    className="group flex h-full flex-col rounded-2xl border border-border-base bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-32px_rgba(30,60,180,0.5)]"
                  >
                    <span
                      className={
                        channel.id === "whatsapp"
                          ? "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,#25D366_16%,transparent)] text-[#1da851]"
                          : "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] text-brand-600 dark:text-brand-400"
                      }
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-[1.0625rem] font-semibold text-fg">{channel.title}</h2>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-fg-muted">
                      {channel.description}
                    </p>
                    <p className="mt-3 text-[0.9rem] font-semibold text-fg">
                      {values[channel.id]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-brand-400">
                      {channel.action}
                      <IconArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <Reveal delay={60}>
              <ContactForm locale={locale} form={page.form} />
            </Reveal>

            <Reveal delay={120} className="space-y-6">
              <div className="rounded-2xl border border-border-base bg-bg-subtle p-6 sm:p-7">
                <h2 className="text-lg font-bold text-fg">{page.infoTitle}</h2>
                <dl className="mt-5 space-y-5">
                  <div className="flex gap-3">
                    <IconClock className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-brand-500" />
                    <div>
                      <dt className="text-[0.8125rem] font-semibold text-fg">
                        {page.workingHoursLabel}
                      </dt>
                      <dd className="mt-0.5 text-[0.875rem] text-fg-muted">
                        {siteConfig.contact.workingHours[locale]}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <IconMail className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-brand-500" />
                    <div>
                      <dt className="text-[0.8125rem] font-semibold text-fg">E-posta</dt>
                      <dd className="mt-0.5 space-y-0.5 text-[0.875rem] text-fg-muted">
                        <a
                          href={`mailto:${siteConfig.contact.salesEmail}`}
                          className="block hover:text-brand-500"
                        >
                          {siteConfig.contact.salesEmail}
                        </a>
                        <a
                          href={`mailto:${siteConfig.contact.supportEmail}`}
                          className="block hover:text-brand-500"
                        >
                          {siteConfig.contact.supportEmail}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <IconPin className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-brand-500" />
                    <div>
                      <dt className="text-[0.8125rem] font-semibold text-fg">
                        {page.addressLabel}
                      </dt>
                      <dd className="mt-0.5 text-[0.875rem] leading-relaxed text-fg-muted">
                        {siteConfig.contact.address[locale]}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <a
                href={whatsappLink(dict.common.whatsappMessage)}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-2xl border border-[color-mix(in_oklab,#25D366_30%,var(--border))] bg-[color-mix(in_oklab,#25D366_8%,transparent)] p-6 transition-colors hover:bg-[color-mix(in_oklab,#25D366_14%,transparent)]"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                  <IconWhatsapp className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-[0.9375rem] font-bold text-fg">
                    {dict.common.whatsappSupport}
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem] text-fg-muted">
                    {dict.home.support.cards[0].description}
                  </span>
                </span>
                <IconArrowRight className="ml-auto h-5 w-5 shrink-0 text-fg-subtle transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
