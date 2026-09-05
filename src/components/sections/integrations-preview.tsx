import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function IntegrationsPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const section = dict.home.integrationsSection;

  return (
    <Section id="integrations">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.integrationsPage.categories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={(index % 3) * 80}
              className="h-full rounded-2xl border border-border-base bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[1.0625rem] font-semibold text-fg">{category.title}</h3>
                <span className="rounded-full bg-bg-muted px-2 py-0.5 text-[0.7rem] font-semibold text-fg-subtle">
                  {category.items.length}
                </span>
              </div>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg-muted">
                {category.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {category.items.slice(0, 6).map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-base bg-bg-subtle px-2.5 py-1 text-[0.75rem] font-medium text-fg-muted"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-4 w-4 items-center justify-center rounded bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] text-[0.55rem] font-bold text-white"
                    >
                      {item.name.charAt(0)}
                    </span>
                    {item.name}
                  </li>
                ))}
                {category.items.length > 6 ? (
                  <li className="inline-flex items-center rounded-lg border border-dashed border-border-strong px-2.5 py-1 text-[0.75rem] font-semibold text-fg-subtle">
                    +{category.items.length - 6}
                  </li>
                ) : null}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <ButtonLink href={`/${locale}/integrations`} variant="outline" size="lg">
            {section.cta}
            <IconArrowRight className="h-[1.05rem] w-[1.05rem]" />
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
