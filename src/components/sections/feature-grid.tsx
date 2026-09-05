import { Container } from "@/components/ui/container";
import { iconMap, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/i18n";

export function FeatureGrid({ dict }: { dict: Dictionary }) {
  const { features } = dict.home;

  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.items.map((item, index) => {
            const Icon = iconMap[item.icon as IconName] ?? iconMap.sync;
            return (
              <Reveal
                key={item.title}
                delay={(index % 4) * 70}
                className="group relative h-full overflow-hidden rounded-2xl border border-border-base bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-30px_rgba(30,60,180,0.55)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand-400),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] text-brand-600 transition-colors group-hover:bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] group-hover:text-white dark:text-brand-400 dark:group-hover:text-white">
                  <Icon className="h-[1.35rem] w-[1.35rem]" />
                </span>
                <h3 className="mt-4 text-[1.0625rem] font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
