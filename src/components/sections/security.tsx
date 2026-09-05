import { Container } from "@/components/ui/container";
import { IconCheck, IconShield } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Section } from "@/components/ui/section";
import type { Dictionary } from "@/i18n";

export function Security({ dict }: { dict: Dictionary }) {
  const { security } = dict.home;

  return (
    <Section className="bg-bg-subtle">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{security.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.15] text-fg sm:text-4xl">
              {security.title}
            </h2>
            <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-fg-muted">
              {security.description}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {security.items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--success)_16%,transparent)] text-[var(--success)]">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[0.9rem] font-semibold text-fg">{item.title}</span>
                    <span className="mt-1 block text-[0.8125rem] leading-relaxed text-fg-muted">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="absolute inset-6 -z-10 rounded-[2rem] bg-[linear-gradient(140deg,var(--brand-500),var(--teal-500))] opacity-20 blur-3xl"
            />
            <div className="dot-bg relative overflow-hidden rounded-3xl border border-border-base bg-surface p-8 sm:p-10">
              <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6 text-center">
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] text-white shadow-[0_20px_40px_-18px_var(--brand-600)]">
                  <IconShield className="h-9 w-9" />
                </span>
                <div className="w-full space-y-2.5">
                  {["AES-256", "KVKK / GDPR", "Local storage", "Audit log"].map((label, index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-xl border border-border-base bg-bg-subtle px-4 py-2.5"
                      style={{ opacity: 1 - index * 0.12 }}
                    >
                      <span className="font-mono text-[0.75rem] font-medium text-fg-muted">
                        {label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-[var(--success)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                        OK
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
