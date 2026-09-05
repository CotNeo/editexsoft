import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-20", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-[-14rem] h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-500)_22%,transparent),transparent)] blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-fg sm:text-[2.85rem] lg:text-[3.15rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-fg-muted">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
