import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "border-[1.5px] border-ink bg-ink text-paper hover:border-accent hover:bg-accent",
  secondary: "border-[1.5px] border-ink bg-ink text-paper hover:border-accent hover:bg-accent",
  outline: "border-[1.5px] border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink-60 hover:text-ink",
  whatsapp: "border-[1.5px] border-ink bg-ink text-paper hover:border-accent hover:bg-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.65rem] gap-2",
  md: "h-11 px-5 text-[0.7rem] gap-2.5",
  lg: "h-[3.25rem] px-7 text-[0.7rem] gap-3",
};

const baseClass =
  "inline-flex select-none items-center justify-center whitespace-nowrap font-mono font-semibold uppercase tracking-[0.16em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-55";

export function buttonClass({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(baseClass, variants[variant], sizes[size], className);
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}

type ExternalButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ExternalButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: ExternalButtonLinkProps) {
  return (
    <a className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}
