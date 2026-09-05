"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonClass } from "@/components/ui/button";
import { IconCheck, IconSparkle } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cn, formatPrice } from "@/lib/utils";

type Pricing = Dictionary["pricingPage"];

export function PricingCards({
  locale,
  pricing,
  popularLabel,
  appUrl,
}: {
  locale: Locale;
  pricing: Pricing;
  popularLabel: string;
  appUrl: string;
}) {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Faturalama periyodu */}
      <div className="flex justify-center">
        <div
          role="group"
          className="inline-flex items-center gap-1 rounded-full border border-border-base bg-bg-subtle p-1"
        >
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
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8125rem] font-semibold transition-all",
                yearly === option.key
                  ? "bg-surface text-fg shadow-[0_4px_14px_-8px_rgba(10,16,40,0.5)]"
                  : "text-fg-muted hover:text-fg",
              )}
            >
              {option.label}
              {option.key ? (
                <span className="rounded-full bg-[color-mix(in_oklab,var(--success)_16%,transparent)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--success)]">
                  {pricing.yearlyBadge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
        {pricing.plans.map((plan) => {
          const monthlyEquivalent = yearly ? Math.round(plan.yearly / 12) : plan.monthly;

          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 sm:p-7",
                plan.popular
                  ? "border-brand-400 shadow-[0_30px_70px_-40px_var(--brand-600)] lg:-mt-3 lg:pb-9"
                  : "border-border-base hover:border-brand-300",
              )}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[linear-gradient(100deg,var(--brand-600),var(--accent-500))] px-3.5 py-1 text-[0.7rem] font-bold text-white shadow-[0_10px_24px_-12px_var(--brand-600)]">
                  <IconSparkle className="h-3 w-3" />
                  {popularLabel}
                </span>
              ) : null}

              <h3 className="font-display text-lg font-bold text-fg">{plan.name}</h3>
              <p className="mt-1.5 min-h-[2.5rem] text-[0.8125rem] leading-relaxed text-fg-muted">
                {plan.tagline}
              </p>

              <div className="mt-5 border-y border-border-base py-5">
                {plan.custom ? (
                  <p className="font-display text-[1.75rem] font-extrabold text-fg">
                    {pricing.customPrice}
                  </p>
                ) : (
                  <>
                    <p className="flex items-baseline gap-1.5">
                      <span className="font-display text-[2.25rem] font-extrabold tracking-tight text-fg">
                        {formatPrice(monthlyEquivalent, pricing.currency, pricing.locale)}
                      </span>
                      <span className="text-[0.875rem] font-medium text-fg-muted">
                        {pricing.perMonth}
                      </span>
                    </p>
                    <p className="mt-1.5 text-[0.75rem] text-fg-subtle">
                      {yearly
                        ? `${formatPrice(plan.yearly, pricing.currency, pricing.locale)} · ${pricing.billedYearly}`
                        : pricing.billedMonthly}
                    </p>
                  </>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-[0.875rem] leading-snug text-fg-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.custom ? (
                <Link
                  href={`/${locale}/contact`}
                  className={buttonClass({
                    variant: "outline",
                    size: "lg",
                    className: "mt-7 w-full",
                  })}
                >
                  {plan.cta}
                </Link>
              ) : (
                <a
                  href={appUrl}
                  className={buttonClass({
                    variant: plan.popular ? "primary" : "outline",
                    size: "lg",
                    className: "mt-7 w-full",
                  })}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-[0.8125rem] text-fg-subtle">{pricing.vatNote}</p>
    </div>
  );
}
