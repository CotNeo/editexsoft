import { ArrowAnchor, Mono } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Support({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.landing.support;

  const meta = [
    { k: t.meta.channel, v: t.meta.channelValue },
    { k: t.meta.hours, v: siteConfig.contact.workingHours[locale].toLocaleUpperCase(locale) },
    { k: t.meta.response, v: t.meta.responseValue },
  ];

  return (
    <section className="shell py-20 sm:py-24 lg:py-32">
      <div className="flex items-start justify-between gap-6 border-t border-ink pt-4">
        <Mono className="text-ink-40">
          <span className="text-accent">{t.index}</span> — {t.label}
        </Mono>
        <Mono className="text-ink-40">{siteConfig.contact.phoneDisplay}</Mono>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-16">
        <Reveal
          as="h2"
          className="reveal-lines col-span-12 font-display text-[clamp(1.75rem,5vw,3.75rem)] font-black uppercase leading-[0.86] tracking-[-0.045em] lg:col-span-7"
        >
          <span className="line">
            <span>{t.title1}</span>
          </span>
          <span className="line">
            <span style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
              {t.title2}
              <span className="text-accent">.</span>
            </span>
          </span>
        </Reveal>

        <Reveal delay={200} className="col-span-12 sm:col-span-8 lg:col-start-9 lg:col-span-4">
          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-60">{t.description}</p>
          <dl className="mt-8 border-t border-ink">
            {meta.map((row) => (
              <div
                key={row.k}
                className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
              >
                <dt className="mono-label text-ink-40">{row.k}</dt>
                <dd className="mono-label max-w-[60%] text-right text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ArrowAnchor
              href={whatsappLink(dict.common.whatsappMessage)}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
            >
              {t.cta}
            </ArrowAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
