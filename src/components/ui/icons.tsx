import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconSync = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12a9 9 0 0 1 15.5-6.2M21 12a9 9 0 0 1-15.5 6.2" />
    <path d="M19 3v5h-5M5 21v-5h5" />
  </svg>
);

export const IconOrders = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16l-1.2 11a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 7Z" />
    <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
    <path d="M9.5 12.5h5" />
  </svg>
);

export const IconUpload = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 15V4m0 0L8 8m4-4 4 4" />
    <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V15" />
  </svg>
);

export const IconInvoice = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h9l4 4v13.2a.8.8 0 0 1-1.2.7L16 20l-2 1.2-2-1.2-2 1.2-2-1.2-1.8 1.1A.8.8 0 0 1 5 20.2V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v4h4M9 10h6M9 14h4" />
  </svg>
);

export const IconTruck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H14v11H3V6.5Z" />
    <path d="M14 9h3.6a2 2 0 0 1 1.7 1l1.7 2.8V16h-7V9Z" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17.5" cy="18" r="2" />
  </svg>
);

export const IconPrice = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.6 11.4 12.5 3.3A2 2 0 0 0 11.1 2.7H4.7A1.7 1.7 0 0 0 3 4.4v6.4c0 .5.2 1 .6 1.4l8.1 8.1a2 2 0 0 0 2.8 0l6.1-6.1a2 2 0 0 0 0-2.8Z" />
    <circle cx="7.8" cy="7.8" r="1.4" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 16v-4M12.5 16V8M17 16v-6" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2.8 19.5 6v6c0 4.3-3 7.8-7.5 9.2C7.5 19.8 4.5 16.3 4.5 12V6L12 2.8Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </svg>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.76 1.44 5.32L2 22.5l5.5-1.6a9.8 9.8 0 0 0 4.54 1.12h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm0 17.98h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.08.9.83-3-.2-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.51 3.67-8.18 8.18-8.18a8.13 8.13 0 0 1 5.78 2.4 8.1 8.1 0 0 1 2.39 5.78c0 4.51-3.67 8.08-8.19 8.08Zm4.49-6.05c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.2}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
  </svg>
);

export const IconChevronDown = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconChevronRight = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconDownload = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" />
    <path d="M4 16v2.2A2.8 2.8 0 0 0 6.8 21h10.4A2.8 2.8 0 0 0 20 18.2V16" />
  </svg>
);

export const IconWindows = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M3 5.6 10.2 4.6v6.9H3V5.6Zm0 12.8 7.2 1v-6.8H3v5.8Zm8.1 1.1L21 21V12.5h-9.9v7ZM11.1 4.4v7.1H21V3l-9.9 1.4Z" />
  </svg>
);

export const IconSun = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

export const IconMoon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" />
  </svg>
);

export const IconGlobe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9h17M3.5 15h17" />
    <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7.5 7.1 5a1.6 1.6 0 0 0 1.8 0l7.1-5" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.2 3.5h2.4l1.5 3.7-1.9 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-1.9 3.7 1.5v2.4a2.2 2.2 0 0 1-2.4 2.2C10.4 17.4 6.6 13.6 4 6.1a2.2 2.2 0 0 1 2.2-2.6Z" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.2V12l3.2 2" />
  </svg>
);

export const IconBook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5.2A2.2 2.2 0 0 1 6.2 3H19v15.5H6.2A2.2 2.2 0 0 0 4 20.7V5.2Z" />
    <path d="M4 20.7A2.2 2.2 0 0 1 6.2 18.5H19V21H6.2" />
  </svg>
);

export const IconScreen = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4" width="19" height="13" rx="2.2" />
    <path d="M8.5 20.5h7M12 17v3.5" />
  </svg>
);

export const IconSearch = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5 13.8 9 19 10.8 13.8 12.6 12 18l-1.8-5.4L5 10.8 10.2 9 12 3.5Z" />
    <path d="M18.5 3.5v3M20 5h-3" />
  </svg>
);

export const IconInfo = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 7.8h.01" />
  </svg>
);

export const IconAlert = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20.2h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9.5v4M12 17h.01" />
  </svg>
);

export const IconBulb = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9.2 17.5a6 6 0 1 1 5.6 0v1.7a1.6 1.6 0 0 1-1.6 1.6h-2.4a1.6 1.6 0 0 1-1.6-1.6v-1.7Z" />
    <path d="M9.6 17.5h4.8" />
  </svg>
);

export const IconLinkedin = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.83v1.54h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21H18v-5.1c0-1.22-.02-2.78-1.75-2.78-1.75 0-2.02 1.32-2.02 2.69V21H9.5V9.75Z" />
  </svg>
);

export const IconYoutube = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.4 6.6h.01" />
  </svg>
);

export const IconX = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 3h3.2l-7 8L22 21h-6.4l-4.6-6-5.3 6H2.5l7.5-8.6L2 3h6.6l4.2 5.5L17.5 3Zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3Z" />
  </svg>
);

export const iconMap = {
  sync: IconSync,
  orders: IconOrders,
  upload: IconUpload,
  invoice: IconInvoice,
  truck: IconTruck,
  price: IconPrice,
  chart: IconChart,
  shield: IconShield,
  whatsapp: IconWhatsapp,
  book: IconBook,
  screen: IconScreen,
} as const;

export type IconName = keyof typeof iconMap;
