import { Container } from "@/components/ui/container";

const brands = [
  "Trendyol",
  "Hepsiburada",
  "N11",
  "Amazon",
  "Çiçeksepeti",
  "PTT AVM",
  "Shopify",
  "WooCommerce",
  "Ticimax",
  "İdeaSoft",
  "Logo",
  "Mikro",
  "Netsis",
  "Paraşüt",
  "Nebim",
  "Yurtiçi Kargo",
  "Aras Kargo",
  "Uyumsoft",
];

export function BrandMarquee({ title }: { title: string }) {
  const row = [...brands, ...brands];

  return (
    <section className="border-y border-border-base bg-bg-subtle py-10">
      <Container>
        <p className="text-center text-[0.78rem] font-medium uppercase tracking-[0.12em] text-fg-subtle">
          {title}
        </p>
      </Container>
      <div className="mask-fade-x relative mt-6 overflow-hidden">
        <div className="flex w-max gap-3 motion-safe:animate-marquee">
          {row.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border-base bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-fg-muted"
            >
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[linear-gradient(135deg,var(--brand-500),var(--accent-500))] text-[0.65rem] font-bold text-white"
              >
                {brand.charAt(0)}
              </span>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
