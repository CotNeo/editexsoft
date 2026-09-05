import { AppPreview } from "@/components/sections/app-preview";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconCheck, IconDownload, IconSparkle } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero } = dict.home;

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
      {/* Arka plan efektleri */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-[0.55]" />
        <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-500)_28%,transparent),transparent)] blur-3xl motion-safe:animate-aurora" />
        <div className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent-500)_24%,transparent),transparent)] blur-3xl motion-safe:animate-aurora" />
        <div className="absolute bottom-[-8rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal-500)_18%,transparent),transparent)] blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-base bg-surface/80 px-3.5 py-1.5 text-[0.72rem] font-medium text-fg-muted sm:px-4 sm:text-[0.78rem] shadow-[0_6px_20px_-14px_rgba(10,16,40,0.6)] backdrop-blur">
              <IconSparkle className="h-3.5 w-3.5 text-brand-500" />
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-fg sm:text-[3.25rem] lg:text-[3.9rem]">
              {hero.titleLine1}{" "}
              <span className="text-gradient">{hero.titleGradient}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-fg-muted sm:text-[1.075rem]">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <ButtonLink href={`/${locale}/download`} size="lg" className="w-full sm:w-auto">
                <IconDownload className="h-[1.15rem] w-[1.15rem]" />
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/docs`}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
                <IconArrowRight className="h-[1.05rem] w-[1.05rem]" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
              {hero.perks.map((perk) => (
                <li
                  key={perk}
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] text-fg-muted"
                >
                  <IconCheck className="h-3.5 w-3.5 text-brand-500" />
                  {perk}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14 sm:mt-16">
          <div className="relative mx-auto max-w-5xl">
            <div
              aria-hidden
              className="absolute inset-x-8 -top-6 bottom-8 -z-10 rounded-[2rem] bg-[linear-gradient(120deg,var(--brand-500),var(--accent-500))] opacity-20 blur-3xl"
            />
            <AppPreview locale={locale} title={hero.appWindowTitle} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
