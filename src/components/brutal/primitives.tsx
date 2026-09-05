import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Teknik ızgara — sayfanın tamamında görünen ince dikey çizgiler      */
/* ------------------------------------------------------------------ */
export function GridLines() {
  const cells = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 select-none">
      <div className="shell h-full">
        <div className="flex h-full border-r border-rule">
          {cells.map((i) => (
            <div
              key={i}
              className={cn(
                "h-full flex-1 border-l border-rule",
                i >= 4 && i < 6 && "hidden sm:block",
                i >= 6 && "hidden lg:block",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mono teknik etiket                                                  */
/* ------------------------------------------------------------------ */
export function Mono({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("mono-label", className)}>{children}</span>;
}

/* Entegrasyon noktası — çiğ rengin kullanıldığı tek yapısal eleman */
export function Node({ live = true, className }: { live?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "block h-[7px] w-[7px] shrink-0",
        live ? "bg-accent" : "border border-ink-40",
        className,
      )}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Bölüm başlığı — numara / etiket / manşet                            */
/* ------------------------------------------------------------------ */
export function SectionHead({
  index,
  label,
  title,
  note,
  description,
  className,
  size = "lg",
}: {
  index: string;
  label: string;
  title: string[];
  note?: string;
  description?: string;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div className={cn("border-t border-ink pt-4", className)}>
      <div className="flex items-start justify-between gap-6">
        <Mono className="text-ink-40">
          <span className="text-accent">{index}</span> — {label}
        </Mono>
        {note ? <Mono className="hidden text-right text-ink-40 sm:block">{note}</Mono> : null}
      </div>

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-6 lg:mt-14">
        <Reveal
          as="h2"
          className={cn(
            "reveal-lines col-span-12 font-display font-black uppercase leading-[0.85] tracking-[-0.045em]",
            size === "lg"
              ? "text-[clamp(1.875rem,5.6vw,4.25rem)] lg:col-span-8"
              : "text-[clamp(1.625rem,4.2vw,3rem)] lg:col-span-7",
          )}
        >
          {title.map((line, i) => (
            <span key={line} className="line">
              <span style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                {line}
                {i === title.length - 1 ? <span className="text-accent">.</span> : null}
              </span>
            </span>
          ))}
        </Reveal>

        {description ? (
          <Reveal
            delay={220}
            className="col-span-12 self-end sm:col-span-8 lg:col-start-9 lg:col-span-4"
          >
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-60">{description}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bağlantılar — klasik SaaS butonu yok                                */
/* ------------------------------------------------------------------ */
const arrowBase =
  "group inline-flex items-baseline gap-3 font-mono uppercase tracking-[0.16em] transition-colors";

function ArrowBody({ children, size }: { children: ReactNode; size: "sm" | "lg" }) {
  return (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </span>
      <span
        aria-hidden
        className={cn(
          "inline-block transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-accent",
          size === "lg" ? "text-[1.15em]" : "",
        )}
      >
        →
      </span>
    </>
  );
}

export function ArrowLink({
  children,
  className,
  size = "sm",
  ...rest
}: ComponentProps<typeof Link> & { size?: "sm" | "lg" }) {
  return (
    <Link
      className={cn(
        arrowBase,
        size === "lg"
          ? "text-[0.8125rem] font-semibold text-ink sm:text-[0.9rem]"
          : "text-[0.7rem] font-medium text-ink-60 hover:text-ink",
        className,
      )}
      {...rest}
    >
      <ArrowBody size={size}>{children}</ArrowBody>
    </Link>
  );
}

export function ArrowAnchor({
  children,
  className,
  size = "sm",
  ...rest
}: ComponentProps<"a"> & { size?: "sm" | "lg" }) {
  return (
    <a
      className={cn(
        arrowBase,
        size === "lg"
          ? "text-[0.8125rem] font-semibold text-ink sm:text-[0.9rem]"
          : "text-[0.7rem] font-medium text-ink-60 hover:text-ink",
        className,
      )}
      {...rest}
    >
      <ArrowBody size={size}>{children}</ArrowBody>
    </a>
  );
}

/* Kalın çerçeveli blok — hover'da doluyor */
const blockBase =
  "inline-flex items-center justify-center gap-3 border-[1.5px] px-6 py-3.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

const blockTone = {
  ink: "border-ink text-ink hover:bg-ink hover:text-paper",
  paper: "border-paper text-paper hover:bg-paper hover:text-ink",
  solid: "border-ink bg-ink text-paper hover:bg-accent hover:border-accent hover:text-white",
} as const;

export function BlockLink({
  children,
  className,
  tone = "ink",
  ...rest
}: ComponentProps<typeof Link> & { tone?: keyof typeof blockTone }) {
  return (
    <Link className={cn(blockBase, blockTone[tone], className)} {...rest}>
      {children}
    </Link>
  );
}

export function BlockAnchor({
  children,
  className,
  tone = "ink",
  ...rest
}: ComponentProps<"a"> & { tone?: keyof typeof blockTone }) {
  return (
    <a className={cn(blockBase, blockTone[tone], className)} {...rest}>
      {children}
    </a>
  );
}

export function blockClass(tone: keyof typeof blockTone = "ink", className?: string) {
  return cn(blockBase, blockTone[tone], className);
}
