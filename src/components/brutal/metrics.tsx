import { Mono } from "@/components/brutal/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n";
import { cn } from "@/lib/utils";

/* Asimetri: her sütun farklı yükseklikte başlar */
const offsets = ["lg:mt-0", "lg:mt-20", "lg:mt-8", "lg:mt-28"];

export function Metrics({ dict }: { dict: Dictionary }) {
  const t = dict.landing.metrics;
  const stats = dict.home.stats;

  return (
    <section className="shell pb-20 pt-4 sm:pb-24 lg:pb-32">
      <div className="flex items-start justify-between gap-6 border-t border-ink pt-4">
        <Mono className="text-ink-40">
          <span className="text-accent">{t.index}</span> — {t.label}
        </Mono>
        <Mono className="text-ink-40">{t.titleLines[0]}</Mono>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 90}
            className={cn("border-t border-ink pt-4", offsets[index % offsets.length])}
          >
            <p className="font-display text-[clamp(2.5rem,7.5vw,5.5rem)] font-black leading-[0.8] tracking-[-0.06em] tabular-nums">
              {stat.value}
            </p>
            <Mono className="mt-4 block max-w-[12rem] text-ink-40">{stat.label}</Mono>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
