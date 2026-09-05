import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-base bg-bg-subtle px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-400",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl text-[1.75rem] font-bold leading-[1.15] text-fg sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-[0.975rem] leading-relaxed text-fg-muted sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}

/**
 * `top` bölümün üst boşluğunu belirler. Tailwind'de responsive varyantlar
 * (sm:py-24 gibi) sınıfsız `pt-4` tarafından ezilmediği için üst boşluk
 * className ile değil bu prop ile ayarlanır.
 */
const topSpacing = {
  normal: "pt-20 sm:pt-24 lg:pt-28",
  compact: "pt-2 sm:pt-4 lg:pt-6",
  none: "pt-0",
} as const;

export function Section({
  children,
  className,
  id,
  top = "normal",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  top?: keyof typeof topSpacing;
}) {
  return (
    <section
      id={id}
      className={cn("pb-20 sm:pb-24 lg:pb-28", topSpacing[top], className)}
    >
      {children}
    </section>
  );
}
