import { LogoMark } from "@/components/ui/logo";
import {
  IconChart,
  IconInvoice,
  IconOrders,
  IconPrice,
  IconSync,
  IconTruck,
  IconUpload,
} from "@/components/ui/icons";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const copy = {
  tr: {
    nav: ["Panel", "Siparişler", "Ürünler", "Fiyatlar", "Kargo", "Faturalar", "Raporlar"],
    kpis: [
      { label: "Bugünkü sipariş", value: "128", trend: "+18%" },
      { label: "Bekleyen aktarım", value: "3", trend: "-64%" },
      { label: "Senkron başarısı", value: "%99,8", trend: "+0,4" },
    ],
    channelsTitle: "Kanal durumu",
    lastSync: "Son senkron",
    columns: ["Kanal", "Ürün", "Durum", "Son senkron"],
    statuses: { ok: "Senkronize", busy: "Aktarılıyor", wait: "Sırada" },
    chartTitle: "Son 7 gün sipariş",
    live: "Canlı",
    ago: ["12 sn önce", "48 sn önce", "1 dk önce", "2 dk önce", "3 dk önce"],
  },
  en: {
    nav: ["Dashboard", "Orders", "Products", "Pricing", "Shipping", "Invoices", "Reports"],
    kpis: [
      { label: "Orders today", value: "128", trend: "+18%" },
      { label: "Pending transfers", value: "3", trend: "-64%" },
      { label: "Sync success", value: "99.8%", trend: "+0.4" },
    ],
    channelsTitle: "Channel status",
    lastSync: "Last sync",
    columns: ["Channel", "Products", "Status", "Last sync"],
    statuses: { ok: "Synced", busy: "Syncing", wait: "Queued" },
    chartTitle: "Orders, last 7 days",
    live: "Live",
    ago: ["12s ago", "48s ago", "1m ago", "2m ago", "3m ago"],
  },
} as const;

const navIcons = [IconChart, IconOrders, IconUpload, IconPrice, IconTruck, IconInvoice, IconSync];

const channels = [
  { name: "Trendyol", products: "12.480", status: "ok" as const, tone: "#F27A1A" },
  { name: "Hepsiburada", products: "9.312", status: "ok" as const, tone: "#FF6000" },
  { name: "N11", products: "7.845", status: "busy" as const, tone: "#8C2C8C" },
  { name: "Amazon", products: "4.106", status: "ok" as const, tone: "#0F7B8A" },
  { name: "Çiçeksepeti", products: "2.930", status: "wait" as const, tone: "#E0245E" },
];

const bars = [42, 58, 47, 71, 63, 88, 96];

export function AppPreview({
  locale,
  title,
  className,
}: {
  locale: Locale;
  title: string;
  className?: string;
}) {
  const t = copy[locale];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border-base bg-surface-raised shadow-[0_40px_90px_-40px_rgba(10,16,40,0.55)]",
        className,
      )}
      role="img"
      aria-label={title}
    >
      {/* Pencere başlığı */}
      <div className="flex items-center gap-3 border-b border-border-base bg-bg-muted px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="flex-1 truncate text-center text-[0.7rem] font-medium text-fg-subtle">
          {title}
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklab,var(--success)_16%,transparent)] px-2 py-0.5 text-[0.65rem] font-semibold text-[var(--success)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
          {t.live}
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[9.5rem_1fr]">
        {/* Kenar menü */}
        <aside className="hidden flex-col gap-1 border-r border-border-base bg-bg-subtle p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-1">
            <LogoMark className="h-6 w-6" id="preview-logo" />
            <span className="text-[0.7rem] font-bold tracking-tight text-fg">EditexSoft</span>
          </div>
          {t.nav.map((item, index) => {
            const Icon = navIcons[index];
            return (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-[0.7rem] font-medium",
                  index === 0
                    ? "bg-[color-mix(in_oklab,var(--brand-500)_14%,transparent)] text-brand-600 dark:text-brand-400"
                    : "text-fg-subtle",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {item}
              </div>
            );
          })}
        </aside>

        {/* İçerik */}
        <div className="min-w-0 space-y-3 p-3 sm:p-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {t.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-border-base bg-surface p-2.5 sm:p-3"
              >
                <p className="truncate text-[0.6rem] font-medium uppercase tracking-wide text-fg-subtle sm:text-[0.65rem]">
                  {kpi.label}
                </p>
                <p className="mt-1 font-display text-base font-bold text-fg sm:text-xl">
                  {kpi.value}
                </p>
                <p className="text-[0.6rem] font-semibold text-[var(--success)]">{kpi.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-xl border border-border-base bg-surface">
              <div className="flex items-center justify-between border-b border-border-base px-3 py-2">
                <p className="text-[0.7rem] font-semibold text-fg">{t.channelsTitle}</p>
                <IconSync className="h-3.5 w-3.5 text-brand-500" />
              </div>
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    {t.columns.map((column, index) => (
                      <th
                        key={column}
                        className={cn(
                          "px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-wide text-fg-subtle",
                          index > 1 && "hidden sm:table-cell",
                        )}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {channels.map((channel, index) => (
                    <tr key={channel.name} className="border-t border-border-base">
                      <td className="px-3 py-2">
                        <span className="flex items-center gap-2">
                          <span
                            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[0.55rem] font-bold text-white"
                            style={{ backgroundColor: channel.tone }}
                            aria-hidden
                          >
                            {channel.name.charAt(0)}
                          </span>
                          <span className="truncate text-[0.7rem] font-medium text-fg">
                            {channel.name}
                          </span>
                        </span>
                      </td>
                      <td className="px-3 py-2 text-[0.7rem] tabular-nums text-fg-muted">
                        {channel.products}
                      </td>
                      <td className="hidden px-3 py-2 sm:table-cell">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.6rem] font-semibold",
                            channel.status === "ok" &&
                              "bg-[color-mix(in_oklab,var(--success)_15%,transparent)] text-[var(--success)]",
                            channel.status === "busy" &&
                              "bg-[color-mix(in_oklab,var(--brand-500)_15%,transparent)] text-brand-600 dark:text-brand-400",
                            channel.status === "wait" &&
                              "bg-[color-mix(in_oklab,var(--warning)_15%,transparent)] text-[var(--warning)]",
                          )}
                        >
                          <span className="h-1 w-1 rounded-full bg-current" />
                          {t.statuses[channel.status]}
                        </span>
                      </td>
                      <td className="hidden px-3 py-2 text-[0.65rem] text-fg-subtle sm:table-cell">
                        {t.ago[index]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="hidden rounded-xl border border-border-base bg-surface p-3 lg:block">
              <p className="text-[0.7rem] font-semibold text-fg">{t.chartTitle}</p>
              <div className="mt-4 flex h-24 items-end gap-1.5" aria-hidden>
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[3px] bg-[linear-gradient(180deg,var(--brand-400),var(--brand-600))]"
                    style={{ height: `${height}%`, opacity: 0.55 + index * 0.06 }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border-base pt-2 text-[0.6rem] text-fg-subtle">
                <span>{t.lastSync}</span>
                <span className="font-semibold text-fg">{t.ago[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
