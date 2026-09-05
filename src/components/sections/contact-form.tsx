"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { IconAlert, IconCheck } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type Form = Dictionary["contactPage"]["form"];
type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-border-base bg-surface px-4 py-3 text-[0.9375rem] text-fg placeholder:text-fg-subtle transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklab,var(--brand-500)_14%,transparent)]";

const labelClass = "mb-1.5 block text-[0.8125rem] font-semibold text-fg";

export function ContactForm({ locale, form }: { locale: Locale; form: Form }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries()) as Record<string, string>;

    const nextErrors: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2) nextErrors.name = form.validation.name;
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
      nextErrors.email = form.validation.email;
    if (!data.message || data.message.trim().length < 10)
      nextErrors.message = form.validation.message;
    if (!data.consent) nextErrors.consent = form.validation.consent;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-[color-mix(in_oklab,var(--success)_35%,var(--border))] bg-[color-mix(in_oklab,var(--success)_7%,transparent)] p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--success)_18%,transparent)] text-[var(--success)]">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-fg">{form.successTitle}</h3>
        <p className="mt-2 max-w-sm text-[0.9rem] leading-relaxed text-fg-muted">
          {form.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border-base bg-surface p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold text-fg">{form.title}</h2>
      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-fg-muted">{form.description}</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {form.name} <span className="text-[var(--danger)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={form.namePlaceholder}
            className={cn(fieldClass, errors.name && "border-[var(--danger)]")}
          />
          {errors.name ? (
            <p className="mt-1.5 text-[0.75rem] text-[var(--danger)]">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            {form.email} <span className="text-[var(--danger)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className={cn(fieldClass, errors.email && "border-[var(--danger)]")}
          />
          {errors.email ? (
            <p className="mt-1.5 text-[0.75rem] text-[var(--danger)]">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            {form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={form.phonePlaceholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            {form.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={form.companyPlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="subject">
            {form.subject}
          </label>
          <select id="subject" name="subject" className={cn(fieldClass, "appearance-none")}>
            {form.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            {form.message} <span className="text-[var(--danger)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={form.messagePlaceholder}
            className={cn(fieldClass, "resize-y", errors.message && "border-[var(--danger)]")}
          />
          {errors.message ? (
            <p className="mt-1.5 text-[0.75rem] text-[var(--danger)]">{errors.message}</p>
          ) : null}
        </div>
      </div>

      {/* Bot tuzağı — ekranda görünmez */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          name="consent"
          type="checkbox"
          value="1"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border-strong accent-[var(--brand-500)]"
        />
        <span className="text-[0.8125rem] leading-relaxed text-fg-muted">{form.consent}</span>
      </label>
      {errors.consent ? (
        <p className="mt-1.5 text-[0.75rem] text-[var(--danger)]">{errors.consent}</p>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[color-mix(in_oklab,var(--danger)_35%,var(--border))] bg-[color-mix(in_oklab,var(--danger)_7%,transparent)] p-4">
          <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-[var(--danger)]" />
          <div>
            <p className="text-[0.875rem] font-semibold text-fg">{form.errorTitle}</p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-fg-muted">
              {form.errorMessage}
            </p>
          </div>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? form.submitting : form.submit}
      </Button>
    </form>
  );
}
