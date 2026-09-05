import { SectionHead } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const t = dict.landing.capabilities;
  const items = dict.home.features.items;

  return (
    <section className="shell py-20 sm:py-24 lg:py-32">
      <SectionHead
        index={t.index}
        label={t.label}
        title={t.titleLines}
        note={t.note}
        description={dict.home.features.description}
      />

      {/* Kart yok — manşet listesi */}
      <ol className="mt-16 border-t border-ink lg:mt-24">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            as="li"
            delay={(index % 3) * 60}
            className="group block border-b border-rule"
          >
            <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-5 sm:py-6">
              <span className="col-span-2 font-mono text-[0.7rem] font-medium tracking-[0.16em] text-ink-40 transition-colors group-hover:text-accent sm:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="col-span-10 font-display text-[clamp(1.375rem,4vw,2.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] transition-colors duration-200 group-hover:text-accent sm:col-span-5">
                {item.title}
              </h3>

              <p className="col-span-12 max-w-md text-[0.8125rem] leading-relaxed text-ink-60 sm:col-start-7 sm:col-span-5">
                {item.description}
              </p>

              <span
                aria-hidden
                className="hidden text-right font-mono text-ink-20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:col-span-1 sm:block"
              >
                →
              </span>
            </div>
            <span
              aria-hidden
              className="block h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
            />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
