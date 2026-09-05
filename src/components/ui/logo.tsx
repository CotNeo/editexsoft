import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string; id?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="currentColor" />
      <g fill="var(--paper)">
        <rect x="7" y="8" width="15" height="2.6" />
        <rect x="7" y="14.7" width="9" height="2.6" />
        <rect x="7" y="21.4" width="15" height="2.6" />
      </g>
      <rect x="21" y="14.2" width="4" height="4" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
  id?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("text-ink", markClassName)} />
      <span className="font-display text-[1.05rem] font-black uppercase leading-none tracking-[-0.04em] text-ink">
        Editexsoft
      </span>
    </span>
  );
}
