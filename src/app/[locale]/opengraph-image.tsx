import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale } from "@/i18n/config";

export const alt = "EditexSoft";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const brands = ["Trendyol", "Hepsiburada", "N11", "Amazon", "Logo", "Mikro"];

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#05070F",
          backgroundImage:
            "radial-gradient(900px 460px at 78% -8%, rgba(109,91,246,0.42), transparent), radial-gradient(760px 420px at 8% 104%, rgba(20,184,166,0.28), transparent)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#3563F0 0%,#6D5BF6 55%,#14B8A6 100%)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ width: 36, height: 7, borderRadius: 4, background: "#fff" }} />
              <div style={{ width: 23, height: 7, borderRadius: 4, background: "#fff" }} />
              <div style={{ width: 36, height: 7, borderRadius: 4, background: "#fff" }} />
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#fff" }}>
            <span>Editex</span>
            <span style={{ color: "#8FB0FF" }}>Soft</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 960,
            }}
          >
            {dict.meta.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9BA9C4", maxWidth: 900 }}>
            {locale === "tr"
              ? "Sipariş, stok, fiyat ve fatura süreçlerinizi otomatikleştiren Windows entegrasyon yazılımı."
              : "Windows integration software that automates your orders, stock, pricing and invoicing."}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
                color: "#C9D4E8",
                fontSize: 22,
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
