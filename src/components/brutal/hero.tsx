import { ArrowLink, Mono } from "@/components/brutal/primitives";
import { Ticker } from "@/components/brutal/ticker";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.landing.hero;
  const meta = dict.landing.meta;
  const lines = [t.line1, t.line2, t.line3, t.line4];

  const specs = [
    { k: t.specs.version, v: `V${siteConfig.download.version}` },
    { k: t.specs.platform, v: t.specs.platformValue },
    { k: t.specs.setup, v: t.specs.setupValue },
    { k: t.specs.trial, v: t.specs.trialValue },
  ];

  const channels = [
    ...dict.integrationsPage.categories[0].items.map((i) => i.name.toLocaleUpperCase(locale)),
    ...dict.integrationsPage.categories[2].items.map((i) => i.name.toLocaleUpperCase(locale)),
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Künye şeridi */}
      <div className="shell">
        <div className="flex items-center justify-between gap-4 border-b border-rule py-3">
          <Mono className="text-ink">
            {meta.brand} <span className="text-ink-40">/ {meta.sub}</span>
          </Mono>
          <Mono className="hidden text-ink-40 md:block">{meta.est}</Mono>
          <Mono className="text-ink-40">{meta.platform}</Mono>
        </div>
      </div>

      <div className="shell relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
        {/* Manşetin üzerine binen hayalet numara */}
        <span
          aria-hidden
          className="text-stroke pointer-events-none absolute right-0 top-2 select-none font-display text-[17vw] font-black leading-[0.72] tracking-[-0.06em] lg:top-6"
        >
          {t.index}
        </span>

        <Reveal
          as="h1"
          className="reveal-lines relative font-display font-black uppercase leading-[0.84] tracking-[-0.05em] text-[clamp(2.25rem,7.4vw,6.5rem)]"
        >
          {lines.map((line, i) => (
            <span
              key={line}
              className={`line ${i === 2 ? "lg:pl-[14%]" : ""} ${i === 3 ? "lg:pl-[6%]" : ""}`}
            >
              <span style={{ "--reveal-delay": `${i * 95}ms` } as React.CSSProperties}>
                {line}
                {i === lines.length - 1 ? <span className="text-accent">.</span> : null}
              </span>
            </span>
          ))}
        </Reveal>

        {/* Asimetrik alt blok: solda künye tablosu, sağda giriş metni */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-10">
          <Reveal delay={280} className="col-span-12 sm:col-span-7 lg:col-span-4">
            <dl className="border-t border-ink">
              {specs.map((spec) => (
                <div
                  key={spec.k}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
                >
                  <dt className="mono-label text-ink-40">{spec.k}</dt>
                  <dd className="mono-label text-ink">{spec.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            delay={360}
            className="col-span-12 sm:col-span-10 lg:col-start-7 lg:col-span-5 lg:-mt-16"
          >
            <p className="max-w-md text-[1rem] leading-[1.6] text-ink-70 sm:text-[1.0625rem]">
              {t.lede}
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10">
              <ArrowLink href={`/${locale}/download`} size="lg">
                {t.primary}
              </ArrowLink>
              <ArrowLink href={`/${locale}/docs`}>{t.secondary}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>

      <Ticker label={t.tickerLabel} items={channels} />
    </section>
  );
}
