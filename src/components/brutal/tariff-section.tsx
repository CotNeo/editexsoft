import { SectionHead } from "@/components/brutal/primitives";
import { TariffTable } from "@/components/brutal/tariff";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function Tariff({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.landing.tariff;

  return (
    <section className="shell py-20 sm:py-24 lg:py-32">
      <SectionHead
        index={t.index}
        label={t.label}
        title={t.titleLines}
        note={t.note}
        description={dict.home.pricingTeaser.description}
      />
      <Reveal delay={120} className="mt-16 lg:mt-24">
        <TariffTable locale={locale} dict={dict} appUrl={siteConfig.appUrl} />
      </Reveal>
    </section>
  );
}
