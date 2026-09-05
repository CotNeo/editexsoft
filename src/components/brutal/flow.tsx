import { Mono, Node, SectionHead } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n";
import { cn } from "@/lib/utils";

function EndpointList({
  items,
  side,
}: {
  items: string[];
  side: "left" | "right";
}) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, index) => (
        <li
          key={item}
          className={cn(
            "relative flex items-center gap-3 border-b border-rule py-3.5",
            side === "left" && "lg:flex-row-reverse lg:justify-between",
          )}
        >
          <Node />
          <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink">
            {item}
          </span>

          {/* Çekirdeğe giden hat — yalnızca geniş ekranda */}
          <span
            aria-hidden
            className={cn(
              "absolute top-1/2 hidden h-px w-[var(--conn)] -translate-y-1/2 bg-rule-mid lg:block",
              side === "left" ? "right-0 translate-x-full" : "left-0 -translate-x-full",
            )}
          >
            <span
              className="absolute left-0 top-1/2 block h-[3px] w-3 -translate-y-1/2 bg-accent motion-safe:animate-flow-x"
              style={{ animationDelay: `${index * 260}ms` }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

function VerticalLink({ delay = 0 }: { delay?: number }) {
  return (
    <div aria-hidden className="relative mx-auto h-9 w-px bg-rule-mid lg:hidden">
      <span
        className="absolute left-1/2 top-0 block h-3 w-[3px] -translate-x-1/2 bg-accent motion-safe:animate-flow-y"
        style={{ animationDelay: `${delay}ms` }}
      />
    </div>
  );
}

export function Flow({ dict }: { dict: Dictionary }) {
  const t = dict.landing.flow;

  return (
    <section className="shell py-20 sm:py-24 lg:py-32">
      <SectionHead
        index={t.index}
        label={t.label}
        title={t.titleLines}
        note={t.interval}
        description={t.description}
      />

      <Reveal delay={120} className="mt-16 lg:mt-24">
        {/* İleri hat etiketi */}
        <div className="mb-6 flex items-center gap-4">
          <Mono className="text-ink-40">{t.forward}</Mono>
          <span aria-hidden className="h-px flex-1 bg-rule" />
          <Mono className="text-accent">→</Mono>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_19rem_1fr] lg:items-start">
          {/* A NOKTASI */}
          <div className="lg:pr-[var(--conn)]">
            <div className="flex items-end gap-4">
              <span className="font-display text-[2.75rem] font-black leading-[0.8] tracking-[-0.06em] text-ink lg:text-[3.5rem]">
                {t.a.code}
              </span>
              <div className="pb-1">
                <p className="font-display text-[0.9375rem] font-extrabold uppercase tracking-tight">
                  {t.a.title}
                </p>
                <Mono className="mt-1 block text-ink-40">{t.a.note}</Mono>
              </div>
            </div>
            <div className="mt-5">
              <EndpointList items={t.a.items} side="left" />
            </div>
          </div>

          <VerticalLink />

          {/* ÇEKİRDEK */}
          <div className="border-y-2 border-ink px-5 py-6 lg:border-x-2 lg:border-y-0 lg:px-7 lg:py-0">
            <div className="flex items-start justify-between gap-3 border-b border-ink pb-3">
              <div>
                <p className="font-display text-[1.0625rem] font-black uppercase tracking-[-0.02em]">
                  {t.core.title}
                </p>
                <Mono className="mt-1 block text-ink-40">{t.core.note}</Mono>
              </div>
              <span
                aria-hidden
                className="mt-1 block h-[7px] w-[7px] shrink-0 bg-accent motion-safe:animate-blink"
              />
            </div>

            <ol>
              {t.core.steps.map((step) => (
                <li key={step.k} className="border-b border-rule py-3.5 last:border-b-0">
                  <div className="flex items-baseline gap-3">
                    <Mono className="text-accent">{step.k}</Mono>
                    <span className="font-display text-[1.0625rem] font-extrabold uppercase tracking-[-0.02em]">
                      {step.v}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink-60">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>

          <VerticalLink delay={400} />

          {/* B NOKTASI */}
          <div className="lg:pl-[var(--conn)]">
            <div className="flex items-end gap-4 lg:justify-end">
              <span className="font-display text-[2.75rem] font-black leading-[0.8] tracking-[-0.06em] text-ink lg:order-2 lg:text-[3.5rem]">
                {t.b.code}
              </span>
              <div className="pb-1 lg:order-1 lg:text-right">
                <p className="font-display text-[0.9375rem] font-extrabold uppercase tracking-tight">
                  {t.b.title}
                </p>
                <Mono className="mt-1 block text-ink-40">{t.b.note}</Mono>
              </div>
            </div>
            <div className="mt-5">
              <EndpointList items={t.b.items} side="right" />
            </div>
          </div>
        </div>

        {/* Geri hat — stok ve fiyat yazımı */}
        <div className="relative mt-12 hidden lg:block">
          <div aria-hidden className="h-12 border-x border-b border-rule-mid" />
          <span
            aria-hidden
            className="absolute bottom-0 block h-[3px] w-3 translate-y-[1.5px] bg-accent motion-safe:animate-flow-x-rev"
          />
          <Mono className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-paper px-4 text-ink-40">
            ← {t.returnPath}
          </Mono>
        </div>
      </Reveal>
    </section>
  );
}
