import { PricingCards } from "@/components/sections/pricing-cards";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function PricingTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const teaser = dict.home.pricingTeaser;

  return (
    <Section className="bg-bg-subtle" id="pricing">
      <Container>
        <SectionHeading
          eyebrow={teaser.eyebrow}
          title={teaser.title}
          description={teaser.description}
        />
        <Reveal delay={100} className="mt-12">
          <PricingCards
            locale={locale}
            pricing={dict.pricingPage}
            popularLabel={dict.common.popular}
            appUrl={siteConfig.appUrl}
          />
        </Reveal>
        <Reveal delay={140} className="mt-10 flex justify-center">
          <ButtonLink href={`/${locale}/pricing`} variant="outline" size="lg">
            {teaser.cta}
            <IconArrowRight className="h-[1.05rem] w-[1.05rem]" />
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
