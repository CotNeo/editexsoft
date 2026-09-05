import { code, list, note, p, steps, table } from "@/i18n/types";
import type { Dictionary } from "@/i18n/dictionaries/tr";

export const en: Dictionary = {
  meta: {
    siteName: "EditexSoft",
    defaultTitle: "EditexSoft — Marketplace & ERP Integration Software",
    tagline: "Every sales channel and your back office, in one place",
    description:
      "EditexSoft is a Windows desktop integration app that connects Trendyol, Hepsiburada, N11, Amazon and 20+ channels to your ERP or accounting software. Automate orders, stock, pricing and invoicing.",
    keywords: [
      "marketplace integration",
      "e-commerce integration software",
      "Trendyol integration",
      "Hepsiburada integration",
      "stock and price sync",
      "ERP integration",
      "e-invoice integration",
      "EditexSoft",
    ],
  },

  nav: {
    features: "Features",
    integrations: "Integrations",
    pricing: "Pricing",
    download: "Download",
    docs: "User Guide",
    faq: "FAQ",
    contact: "Contact",
    login: "Sign in",
    cta: "Start free trial",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    changeLanguage: "Change language",
    skipToContent: "Skip to content",
  },

  common: {
    learnMore: "Learn more",
    getStarted: "Get started",
    contactSales: "Talk to sales",
    whatsappSupport: "WhatsApp support",
    whatsappCta: "Chat on WhatsApp",
    whatsappMessage: "Hello, I would like to learn more about the EditexSoft integration software.",
    month: "month",
    year: "year",
    monthly: "Monthly",
    yearly: "Yearly",
    popular: "Most popular",
    readMore: "Read more",
    download: "Download",
    lastUpdated: "Last updated",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    backHome: "Back to home",
    minutes: "min read",
    copy: "Copy",
    copied: "Copied",
    new: "New",
    soon: "Soon",
    active: "Live",
    all: "All",
  },

  home: {
    hero: {
      badge: "Desktop integration software for Windows",
      titleLine1: "All your sales channels",
      titleGradient: "in one app",
      description:
        "EditexSoft connects your marketplaces and online store to your ERP or accounting software. Orders land automatically, stock and prices update everywhere within seconds.",
      primaryCta: "Start free trial",
      secondaryCta: "Read the guide",
      perks: ["14-day free trial", "No credit card required", "Free setup assistance"],
      appWindowTitle: "EditexSoft Integration Console",
    },
    trust: {
      title: "Works with the leading marketplaces and accounting platforms",
    },
    stats: [
      { value: "20+", label: "Ready integrations" },
      { value: "5 min", label: "Average setup time" },
      { value: "60 sec", label: "Sync interval" },
      { value: "24/7", label: "WhatsApp support line" },
    ],
    features: {
      eyebrow: "What you can do",
      title: "An integration engine that ends manual data entry",
      description:
        "Reclaim the hours you spend copying orders, adjusting stock and updating prices. EditexSoft runs in the background so you can focus on selling.",
      items: [
        {
          icon: "orders",
          title: "Order synchronisation",
          description:
            "Orders from every marketplace arrive in one list and are pushed into your accounting software as receipts or invoices automatically.",
        },
        {
          icon: "sync",
          title: "Stock and price sync",
          description:
            "A single change in your ERP propagates to every connected channel within seconds, removing the risk of overselling.",
        },
        {
          icon: "upload",
          title: "Bulk product upload",
          description:
            "Send thousands of products with categories, variants and images from Excel or your ERP to marketplaces in one pass.",
        },
        {
          icon: "invoice",
          title: "e-Invoice & e-Archive",
          description:
            "Generate invoices for orders automatically, submit them through your integrator and deliver the PDF to the customer.",
        },
        {
          icon: "truck",
          title: "Shipping and labels",
          description:
            "Create shipping labels for your carriers, push tracking numbers back to the marketplace and follow delivery status.",
        },
        {
          icon: "price",
          title: "Smart pricing rules",
          description:
            "Define per-channel prices with rules that account for commission, shipping, VAT and your target profit margin.",
        },
        {
          icon: "chart",
          title: "Reporting and profitability",
          description:
            "See revenue, returns and net profit by channel, brand and product on one screen, and export to Excel.",
        },
        {
          icon: "shield",
          title: "Local and secure",
          description:
            "The app runs on your own machine. API keys are encrypted and your commercial data never sits on third-party servers.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Four steps to set up, automatic from then on",
      description:
        "No technical knowledge required. Our team joins you on a remote session during the initial setup.",
      steps: [
        {
          title: "Download the app",
          description:
            "Download the installer and run it on your Windows machine. Installation takes about two minutes.",
        },
        {
          title: "Connect your accounts",
          description:
            "Enter your marketplace API keys and accounting connection through the guided wizard.",
        },
        {
          title: "Match your products",
          description:
            "Match automatically by SKU or barcode, then fix any leftovers with a single click.",
        },
        {
          title: "Let it run",
          description:
            "Synchronisation runs in the background on your chosen interval, and alerts you the moment something fails.",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "Integrations",
      title: "It speaks to the tools you already use",
      description:
        "Marketplaces, e-commerce platforms, ERP and accounting systems, carriers and e-invoice providers.",
      cta: "See all integrations",
    },
    security: {
      eyebrow: "Security & compliance",
      title: "Your commercial data stays under your control",
      description:
        "EditexSoft is a desktop application, so your data remains on your own device or server.",
      items: [
        {
          title: "GDPR/KVKK-aligned processing",
          description: "Personal data is processed locally and only for the purpose of fulfilling orders.",
        },
        {
          title: "Encrypted credentials",
          description: "API keys and passwords are stored encrypted with AES-256.",
        },
        {
          title: "Automatic backups",
          description: "Your settings and product mappings are backed up every day.",
        },
        {
          title: "Detailed audit log",
          description: "Every synchronisation step is recorded and can be reviewed later.",
        },
      ],
    },
    support: {
      eyebrow: "Support",
      title: "A real person when you get stuck",
      description:
        "No long support forms. Message our WhatsApp line and our team will connect remotely to help.",
      cards: [
        {
          icon: "whatsapp",
          title: "WhatsApp support line",
          description: "During business hours we reply in about five minutes.",
          action: "Start a chat",
        },
        {
          icon: "screen",
          title: "Remote setup assistance",
          description: "We walk you through installation and matching over a screen-share session.",
          action: "Book a session",
        },
        {
          icon: "book",
          title: "User guide",
          description: "Step-by-step instructions, screenshots and common error fixes.",
          action: "Open the guide",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Pricing",
      title: "Plans that match the size of your business",
      description: "No hidden fees. Upgrade, downgrade or cancel whenever you like.",
      cta: "Compare plans",
    },
    faqSection: {
      eyebrow: "Frequently asked questions",
      title: "Questions you may have",
      cta: "See all questions",
    },
    cta: {
      title: "Set up your integration today, focus on selling tomorrow",
      description:
        "Try every feature free for 14 days. Setup and product matching support is on us.",
      primary: "Download the app",
      secondary: "Request a demo",
    },
  },

  featuresPage: {
    eyebrow: "Features",
    title: "One app for every step of the integration",
    description:
      "From uploading products to issuing invoices, from stock sync to shipping labels — run your whole e-commerce operation through EditexSoft.",
    groups: [
      {
        icon: "sync",
        title: "Synchronisation",
        description: "Automate the flow of data between channels in minutes.",
        items: [
          "Two-way stock quantity and price sync",
          "Per-channel stock allocation and reserve rules",
          "Scheduled jobs with sync intervals down to 60 seconds",
          "Change-based smart sync for low API consumption",
          "Automatic retry and alerting on failure",
        ],
      },
      {
        icon: "orders",
        title: "Order management",
        description: "Collect orders from every channel in a single list.",
        items: [
          "Unified order list with filters",
          "Status updates (preparing, shipped, delivered)",
          "Cancellation and return tracking",
          "Automatic transfer to your accounting software",
          "Bulk packing and picking list output",
        ],
      },
      {
        icon: "upload",
        title: "Products and catalogue",
        description: "Move thousands of products to your channels without errors.",
        items: [
          "Bulk upload via Excel template or straight from your ERP",
          "Variant, colour/size and image management",
          "Channel category mapping and required attribute filling",
          "Automatic matching by barcode or SKU",
          "Per-channel description templates",
        ],
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description: "Put e-invoice and e-archive processes on autopilot.",
        items: [
          "Automatic invoice creation on order approval",
          "Connection to your e-invoice provider",
          "Invoice PDF upload back to the marketplace",
          "Return invoice and cancellation scenarios",
          "Serial and invoice number tracking",
        ],
      },
      {
        icon: "truck",
        title: "Shipping and logistics",
        description: "Handle fulfilment with a single click.",
        items: [
          "Label generation for your contracted carriers",
          "Bulk label printing with thermal printer support",
          "Automatic tracking number push to the marketplace",
          "Delivery status monitoring",
          "Shipping cost reflected in profitability reports",
        ],
      },
      {
        icon: "chart",
        title: "Reporting",
        description: "See where you are actually making money.",
        items: [
          "Sales reports by channel, brand, category and product",
          "Net profit after commission, shipping and VAT",
          "Return rates and reason analysis",
          "Stock turnover and low-stock alerts",
          "Excel and CSV export",
        ],
      },
    ],
    highlight: {
      title: "Built with performance in mind",
      description:
        "EditexSoft is engineered to stay responsive even for stores with very large catalogues.",
      metrics: [
        { value: "250,000+", label: "Supported products" },
        { value: "10", label: "Concurrent channel connections" },
        { value: "< 1%", label: "Average sync error rate" },
      ],
    },
  },

  integrationsPage: {
    eyebrow: "Integrations",
    title: "Channels and systems you can connect",
    description:
      "Cannot find the system you use? Get in touch — we can build integrations for most platforms that expose an API.",
    requestTitle: "Missing an integration?",
    requestDescription:
      "Send us a request for the software you use and we will share our development timeline with you.",
    requestCta: "Request an integration",
    categories: [
      {
        id: "marketplaces",
        title: "Marketplaces",
        description: "Leading sales channels in Türkiye and abroad.",
        items: [
          { name: "Trendyol", soon: false },
          { name: "Hepsiburada", soon: false },
          { name: "N11", soon: false },
          { name: "Amazon", soon: false },
          { name: "Çiçeksepeti", soon: false },
          { name: "PTT AVM", soon: false },
          { name: "Pazarama", soon: false },
          { name: "İdefix", soon: false },
          { name: "Modanisa", soon: false },
          { name: "Etsy", soon: false },
          { name: "eBay", soon: true },
          { name: "AliExpress", soon: true },
        ],
      },
      {
        id: "ecommerce",
        title: "E-commerce platforms",
        description: "Connect your own website to the same stock pool.",
        items: [
          { name: "Ticimax", soon: false },
          { name: "İdeaSoft", soon: false },
          { name: "T-Soft", soon: false },
          { name: "Shopify", soon: false },
          { name: "WooCommerce", soon: false },
          { name: "OpenCart", soon: false },
          { name: "PrestaShop", soon: true },
          { name: "Magento", soon: true },
        ],
      },
      {
        id: "erp",
        title: "Accounting and ERP",
        description: "Orders flow straight into your accounting software.",
        items: [
          { name: "Logo Tiger / Go", soon: false },
          { name: "Mikro", soon: false },
          { name: "Netsis", soon: false },
          { name: "Nebim V3", soon: false },
          { name: "Paraşüt", soon: false },
          { name: "Zirve", soon: false },
          { name: "ETA", soon: false },
          { name: "Akınsoft", soon: false },
          { name: "Dia", soon: true },
        ],
      },
      {
        id: "shipping",
        title: "Carriers",
        description: "Label generation and shipment tracking.",
        items: [
          { name: "Yurtiçi Kargo", soon: false },
          { name: "Aras Kargo", soon: false },
          { name: "MNG Kargo", soon: false },
          { name: "Sürat Kargo", soon: false },
          { name: "PTT Kargo", soon: false },
          { name: "Hepsijet", soon: false },
          { name: "Trendyol Express", soon: false },
          { name: "UPS", soon: true },
        ],
      },
      {
        id: "einvoice",
        title: "e-Invoice providers",
        description: "Invoice creation and tax authority submission.",
        items: [
          { name: "Uyumsoft", soon: false },
          { name: "İzibiz", soon: false },
          { name: "Foriba", soon: false },
          { name: "Nes Bilgi", soon: false },
          { name: "Turkcell e-Şirket", soon: true },
        ],
      },
    ],
  },

  pricingPage: {
    eyebrow: "Pricing",
    title: "Transparent, flexible subscriptions",
    description:
      "Every plan starts with a 14-day free trial. Setup and training support is included in all plans.",
    currency: "USD",
    locale: "en-US",
    billingMonthly: "Monthly",
    billingYearly: "Yearly",
    yearlyBadge: "2 months free",
    perMonth: "/mo",
    billedYearly: "billed annually",
    billedMonthly: "billed monthly",
    vatNote: "Prices exclude VAT.",
    customPrice: "Custom",
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "For sellers starting out on a single channel.",
        monthly: 29,
        yearly: 290,
        custom: false,
        popular: false,
        cta: "Start free",
        features: [
          "1 marketplace connection",
          "Up to 1,000 products",
          "500 orders per month",
          "Stock and price synchronisation",
          "Product upload via Excel",
          "Email support",
        ],
      },
      {
        id: "pro",
        name: "Professional",
        tagline: "For growing stores selling across channels.",
        monthly: 59,
        yearly: 590,
        custom: false,
        popular: true,
        cta: "Start free",
        features: [
          "5 marketplaces + 1 online store",
          "Up to 25,000 products",
          "5,000 orders per month",
          "Accounting / ERP integration",
          "e-Invoice and carrier integration",
          "Smart pricing rules",
          "Priority WhatsApp support",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "For high volume operations with custom processes.",
        monthly: 0,
        yearly: 0,
        custom: true,
        popular: false,
        cta: "Get a quote",
        features: [
          "Unlimited channels and products",
          "Custom ERP field mapping",
          "Multi-store / multi-company management",
          "Custom development and API access",
          "Dedicated account manager",
          "Priority support with SLA",
        ],
      },
    ],
    comparisonTitle: "Plan comparison",
    comparison: [
      {
        group: "Channels",
        rows: [
          { label: "Marketplace connections", values: ["1", "5", "Unlimited"] },
          { label: "Online store", values: ["—", "1", "Unlimited"] },
          { label: "Multi-store", values: ["—", "2", "Unlimited"] },
        ],
      },
      {
        group: "Capacity",
        rows: [
          { label: "Products", values: ["1,000", "25,000", "Unlimited"] },
          { label: "Monthly orders", values: ["500", "5,000", "Unlimited"] },
          { label: "Sync interval", values: ["15 min", "60 sec", "60 sec"] },
        ],
      },
      {
        group: "Modules",
        rows: [
          { label: "Stock & price sync", values: ["yes", "yes", "yes"] },
          { label: "Bulk product upload", values: ["yes", "yes", "yes"] },
          { label: "Accounting / ERP", values: ["no", "yes", "yes"] },
          { label: "e-Invoice & e-Archive", values: ["no", "yes", "yes"] },
          { label: "Shipping & labels", values: ["no", "yes", "yes"] },
          { label: "Smart pricing rules", values: ["no", "yes", "yes"] },
          { label: "Profitability reports", values: ["no", "yes", "yes"] },
          { label: "API access", values: ["no", "no", "yes"] },
        ],
      },
      {
        group: "Support",
        rows: [
          { label: "User guide", values: ["yes", "yes", "yes"] },
          { label: "Email support", values: ["yes", "yes", "yes"] },
          { label: "WhatsApp support", values: ["no", "yes", "yes"] },
          { label: "Remote setup", values: ["no", "yes", "yes"] },
          { label: "Dedicated manager", values: ["no", "no", "yes"] },
        ],
      },
    ],
    faqTitle: "Subscription FAQ",
    faq: [
      {
        question: "Will I be charged automatically when the trial ends?",
        answer:
          "No. If you have not entered payment details by the end of the 14-day trial, your account simply reverts to the free plan and no charge is made.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Yes. You can upgrade or downgrade at any time from the panel, and the difference is prorated across the remaining days.",
      },
      {
        question: "How much do I save by paying annually?",
        answer: "Annual billing costs ten months instead of twelve, so two months are free.",
      },
      {
        question: "Do you issue invoices?",
        answer:
          "Yes, an invoice is issued for every payment and sent to your email address.",
      },
    ],
  },

  downloadPage: {
    eyebrow: "Download centre",
    title: "Download the EditexSoft desktop app",
    description:
      "Download the Windows installer and use every feature free for 14 days.",
    downloadCta: "Download for Windows (.exe)",
    versionLabel: "Version",
    releaseLabel: "Released",
    sizeLabel: "Size",
    checksumLabel: "SHA-256",
    checksumHelp:
      "To verify the integrity of the file you downloaded, run the following command in PowerShell.",
    checksumCommand: "Get-FileHash .\\EditexSoftSetup.exe -Algorithm SHA256",
    pendingNotice:
      "The installer link is not configured yet. Set the NEXT_PUBLIC_DOWNLOAD_URL environment variable once the file is published.",
    requirementsTitle: "System requirements",
    requirements: [
      { label: "Operating system", value: "Windows 10 / 11 (64-bit) or Windows Server 2016+" },
      { label: "Processor", value: "Intel Core i3 or newer (i5 recommended)" },
      { label: "Memory (RAM)", value: "4 GB minimum (8 GB recommended)" },
      { label: "Disk space", value: "1 GB free" },
      { label: "Runtime", value: ".NET 8 Runtime (bundled with the installer)" },
      { label: "Network", value: "Always-on connection with outbound 443/TCP open" },
    ],
    nextStepsTitle: "After downloading",
    nextSteps: [
      "Run the installer as administrator.",
      "Enter your licence key or start the free trial.",
      "Configure your marketplace and accounting connections in the wizard.",
      "Run the first synchronisation — message us on WhatsApp if anything looks off.",
    ],
    guideCta: "Read the installation guide",
    supportCta: "Request setup assistance",
    changelogTitle: "Release notes",
    changelog: [
      {
        version: "3.4.2",
        date: "18 Aug 2026",
        items: [
          "Adapted to the new Trendyol order API version.",
          "Bulk product upload uses 30% less memory.",
          "Fixed thermal printer scaling on shipping labels.",
        ],
      },
      {
        version: "3.4.0",
        date: "02 Jul 2026",
        items: [
          "Added the smart pricing rules module.",
          "Released the Paraşüt integration.",
          "Added dark theme support.",
        ],
      },
      {
        version: "3.3.5",
        date: "14 May 2026",
        items: [
          "Improved e-archive invoice cancellation scenarios.",
          "Fixed a session error when switching between multiple stores.",
        ],
      },
    ],
  },

  docs: {
    eyebrow: "User guide",
    title: "EditexSoft user guide",
    description:
      "Everything from installation to your first sync, from invoice settings to troubleshooting.",
    sidebarTitle: "Topics",
    searchPlaceholder: "Search the guide...",
    noResults: "No topic matched your search.",
    helpTitle: "Still stuck?",
    helpDescription: "Message our WhatsApp support line and our team will get back to you shortly.",
    categories: [
      { title: "Getting started", slugs: ["installation", "first-setup"] },
      { title: "Connections", slugs: ["connect-marketplace", "product-matching"] },
      { title: "Daily use", slugs: ["order-flow", "invoicing"] },
      { title: "Maintenance", slugs: ["troubleshooting", "updates"] },
    ],
    articles: {
      installation: {
        title: "Installation",
        description: "How to install EditexSoft on your Windows machine.",
        readingTime: "4",
        sections: [
          {
            heading: "System requirements",
            body: [
              p("Before you begin, make sure your computer meets the following requirements."),
              table(
                ["Component", "Minimum", "Recommended"],
                [
                  ["Operating system", "Windows 10 64-bit", "Windows 11 64-bit"],
                  ["RAM", "4 GB", "8 GB"],
                  ["Disk", "1 GB", "5 GB"],
                  ["Internet", "8 Mbps", "20 Mbps"],
                ],
              ),
              note(
                "info",
                "Server installation",
                "We recommend installing the app on a machine that stays powered on around the clock. Synchronisation does not run while the app is closed.",
              ),
            ],
          },
          {
            heading: "Installation steps",
            body: [
              steps(
                "Download EditexSoftSetup.exe from the download page.",
                "Right-click the file and choose Run as administrator.",
                "If Windows SmartScreen appears, choose More info > Run anyway.",
                "Pick the installation folder (default: C:\\Program Files\\EditexSoft).",
                "When the installer finishes, tick Launch application and click Finish.",
              ),
              note(
                "tip",
                "Antivirus warnings",
                "Some antivirus tools quarantine newly signed installers. Add the EditexSoft installation folder to your exclusion list.",
              ),
            ],
          },
          {
            heading: "Verifying the installation",
            body: [
              p("The System Check screen appears the first time the app starts. Make sure every row is green."),
              list(
                ".NET 8 runtime installed",
                "Database file created",
                "Internet connection and port 443 reachable",
                "Licence server reachable",
              ),
            ],
          },
        ],
      },
      "first-setup": {
        title: "Initial setup",
        description: "Licence activation, company details and general preferences.",
        readingTime: "5",
        sections: [
          {
            heading: "Licence activation",
            body: [
              p("The licence screen appears the first time you open the app. You have two options:"),
              list(
                "Start the 14-day free trial — only an email address is required.",
                "Enter a licence key — paste the key emailed to you after subscribing.",
              ),
              note(
                "warn",
                "Licences are bound to a device",
                "Your licence key is tied to the machine you install it on. Contact support to request a licence transfer before changing devices.",
              ),
            ],
          },
          {
            heading: "Company details",
            body: [
              p("Fill in the details that appear on invoices and reports under Settings > Company."),
              list(
                "Legal name, tax office and tax number",
                "Address and contact details",
                "Default currency and VAT rate",
                "Logo for invoice output",
              ),
            ],
          },
          {
            heading: "General preferences",
            body: [
              p("Set up how the app runs under Settings > General."),
              table(
                ["Setting", "Description", "Recommended"],
                [
                  ["Sync interval", "How often channels are polled", "60 seconds"],
                  ["Start with Windows", "Runs the app when the machine boots", "On"],
                  ["Run in background", "Minimises to the system tray on close", "On"],
                  ["Error notifications", "Sends an email when a job fails", "On"],
                ],
              ),
            ],
          },
        ],
      },
      "connect-marketplace": {
        title: "Connecting a marketplace",
        description: "Getting API keys and setting up a channel connection.",
        readingTime: "6",
        sections: [
          {
            heading: "Connection wizard",
            body: [
              p("Go to Channels > Add new channel in the left menu and pick the marketplace you want to connect."),
              steps(
                "Open the Integration / API section of the marketplace seller panel.",
                "Create a new API key and secret.",
                "Note your seller ID or store number.",
                "Paste them into the matching fields in EditexSoft and press Test connection.",
                "If the test succeeds, press Save to activate the channel.",
              ),
            ],
          },
          {
            heading: "Per-channel settings",
            body: [
              p("You can define separate operating rules for each channel."),
              list(
                "Stock push: real stock, fixed quantity or a percentage",
                "Price push: list price, discounted price or a pricing rule",
                "Order fetch start date",
                "Automatic approval and carrier mapping",
              ),
              note(
                "tip",
                "Start in read-only mode",
                "For the first connection, enable Read only mode to verify the incoming data, then turn on write operations.",
              ),
            ],
          },
          {
            heading: "Common connection errors",
            body: [
              table(
                ["Error", "Cause", "Fix"],
                [
                  ["401 Unauthorized", "API key wrong or expired", "Generate a new key in the seller panel"],
                  ["403 Forbidden", "Permission not granted", "Enable integration access in the seller panel"],
                  ["429 Too Many Requests", "API rate limit exceeded", "Increase the sync interval"],
                  ["Timeout", "Network or firewall block", "Check port 443 and proxy settings"],
                ],
              ),
            ],
          },
        ],
      },
      "product-matching": {
        title: "Product matching",
        description: "Linking your ERP products to channel listings.",
        readingTime: "5",
        sections: [
          {
            heading: "How matching works",
            body: [
              p("EditexSoft links a product in your ERP or accounting system to a channel listing through a key. The key is either the barcode or the SKU."),
              note(
                "warn",
                "Barcodes must be unique",
                "Using the same barcode on more than one product causes stock to be deducted from the wrong item. Verify barcode uniqueness before uploading.",
              ),
            ],
          },
          {
            heading: "Automatic matching",
            body: [
              steps(
                "Open the Products > Matching screen.",
                "Choose Barcode or SKU as the key field.",
                "Press Match automatically.",
                "Unmatched records are listed under the Pending tab.",
                "Find pending records with the search box and match them manually.",
              ),
            ],
          },
          {
            heading: "Products with variants",
            body: [
              p("For variants such as colour and size, each variant is matched as its own row."),
              list(
                "Each variant must have its own SKU and barcode in the ERP.",
                "On the channel side variants belong to the same product group.",
                "Deleting the parent product removes all variant matches.",
              ),
              code("ERP: TS-001-CRM-M  ->  Channel: 8680000000123 (Cream / M)"),
            ],
          },
        ],
      },
      "order-flow": {
        title: "Order flow",
        description: "The path an order takes from channel to accounting.",
        readingTime: "5",
        sections: [
          {
            heading: "Steps in the flow",
            body: [
              steps(
                "The new order is fetched from the channel and appears in the Orders screen.",
                "Stock is reserved and deducted from the other channels.",
                "The order is pushed to your accounting software as an order slip or invoice.",
                "A shipping label is generated and printed.",
                "The tracking number is reported back to the channel and the order moves to Shipped.",
                "The invoice is created and sent to your e-invoice provider.",
              ),
            ],
          },
          {
            heading: "Order statuses",
            body: [
              table(
                ["Status", "Meaning"],
                [
                  ["New", "Fetched from the channel, not processed yet"],
                  ["Approved", "Stock reserved, moved into preparation"],
                  ["Packed", "Picking and packing complete"],
                  ["Shipped", "Tracking number sent to the channel"],
                  ["Delivered", "Carrier confirmed delivery"],
                  ["Cancelled / Returned", "Order cancelled or a return has started"],
                ],
              ),
            ],
          },
          {
            heading: "Bulk actions",
            body: [
              p("Select several rows in the order list to run bulk actions."),
              list(
                "Bulk approve and pack",
                "Bulk label generation and printing",
                "Picking list output",
                "Bulk invoice creation",
              ),
              note(
                "tip",
                "Printer setup",
                "If you use a thermal label printer, select the 100x150 mm label size under Settings > Printer.",
              ),
            ],
          },
        ],
      },
      invoicing: {
        title: "Invoice settings",
        description: "Configuring e-invoice and e-archive submission.",
        readingTime: "4",
        sections: [
          {
            heading: "Provider connection",
            body: [
              p("Choose your provider and enter your credentials under Settings > e-Invoice."),
              list(
                "Provider username and password",
                "Test or live environment selection",
                "Invoice series and starting number",
                "Default delivery method for e-archive (email / paper)",
              ),
              note(
                "warn",
                "Use the test environment first",
                "Send at least one invoice in the test environment to validate your template before switching to live.",
              ),
            ],
          },
          {
            heading: "Automatic invoice rules",
            body: [
              p("Decide when the invoice should be created."),
              table(
                ["Trigger", "When to use it"],
                [
                  ["On order approval", "Stores that invoice as early as possible"],
                  ["On shipment", "The most commonly used option"],
                  ["Manual", "When you want to review before invoicing"],
                ],
              ),
            ],
          },
          {
            heading: "Returns and cancellations",
            body: [
              list(
                "A return invoice can be created automatically when a return is approved.",
                "E-archive invoices can be cancelled within 8 days.",
                "Cancelling an e-invoice requires buyer rejection or a return invoice.",
              ),
            ],
          },
        ],
      },
      troubleshooting: {
        title: "Troubleshooting",
        description: "Common errors and how to resolve them.",
        readingTime: "6",
        sections: [
          {
            heading: "Synchronisation is not running",
            body: [
              steps(
                "Confirm the app is open and running in the system tray.",
                "Check that the connection status is green on the Channels screen.",
                "Review the latest error message in the Logs screen.",
                "Verify your internet connection and that port 443 is open.",
                "If the problem persists, send the log file to our support line.",
              ),
              code("Log location: C:\\ProgramData\\EditexSoft\\logs\\sync-YYYYMMDD.log"),
            ],
          },
          {
            heading: "Stock looks wrong",
            body: [
              list(
                "Check whether the same barcode is used on more than one product.",
                "Review whether a fixed quantity or percentage rule is set for the channel.",
                "Account for stock reserved by pending orders.",
                "If you adjusted stock manually, compare it with the value in your ERP.",
              ),
            ],
          },
          {
            heading: "Invoices are not being sent",
            body: [
              table(
                ["Error", "Fix"],
                [
                  ["Taxpayer not found", "Check the buyer tax or ID number"],
                  ["Schema error", "Validate your invoice template with your provider"],
                  ["Insufficient credit", "Top up credits in your provider panel"],
                  ["Timeout", "Check your provider service status"],
                ],
              ),
            ],
          },
          {
            heading: "Contacting support",
            body: [
              p("To help us resolve your issue faster, please share the following:"),
              list(
                "App version (Help > About)",
                "A screenshot of the error",
                "The relevant log file",
                "The affected channel and order or product number",
              ),
            ],
          },
        ],
      },
      updates: {
        title: "Updates and backups",
        description: "Moving to a new version and backing up your data.",
        readingTime: "3",
        sections: [
          {
            heading: "Automatic updates",
            body: [
              p("The app checks for a new version at startup. When an update is available a notification appears in the top right."),
              steps(
                "Click the notification and choose Download update.",
                "Once downloaded, the app closes itself and applies the update.",
                "Your settings and product matches are preserved.",
              ),
              note(
                "info",
                "For server installations",
                "In multi-user setups, apply updates outside business hours while all sessions are closed.",
              ),
            ],
          },
          {
            heading: "Backups",
            body: [
              p("The settings and matching database is backed up automatically every day."),
              code("Backup location: C:\\ProgramData\\EditexSoft\\backup\\"),
              list(
                "The last 30 days of backups are kept.",
                "You can take a manual backup from Settings > Backup.",
                "Copy the backup file to another device to restore it there.",
              ),
            ],
          },
        ],
      },
    },
  },

  faqPage: {
    eyebrow: "Frequently asked questions",
    title: "Common questions",
    description:
      "If you cannot find the answer you are looking for, reach us on our WhatsApp support line.",
    categories: [
      {
        title: "General",
        items: [
          {
            question: "What exactly does EditexSoft do?",
            answer:
              "EditexSoft is a Windows desktop application that synchronises product, stock, price and order data between your marketplaces or online store and your accounting/ERP software, in both directions. You no longer have to enter the same data into several panels by hand.",
          },
          {
            question: "Which operating systems does it support?",
            answer:
              "Windows 10 and Windows 11 (64-bit), plus Windows Server 2016 and newer. macOS and Linux builds are not planned at this time.",
          },
          {
            question: "Does the app need to stay open?",
            answer:
              "Yes. Synchronisation happens on the machine running the app, so we recommend installing it on a computer or server that stays powered on around the clock.",
          },
          {
            question: "How many stores or companies can I connect?",
            answer:
              "The Starter plan supports a single store. Professional supports two, and Enterprise supports unlimited stores and companies.",
          },
        ],
      },
      {
        title: "Setup and usage",
        items: [
          {
            question: "How long does setup take?",
            answer:
              "Installing the app takes about two minutes. Together with channel connections and product matching, a first-time setup usually takes 30 to 60 minutes. On request our team joins remotely and completes it with you.",
          },
          {
            question: "Do I need technical knowledge?",
            answer:
              "No. Every connection is configured through step-by-step wizards, and the guide includes illustrated walkthroughs for steps such as obtaining an API key.",
          },
          {
            question: "How do I import my existing products?",
            answer:
              "The app can read products directly from your ERP or accounting software, or you can bulk import them with our Excel template. Matching happens automatically by barcode or SKU.",
          },
          {
            question: "My accounting software is not listed. What can I do?",
            answer:
              "We can build integrations for most systems that expose an API or database access. Send us the name of the software through the contact form and we will share a feasibility assessment and timeline.",
          },
        ],
      },
      {
        title: "Security and data",
        items: [
          {
            question: "Where is my data stored?",
            answer:
              "Your product, order and customer data lives in a local database on the machine where the app is installed. We do not copy that data to our servers; only an anonymous device identifier is sent for licence validation.",
          },
          {
            question: "Are my API keys safe?",
            answer:
              "All credentials are stored encrypted with AES-256 on your device and masked in the interface.",
          },
          {
            question: "How is data protection compliance handled?",
            answer:
              "Personal data is processed locally and solely for order fulfilment. Our disclosure notice and processing principles are on the KVKK page.",
          },
        ],
      },
      {
        title: "Subscription and support",
        items: [
          {
            question: "Is there a free trial?",
            answer:
              "Yes. You can use every feature for 14 days without entering payment details.",
          },
          {
            question: "How do I cancel my subscription?",
            answer:
              "You can cancel with one click from your membership panel. After cancelling you keep using the app until the end of the current billing period.",
          },
          {
            question: "How does support work?",
            answer:
              "On the Professional and Enterprise plans you can message our WhatsApp support line directly. Our average response time during business hours is five minutes, and we can connect remotely when needed.",
          },
          {
            question: "Are updates charged separately?",
            answer:
              "No. All version updates and new integrations are free while your subscription is active.",
          },
        ],
      },
    ],
  },

  contactPage: {
    eyebrow: "Contact",
    title: "How can we help?",
    description:
      "Reach us through any of the channels below for a demo, a quote or technical support.",
    channels: [
      {
        id: "whatsapp",
        title: "WhatsApp support line",
        description: "The fastest way to reach us.",
        action: "Start a chat",
      },
      {
        id: "email",
        title: "Email",
        description: "Write to us for detailed requests.",
        action: "Send an email",
      },
      {
        id: "phone",
        title: "Phone",
        description: "Call us during business hours.",
        action: "Call now",
      },
    ],
    infoTitle: "Details",
    workingHoursLabel: "Business hours",
    addressLabel: "Address",
    form: {
      title: "Send us a message",
      description: "Fill in the form and we will get back to you within one business day.",
      name: "Full name",
      namePlaceholder: "Your first and last name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      phone: "Phone",
      phonePlaceholder: "+90 5XX XXX XX XX",
      company: "Company",
      companyPlaceholder: "Your company name",
      subject: "Subject",
      subjects: [
        "Demo request",
        "Pricing quote",
        "Technical support",
        "Integration request",
        "Other",
      ],
      message: "Message",
      messagePlaceholder: "How can we help?",
      consent: "I consent to my personal data being processed under the privacy notice.",
      submit: "Send message",
      submitting: "Sending...",
      successTitle: "Message received",
      successMessage:
        "Your request has reached our team. We will get back to you within one business day.",
      errorTitle: "Message could not be sent",
      errorMessage:
        "Something went wrong. Please try again or message us on WhatsApp.",
      validation: {
        name: "Please enter your full name.",
        email: "Please enter a valid email address.",
        message: "Please write your message (at least 10 characters).",
        consent: "You need to give consent to continue.",
      },
    },
  },

  legal: {
    title: "Legal",
    updatedLabel: "Last updated",
    updatedAt: "1 September 2026",
    pages: {
      privacy: {
        title: "Privacy Policy",
        description: "How we collect, use and protect your personal data.",
        sections: [
          {
            heading: "Scope",
            body: [
              p("This Privacy Policy explains how personal data is processed through the editexsoft.com website and the EditexSoft desktop application."),
            ],
          },
          {
            heading: "Data we collect",
            body: [
              list(
                "Name, email, phone and company details submitted through the contact form",
                "Billing information collected during subscription",
                "Anonymous website usage statistics",
                "An anonymised device identifier used for licence validation",
              ),
            ],
          },
          {
            heading: "Why we process data",
            body: [
              list(
                "To respond to your requests and provide support",
                "To operate subscription and billing processes",
                "To improve the quality of our products and services",
                "To meet legal obligations",
              ),
            ],
          },
          {
            heading: "Data storage",
            body: [
              p("Product, order and customer data processed by the desktop application is stored on the user's own device and is not transmitted to us. Data submitted through the website is retained only as long as needed for its purpose."),
            ],
          },
          {
            heading: "Your rights",
            body: [
              p("Contact us to exercise your rights under applicable data protection law, including Turkish Law No. 6698 (KVKK)."),
            ],
          },
        ],
      },
      terms: {
        title: "Terms of Use",
        description: "Terms governing use of the website and the software.",
        sections: [
          {
            heading: "Acceptance",
            body: [
              p("By using this website and installing the EditexSoft software you agree to the terms set out below."),
            ],
          },
          {
            heading: "Licence",
            body: [
              p("EditexSoft is not sold; the right to use it is licensed for the duration of your subscription."),
              list(
                "The licence is limited to the device and user count of the purchased plan.",
                "Accessing the source code or reverse engineering the software is prohibited.",
                "Transferring the licence to a third party requires our written approval.",
              ),
            ],
          },
          {
            heading: "User obligations",
            body: [
              list(
                "Comply with the terms of your marketplace and provider accounts",
                "Keep your API keys secure",
                "Do not use the software for unlawful purposes",
              ),
            ],
          },
          {
            heading: "Limitation of liability",
            body: [
              p("We accept no direct liability for disruptions caused by outages or API changes at third-party services such as marketplaces, invoice providers or carriers. The software is provided with the care reasonably expected in the industry."),
            ],
          },
          {
            heading: "Changes",
            body: [p("These terms may be updated from time to time. The current version is published on this page.")],
          },
        ],
      },
      kvkk: {
        title: "KVKK Disclosure Notice",
        description: "Data controller notice under Turkish Law No. 6698.",
        sections: [
          {
            heading: "Data controller",
            body: [
              p("Under Turkish Law No. 6698 on the Protection of Personal Data, the data controller is EditexSoft Yazılım."),
            ],
          },
          {
            heading: "Personal data processed",
            body: [
              list(
                "Identity and contact details (name, surname, email, phone)",
                "Customer transaction data (subscription and invoice records)",
                "Transaction security data (log records)",
              ),
            ],
          },
          {
            heading: "Purposes and legal basis",
            body: [
              p("Your personal data is processed on the legal grounds of establishing and performing a contract, legitimate interest, and complying with legal obligations."),
            ],
          },
          {
            heading: "Transfers",
            body: [
              p("Your data may be shared with authorised public bodies and our service providers only to the extent required by law and for the provision of the service."),
            ],
          },
          {
            heading: "Your rights as a data subject",
            body: [
              list(
                "Learn whether your personal data is processed",
                "Request information about the processing",
                "Request correction of incomplete or inaccurate data",
                "Request erasure or destruction",
                "Claim compensation for damages",
              ),
              p("You can send your requests to our support email address."),
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description: "Information about the cookies used on our website.",
        sections: [
          {
            heading: "What is a cookie?",
            body: [p("Cookies are small text files that websites store in your browser.")],
          },
          {
            heading: "Cookies we use",
            body: [
              table(
                ["Type", "Purpose", "Duration"],
                [
                  ["Essential", "Remembering language and theme preference", "1 year"],
                  ["Performance", "Anonymous usage statistics", "Session / 1 year"],
                ],
              ),
              p("We do not use third-party advertising or profiling cookies on this site."),
            ],
          },
          {
            heading: "Managing cookies",
            body: [
              p("You can delete or block cookies from your browser settings. Blocking essential cookies may cause some features to stop working."),
            ],
          },
        ],
      },
      refund: {
        title: "Cancellation and Refund Policy",
        description: "How subscription cancellation and refunds work.",
        sections: [
          {
            heading: "Trial period",
            body: [
              p("No charge is made during the 14-day free trial and you can stop at any time."),
            ],
          },
          {
            heading: "Cancelling a subscription",
            body: [
              list(
                "You can cancel with one click from your membership panel.",
                "Service continues until the end of the current billing period.",
                "No charge is made for the following period.",
              ),
            ],
          },
          {
            heading: "Refunds",
            body: [
              p("Customers on an annual subscription are entitled to an unconditional refund if they request it within the first 14 days. After that period, a prorated refund for the unused term may be considered."),
            ],
          },
          {
            heading: "How to apply",
            body: [
              p("Send refund requests to our support email address together with your invoice details. Requests are resolved within 14 business days."),
            ],
          },
        ],
      },
    },
  },

  footer: {
    description:
      "EditexSoft is marketplace and ERP integration software that brings your entire e-commerce operation into one app.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Integrations", href: "/integrations" },
          { label: "Pricing", href: "/pricing" },
          { label: "Download", href: "/download" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "User guide", href: "/docs" },
          { label: "FAQ", href: "/faq" },
          { label: "Release notes", href: "/download#changelog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Use", href: "/legal/terms" },
          { label: "KVKK Notice", href: "/legal/kvkk" },
          { label: "Cookie Policy", href: "/legal/cookies" },
          { label: "Cancellation & Refund", href: "/legal/refund" },
        ],
      },
    ],
    contactTitle: "Contact",
    rights: "All rights reserved.",
    madeIn: "Made in Türkiye",
  },

  landing: {
    meta: {
      brand: "EDITEXSOFT",
      sub: "INTEGRATION SYSTEM",
      est: "EST. 2019",
      platform: "WIN 10 / 11 / SERVER",
    },
    hero: {
      index: "00",
      label: "INTRO",
      line1: "ONE LINE",
      line2: "BETWEEN THE",
      line3: "MARKETPLACE",
      line4: "AND THE LEDGER",
      lede: "Orders, stock, prices, invoices. Four data sets, twenty-plus channels, one direction. No copy-paste — an unbroken line.",
      primary: "DOWNLOAD THE APP",
      secondary: "READ THE GUIDE",
      specs: {
        version: "VERSION",
        platform: "PLATFORM",
        platformValue: "WINDOWS 64-BIT",
        setup: "SETUP",
        setupValue: "≈ 2 MINUTES",
        trial: "TRIAL",
        trialValue: "14 DAYS / NO CARD",
      },
      tickerLabel: "CONNECTED CHANNELS",
    },
    flow: {
      index: "01",
      label: "FLOW",
      titleLines: ["FROM POINT A", "TO POINT B"],
      description:
        "Data moves both ways, without breaks. Every step in between is logged; when something fails the line stops rather than writing the wrong thing quietly.",
      a: {
        code: "A",
        title: "SALES CHANNELS",
        note: "ORDERS / STOCK / RETURNS",
        items: ["TRENDYOL", "HEPSIBURADA", "N11", "AMAZON", "ETSY"],
      },
      core: {
        title: "SYNC ENGINE",
        note: "RUNS LOCALLY / AES-256",
        steps: [
          { k: "01", v: "PULL", d: "Order and stock data is read from the channel APIs." },
          { k: "02", v: "MATCH", d: "Records are matched by barcode or SKU." },
          { k: "03", v: "TRANSFORM", d: "Commission, shipping and VAT rules are applied." },
          { k: "04", v: "WRITE", d: "Receipts, invoices and stock moves are posted to the target." },
        ],
      },
      b: {
        code: "B",
        title: "ACCOUNTING / ERP",
        note: "RECEIPTS / INVOICES / LEDGER",
        items: ["LOGO", "MIKRO", "NETSIS", "NEBIM V3", "PARAŞÜT"],
      },
      forward: "FORWARD LINE — ORDERS",
      returnPath: "RETURN LINE — STOCK AND PRICE WRITE-BACK",
      interval: "EVERY 60 SECONDS",
    },
    capabilities: {
      index: "02",
      label: "CAPABILITY",
      titleLines: ["WHAT IT DOES"],
      note: "EIGHT MODULES / ONE APP",
    },
    metrics: { index: "03", label: "MEASURE", titleLines: ["NUMBERS"] },
    network: {
      index: "04",
      label: "NETWORK",
      titleLines: ["CONNECTION", "INDEX"],
      description:
        "A filled square marks a live connection; an outlined square marks one still in development.",
      cta: "ALL INTEGRATIONS",
    },
    tariff: {
      index: "05",
      label: "TARIFF",
      titleLines: ["PRICING"],
      note: "NO HIDDEN FEES / CANCEL ANY TIME",
    },
    support: {
      index: "06",
      label: "CONTACT",
      title1: "A REAL PERSON",
      title2: "WHEN YOU GET STUCK",
      description:
        "No support form, no queue. You write, and our team connects remotely if it helps.",
      cta: "MESSAGE THE WHATSAPP LINE",
      meta: {
        channel: "CHANNEL",
        channelValue: "WHATSAPP / PHONE / EMAIL",
        hours: "HOURS",
        response: "AVG. REPLY",
        responseValue: "≈ 5 MINUTES",
      },
    },
    closing: {
      index: "07",
      label: "END",
      line1: "SET UP",
      line2: "THE LINE TODAY",
      description:
        "Every feature is open for 14 days. Setup and product matching support is on us.",
      primary: "DOWNLOAD THE APP",
      secondary: "REQUEST A DEMO",
    },
  },

  notFound: {
    title: "Page not found",
    description:
      "The page you are looking for may have moved or been removed. You can continue from the home page.",
    cta: "Back to home",
    secondary: "User guide",
  },
};
