import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconArrowRight, iconMap, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Support({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { support } = dict.home;
  const wa = whatsappLink(dict.common.whatsappMessage);
  const hrefs = [wa, wa, `/${locale}/docs`];

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={support.eyebrow}
          title={support.title}
          description={support.description}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {support.cards.map((card, index) => {
            const Icon = iconMap[card.icon as IconName] ?? iconMap.book;
            const href = hrefs[index];
            const external = href.startsWith("http");
            const content = (
              <>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] text-brand-600 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-semibold text-fg">{card.title}</h3>
                <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-fg-muted">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-brand-400">
                  {card.action}
                  <IconArrowRight className="h-4 w-4" />
                </span>
              </>
            );

            const className =
              "group flex h-full flex-col rounded-2xl border border-border-base bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-30px_rgba(30,60,180,0.5)]";

            return (
              <Reveal key={card.title} delay={index * 80} className="h-full">
                {external ? (
                  <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={href} className={className}>
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
