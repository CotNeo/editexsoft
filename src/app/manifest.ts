import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Entegrasyon Yazılımı`,
    short_name: siteConfig.name,
    description:
      "Pazaryerleri ve ön muhasebe programınızı birbirine bağlayan Windows entegrasyon yazılımı.",
    start_url: "/tr",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3563F0",
    lang: "tr-TR",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
