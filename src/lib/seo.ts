import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const organizationJsonLd = (locale: Locale, dict: Dictionary) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: absoluteUrl(`/${locale}`),
  logo: absoluteUrl("/icon.svg"),
  description: dict.meta.description,
  foundingDate: String(siteConfig.company.foundedYear),
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.instagram,
    siteConfig.social.x,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.supportEmail,
      telephone: `+${siteConfig.contact.whatsapp}`,
      availableLanguage: ["Turkish", "English"],
    },
  ],
});

export const softwareJsonLd = (locale: Locale, dict: Dictionary) => {
  const plan = dict.pricingPage.plans[0];
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} ${locale === "tr" ? "Entegrasyon" : "Integration"}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10, Windows 11",
    url: absoluteUrl(`/${locale}`),
    description: dict.meta.description,
    softwareVersion: siteConfig.download.version,
    downloadUrl: absoluteUrl(`/${locale}/download`),
    offers: {
      "@type": "Offer",
      price: plan.monthly,
      priceCurrency: dict.pricingPage.currency,
      category: "subscription",
      url: absoluteUrl(`/${locale}/pricing`),
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
};

export const faqJsonLd = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

/** Sayfa bazlı canonical + hreflang üretir */
export const pageAlternates = (locale: Locale, path: string) => ({
  canonical: `/${locale}${path}`,
  languages: {
    "tr-TR": `/tr${path}`,
    "en-US": `/en${path}`,
    "x-default": `/tr${path}`,
  },
});

/** Sayfa bazlı ortak metadata (canonical, hreflang, Open Graph, Twitter) */
export const pageMeta = (
  locale: Locale,
  path: string,
  title: string,
  description: string,
) => ({
  title,
  description,
  alternates: pageAlternates(locale, path),
  openGraph: {
    type: "website" as const,
    url: absoluteUrl(`/${locale}${path}`),
    title,
    description,
  },
  twitter: { title, description },
});
