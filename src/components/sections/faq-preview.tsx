import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function FaqPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const section = dict.home.faqSection;
  const items = dict.faqPage.categories.flatMap((category) => category.items).slice(0, 6);

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow={section.eyebrow}
            title={section.title}
            description={dict.faqPage.description}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <ButtonLink href={`/${locale}/faq`} variant="outline" className="mt-2">
              {section.cta}
              <IconArrowRight className="h-4 w-4" />
            </ButtonLink>
          </SectionHeading>

          <Reveal delay={100}>
            <Accordion items={items} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
