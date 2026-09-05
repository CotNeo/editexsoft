import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "@/app/globals.css";

import { GridLines } from "@/components/brutal/primitives";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";
import { siteConfig, whatsappLink } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale, locales, localeTags, type Locale } from "@/i18n/config";
import { organizationJsonLd, softwareJsonLd } from "@/lib/seo";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f9f9f9",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "tr-TR": "/tr",
        "en-US": "/en",
        "x-default": "/tr",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dict.meta.defaultTitle,
      description: dict.meta.description,
      url: `${siteConfig.url}/${locale}`,
      locale: localeTags[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.defaultTitle,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    manifest: "/manifest.webmanifest",
    formatDetection: { telephone: false },
  };
}

/* JS açıkken .js sınıfı eklenir; kapalıysa görünüme-giriş animasyonu
   devre dışı kalır ve içerik doğrudan görünür (globals.css). */
const bootScript = `document.documentElement.classList.add("js");`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      className={`${archivo.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <GridLines />
        <Header locale={locale} nav={dict.nav} appUrl={siteConfig.appUrl} />
        <main id="main" className="flex-1 pt-[var(--header-height)]">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <WhatsappFab
          href={whatsappLink(dict.common.whatsappMessage)}
          label={dict.common.whatsappSupport}
          bubble={dict.home.support.cards[0].description}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(locale, dict)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd(locale, dict)),
          }}
        />
      </body>
    </html>
  );
}
