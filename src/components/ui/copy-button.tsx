"use client";

import { useState } from "react";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  copyLabel,
  copiedLabel,
  className,
}: {
  value: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* pano erişimi engellenmiş olabilir */
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border-base bg-surface px-2.5 py-1.5 text-[0.75rem] font-semibold text-fg-muted transition-colors hover:border-brand-400 hover:text-fg",
        className,
      )}
    >
      {copied ? <IconCheck className="h-3.5 w-3.5 text-[var(--success)]" /> : null}
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
