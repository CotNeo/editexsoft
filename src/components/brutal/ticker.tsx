import { Mono, Node } from "@/components/brutal/primitives";

export function Ticker({ label, items }: { label: string; items: string[] }) {
  const row = [...items, ...items];

  return (
    <div className="border-y border-ink">
      <div className="shell">
        <div className="flex items-center gap-6 py-3">
          <Mono className="hidden shrink-0 text-ink-40 sm:block">{label}</Mono>
          <div className="mask-fade-x relative min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max items-center gap-7 motion-safe:animate-ticker">
              {row.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink"
                >
                  <Node />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
