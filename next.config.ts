import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Kurulum dosyaları uzun süre önbelleklenebilir
        source: "/downloads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Eski / kısa yollar
      { source: "/indir", destination: "/tr/download", permanent: true },
      { source: "/fiyatlar", destination: "/tr/pricing", permanent: true },
      { source: "/iletisim", destination: "/tr/contact", permanent: true },
      { source: "/kilavuz", destination: "/tr/docs", permanent: true },
      { source: "/sss", destination: "/tr/faq", permanent: true },
    ];
  },
};

export default nextConfig;
