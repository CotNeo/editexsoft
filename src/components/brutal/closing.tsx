import { ArrowAnchor, ArrowLink, Mono } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Closing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.landing.closing;

  return (
    <section className="shell pb-24 pt-8 sm:pb-32">
      <div className="flex items-start justify-between gap-6 border-t border-ink pt-4">
        <Mono className="text-ink-40">
          <span className="text-accent">{t.index}</span> — {t.label}
        </Mono>
      </div>

      <div className="relative mt-14 lg:mt-20">
        <Reveal
          as="h2"
          className="reveal-lines font-display font-black uppercase leading-[0.84] tracking-[-0.05em] text-[clamp(2.25rem,7.8vw,7rem)]"
        >
          <span className="line">
            <span>{t.line1}</span>
          </span>
          <span className="line lg:pl-[10%]">
            <span style={{ "--reveal-delay": "95ms" } as React.CSSProperties}>
              {t.line2}
              <span className="text-accent">.</span>
            </span>
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
          <Reveal delay={220} className="col-span-12 sm:col-span-7 lg:col-span-4">
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-60">
              {t.description}
            </p>
          </Reveal>

          <Reveal
            delay={300}
            className="col-span-12 flex flex-col items-start gap-6 sm:col-span-5 lg:col-start-7 lg:col-span-6 lg:flex-row lg:items-center lg:gap-12"
          >
            <ArrowLink href={`/${locale}/download`} size="lg">
              {t.primary}
            </ArrowLink>
            <ArrowAnchor
              href={whatsappLink(dict.common.whatsappMessage)}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t.secondary}
            </ArrowAnchor>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
