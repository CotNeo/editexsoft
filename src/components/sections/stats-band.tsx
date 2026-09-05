import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function StatsBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-base bg-[var(--border)] lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 70}
              className="bg-surface px-5 py-7 text-center sm:px-6 sm:py-8"
            >
              <p className="font-display text-[1.85rem] font-extrabold tracking-tight text-gradient sm:text-[2.25rem]">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[0.8125rem] text-fg-muted sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
