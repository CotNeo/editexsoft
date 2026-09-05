import { IconAlert, IconBulb, IconInfo } from "@/components/ui/icons";
import type { DocBlock } from "@/i18n/types";
import { cn } from "@/lib/utils";

const noteStyles = {
  info: {
    Icon: IconInfo,
    wrap: "border-[color-mix(in_oklab,var(--brand-500)_35%,var(--border))] bg-[color-mix(in_oklab,var(--brand-500)_7%,transparent)]",
    icon: "text-brand-600 dark:text-brand-400",
  },
  tip: {
    Icon: IconBulb,
    wrap: "border-[color-mix(in_oklab,var(--success)_35%,var(--border))] bg-[color-mix(in_oklab,var(--success)_7%,transparent)]",
    icon: "text-[var(--success)]",
  },
  warn: {
    Icon: IconAlert,
    wrap: "border-[color-mix(in_oklab,var(--warning)_38%,var(--border))] bg-[color-mix(in_oklab,var(--warning)_8%,transparent)]",
    icon: "text-[var(--warning)]",
  },
} as const;

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="not-prose my-5 space-y-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-3.5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] text-[0.75rem] font-bold text-brand-600 dark:text-brand-400">
                {index + 1}
              </span>
              <span className="pt-0.5 text-[0.9375rem] leading-relaxed text-fg-muted">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "note": {
      const style = noteStyles[block.variant];
      return (
        <div className={cn("not-prose my-6 flex gap-3.5 rounded-xl border p-4", style.wrap)}>
          <style.Icon className={cn("mt-0.5 h-5 w-5 shrink-0", style.icon)} />
          <div>
            <p className="text-[0.9rem] font-semibold text-fg">{block.title}</p>
            <p className="mt-1 text-[0.875rem] leading-relaxed text-fg-muted">{block.text}</p>
          </div>
        </div>
      );
    }

    case "code":
      return (
        <pre className="not-prose my-5 overflow-x-auto rounded-xl border border-border-base bg-bg-muted px-4 py-3.5">
          <code className="font-mono text-[0.8125rem] text-fg">{block.text}</code>
        </pre>
      );

    case "table":
      return (
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border-base">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[0.875rem]">
            <thead className="bg-bg-subtle">
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    className="border-b border-border-base px-4 py-2.5 font-semibold text-fg"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-border-base last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={cn(
                        "px-4 py-2.5 align-top text-fg-muted",
                        cellIndex === 0 && "font-medium text-fg",
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export function DocBlocks({ blocks }: { blocks: DocBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  );
}

export function DocSections({
  sections,
}: {
  sections: { heading: string; body: DocBlock[] }[];
}) {
  return (
    <div className="prose-editex">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 id={slugify(section.heading)}>{section.heading}</h2>
          <DocBlocks blocks={section.body} />
        </section>
      ))}
    </div>
  );
}

export function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
