"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type QaItem = { question: string; answer: string };

export function Accordion({
  items,
  className,
  defaultOpen = -1,
}: {
  items: QaItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-border-base bg-surface", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left transition-colors hover:bg-bg-subtle sm:px-6"
              >
                <span className="text-[0.9375rem] font-semibold text-fg sm:text-base">
                  {item.question}
                </span>
                <IconChevronDown
                  className={cn(
                    "h-[1.15rem] w-[1.15rem] shrink-0 text-fg-subtle transition-transform duration-300",
                    isOpen && "rotate-180 text-brand-500",
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.9rem] leading-relaxed text-fg-muted sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
