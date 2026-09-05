import { ArrowLink, Mono, Node, SectionHead } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function Network({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.landing.network;
  const categories = dict.integrationsPage.categories;
  const total = categories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <section className="shell py-20 sm:py-24 lg:py-32">
      <SectionHead
        index={t.index}
        label={t.label}
        title={t.titleLines}
        note={`${total} ${dict.common.all.toLocaleUpperCase(locale)}`}
        description={t.description}
      />

      <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
        {categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 70}>
            <div className="flex items-baseline justify-between gap-3 border-b border-ink pb-2.5">
              <Mono className="text-ink">{category.title}</Mono>
              <Mono className="text-ink-40">
                {String(category.items.length).padStart(2, "0")}
              </Mono>
            </div>
            <ul>
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 border-b border-rule py-2.5"
                >
                  <span
                    className={cn(
                      "text-[0.8125rem] font-semibold uppercase tracking-[-0.01em]",
                      item.soon ? "text-ink-40" : "text-ink",
                    )}
                  >
                    {item.name}
                  </span>
                  <Node live={!item.soon} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12 flex items-center gap-6">
        <ArrowLink href={`/${locale}/integrations`} size="lg">
          {t.cta}
        </ArrowLink>
        <span aria-hidden className="h-px flex-1 bg-rule" />
      </Reveal>
    </section>
  );
}
