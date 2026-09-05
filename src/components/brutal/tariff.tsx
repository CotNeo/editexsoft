"use client";

import { useState } from "react";
import { Mono, blockClass } from "@/components/brutal/primitives";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cn, formatPrice } from "@/lib/utils";

export function TariffTable({
  locale,
  dict,
  appUrl,
}: {
  locale: Locale;
  dict: Dictionary;
  appUrl: string;
}) {
  const pricing = dict.pricingPage;
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Dönem seçimi — kaydırmalı anahtar değil, mono metin */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-rule pb-4">
        {(
          [
            { key: false, label: pricing.billingMonthly },
            { key: true, label: pricing.billingYearly },
          ] as const
        ).map((option) => (
          <button
            key={String(option.key)}
            type="button"
            onClick={() => setYearly(option.key)}
            aria-pressed={yearly === option.key}
            className="group relative font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors"
          >
            <span className={yearly === option.key ? "text-ink" : "text-ink-40 hover:text-ink"}>
              {option.label}
            </span>
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1.5 left-0 block h-[2px] w-full origin-left bg-accent transition-transform duration-300 ease-out",
                yearly === option.key ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50",
              )}
            />
          </button>
        ))}
        <Mono className="ml-auto text-accent">{yearly ? pricing.yearlyBadge : pricing.vatNote}</Mono>
      </div>

      <div className="grid lg:grid-cols-3">
        {pricing.plans.map((plan, index) => {
          const inverted = plan.popular;
          const monthlyEquivalent = yearly ? Math.round(plan.yearly / 12) : plan.monthly;

          return (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col border-b border-ink px-0 py-8 lg:border-b-0 lg:px-7 lg:py-10",
                index > 0 && "lg:border-l lg:border-ink",
                inverted && "bg-ink text-paper lg:-my-px lg:py-12",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Mono className={inverted ? "text-paper/50" : "text-ink-40"}>
                  {String(index + 1).padStart(2, "0")}
                </Mono>
                {inverted ? <Mono className="text-accent">{"// "}{dict.common.popular}</Mono> : null}
              </div>

              <h3
                className={cn(
                  "mt-4 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black uppercase leading-none tracking-[-0.04em]",
                  inverted ? "text-paper" : "text-ink",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-3 min-h-[2.75rem] max-w-[18rem] text-[0.8125rem] leading-relaxed",
                  inverted ? "text-paper/65" : "text-ink-60",
                )}
              >
                {plan.tagline}
              </p>

              <div
                className={cn(
                  "mt-8 border-t pt-5",
                  inverted ? "border-paper/25" : "border-ink",
                )}
              >
                {plan.custom ? (
                  <p className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase leading-none tracking-[-0.04em]">
                    {pricing.customPrice}
                  </p>
                ) : (
                  <>
                    <p className="flex items-baseline gap-2">
                      <span className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black leading-none tracking-[-0.05em] tabular-nums">
                        {formatPrice(monthlyEquivalent, pricing.currency, pricing.locale)}
                      </span>
                      <Mono className={inverted ? "text-paper/50" : "text-ink-40"}>
                        {pricing.perMonth}
                      </Mono>
                    </p>
                    <Mono className={cn("mt-3 block", inverted ? "text-paper/50" : "text-ink-40")}>
                      {yearly
                        ? `${formatPrice(plan.yearly, pricing.currency, pricing.locale)} · ${pricing.billedYearly}`
                        : pricing.billedMonthly}
                    </Mono>
                  </>
                )}
              </div>

              <ul className={cn("mt-8 flex-1 border-t", inverted ? "border-paper/25" : "border-rule")}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-3 border-b py-2.5 text-[0.8125rem] leading-snug",
                      inverted ? "border-paper/15 text-paper/80" : "border-rule text-ink-60",
                    )}
                  >
                    <span aria-hidden className="mt-[0.35rem] block h-[7px] w-[7px] shrink-0 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.custom ? (
                <a
                  href={`/${locale}/contact`}
                  className={blockClass(inverted ? "paper" : "ink", "mt-8 w-full")}
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href={appUrl}
                  className={blockClass(inverted ? "paper" : "ink", "mt-8 w-full")}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
