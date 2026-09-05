import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/i18n";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const { how } = dict.home;

  return (
    <Section className="bg-bg-subtle">
      <Container>
        <SectionHeading eyebrow={how.eyebrow} title={how.title} description={how.description} />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,var(--border-strong)_15%,var(--border-strong)_85%,transparent)] lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {how.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} as="li" className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-base bg-surface font-display text-lg font-bold text-brand-600 shadow-[0_10px_24px_-16px_rgba(30,60,180,0.6)] dark:text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.0625rem] font-semibold text-fg lg:mt-5">{step.title}</h3>
                </div>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
