/**
 * Tek merkezden düzenlenebilir site ayarları.
 * Buradaki değerleri değiştirmeniz sitenin tamamına yansır.
 * Hassas / ortama göre değişen değerler için .env.local kullanın.
 */

const env = (key: string, fallback: string) => {
  const value = process.env[key];
  return value && value.length > 0 ? value : fallback;
};

export const siteConfig = {
  name: "EditexSoft",
  legalName: "EditexSoft Yazılım",
  domain: "editexsoft.com",
  url: env("NEXT_PUBLIC_SITE_URL", "https://editexsoft.com"),

  /** Üyelik / abonelik paneli (ileride devreye alınacak web uygulaması) */
  appUrl: env("NEXT_PUBLIC_APP_URL", "https://app.editexsoft.com"),

  /** Masaüstü uygulamasının .exe kurulum dosyası */
  download: {
    url: env("NEXT_PUBLIC_DOWNLOAD_URL", "/downloads/EditexSoftSetup.exe"),
    version: env("NEXT_PUBLIC_APP_VERSION", "3.4.2"),
    releaseDate: env("NEXT_PUBLIC_APP_RELEASE_DATE", "2026-08-18"),
    sizeMb: env("NEXT_PUBLIC_APP_SIZE_MB", "84"),
    sha256: env("NEXT_PUBLIC_APP_SHA256", ""),
  },

  contact: {
    email: "info@editexsoft.com",
    supportEmail: "destek@editexsoft.com",
    salesEmail: "satis@editexsoft.com",
    /** Uluslararası formatta, sadece rakam (wa.me linki için) */
    whatsapp: env("NEXT_PUBLIC_WHATSAPP_PHONE", "905550000000"),
    phoneDisplay: env("NEXT_PUBLIC_PHONE_DISPLAY", "+90 555 000 00 00"),
    workingHours: { tr: "Hafta içi 09:00 - 18:30", en: "Weekdays 09:00 - 18:30 (GMT+3)" },
    address: {
      tr: "Şirket adresinizi buraya yazın",
      en: "Add your company address here",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/editexsoft",
    youtube: "https://www.youtube.com/@editexsoft",
    instagram: "https://www.instagram.com/editexsoft",
    x: "https://x.com/editexsoft",
  },

  /** Yapısal veri (JSON-LD) ve footer için kurumsal bilgiler */
  company: {
    foundedYear: 2019,
    taxOffice: "",
    taxNumber: "",
    mersis: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
