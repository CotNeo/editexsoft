"use client";

import { useEffect, useState } from "react";
import { IconWhatsapp } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function WhatsappFab({
  href,
  label,
  bubble,
}: {
  href: string;
  label: string;
  bubble: string;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const timer = window.setTimeout(() => setShowBubble(true), 1400);
    return () => window.clearTimeout(timer);
  }, [visible, dismissed]);

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 z-40 flex items-end transition-transform duration-300",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      {showBubble && !dismissed ? (
        <button
          type="button"
          onClick={() => {
            setShowBubble(false);
            setDismissed(true);
          }}
          className="hidden max-w-[17rem] border-l border-t border-ink bg-paper px-4 py-3 text-left font-mono text-[0.65rem] leading-relaxed tracking-[0.06em] text-ink-60 transition-colors hover:text-ink sm:block"
        >
          {bubble}
          <span aria-hidden className="mt-1 block text-ink-20">
            [×]
          </span>
        </button>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        title={label}
        className="flex h-14 items-center gap-3 border-l border-t border-ink bg-ink px-5 text-paper transition-colors duration-200 hover:bg-accent"
      >
        <IconWhatsapp className="h-5 w-5" />
        <span className="hidden font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:block">
          {label}
        </span>
      </a>
    </div>
  );
}
