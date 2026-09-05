import { code, list, note, p, steps, table } from "@/i18n/types";
import type { DocArticle, DocSlug, LegalSlug } from "@/i18n/types";

export const tr = {
  meta: {
    siteName: "EditexSoft",
    defaultTitle: "EditexSoft — Pazaryeri ve ERP Entegrasyon Yazılımı",
    tagline: "Pazaryerleri ve ön muhasebeniz tek çatı altında",
    description:
      "EditexSoft; Trendyol, Hepsiburada, N11, Amazon ve 20+ kanalı ERP veya ön muhasebe programınıza bağlayan Windows masaüstü entegrasyon yazılımıdır. Sipariş, stok, fiyat ve fatura süreçlerinizi otomatikleştirin.",
    keywords: [
      "pazaryeri entegrasyonu",
      "e-ticaret entegrasyon programı",
      "Trendyol entegrasyon",
      "Hepsiburada entegrasyon",
      "stok fiyat senkronizasyonu",
      "ERP entegrasyonu",
      "e-fatura entegrasyonu",
      "EditexSoft",
    ],
  },

  nav: {
    features: "Özellikler",
    integrations: "Entegrasyonlar",
    pricing: "Fiyatlandırma",
    download: "İndir",
    docs: "Kullanım Kılavuzu",
    faq: "S.S.S.",
    contact: "İletişim",
    login: "Panele Giriş",
    cta: "Ücretsiz Dene",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    toggleTheme: "Temayı değiştir",
    changeLanguage: "Dili değiştir",
    skipToContent: "İçeriğe geç",
  },

  common: {
    learnMore: "Detaylı bilgi",
    getStarted: "Hemen başlayın",
    contactSales: "Satışla görüşün",
    whatsappSupport: "WhatsApp Destek",
    whatsappCta: "WhatsApp'tan yazın",
    whatsappMessage: "Merhaba, EditexSoft entegrasyon programı hakkında bilgi almak istiyorum.",
    month: "ay",
    year: "yıl",
    monthly: "Aylık",
    yearly: "Yıllık",
    popular: "En çok tercih edilen",
    readMore: "Devamını oku",
    download: "İndir",
    lastUpdated: "Son güncelleme",
    onThisPage: "Bu sayfada",
    previous: "Önceki",
    next: "Sonraki",
    backHome: "Ana sayfaya dön",
    minutes: "dk okuma",
    copy: "Kopyala",
    copied: "Kopyalandı",
    new: "Yeni",
    soon: "Yakında",
    active: "Aktif",
    all: "Tümü",
  },

  home: {
    hero: {
      badge: "Windows için masaüstü entegrasyon yazılımı",
      titleLine1: "Tüm satış kanallarınız",
      titleGradient: "tek programda",
      description:
        "EditexSoft, pazaryerlerinizi ve e-ticaret sitenizi ön muhasebe/ERP programınıza bağlar. Siparişler otomatik düşer, stok ve fiyatlar saniyeler içinde her kanalda güncellenir.",
      primaryCta: "Ücretsiz Dene",
      secondaryCta: "Kullanım Kılavuzu",
      perks: ["14 gün ücretsiz deneme", "Kredi kartı gerekmez", "Kurulum desteği ücretsiz"],
      appWindowTitle: "EditexSoft Entegrasyon Paneli",
    },
    trust: {
      title: "Türkiye'nin önde gelen pazaryerleri ve muhasebe programlarıyla uyumlu",
    },
    stats: [
      { value: "20+", label: "Hazır entegrasyon" },
      { value: "5 dk", label: "Ortalama kurulum süresi" },
      { value: "60 sn", label: "Senkronizasyon aralığı" },
      { value: "7/24", label: "WhatsApp destek hattı" },
    ],
    features: {
      eyebrow: "Neler yapabilirsiniz?",
      title: "Manuel işlere son veren bir entegrasyon motoru",
      description:
        "Sipariş kopyalamak, stok düşmek, fiyat güncellemek için harcadığınız saatleri geri kazanın. EditexSoft arka planda çalışır, siz satışa odaklanırsınız.",
      items: [
        {
          icon: "orders",
          title: "Sipariş senkronizasyonu",
          description:
            "Tüm pazaryerlerinden gelen siparişler tek ekranda toplanır ve ön muhasebe programınıza otomatik olarak fiş/fatura şeklinde aktarılır.",
        },
        {
          icon: "sync",
          title: "Stok ve fiyat eşitleme",
          description:
            "ERP'de yaptığınız tek bir değişiklik, tanımladığınız tüm kanallara saniyeler içinde yansır. Fazla satış (oversell) riski ortadan kalkar.",
        },
        {
          icon: "upload",
          title: "Toplu ürün aktarımı",
          description:
            "Excel veya ERP kaynağınızdan binlerce ürünü kategori, varyant ve görselleriyle birlikte tek seferde pazaryerlerine gönderin.",
        },
        {
          icon: "invoice",
          title: "e-Fatura & e-Arşiv",
          description:
            "Siparişlerin faturasını otomatik oluşturun, entegratörünüz üzerinden GİB'e gönderin ve PDF'i müşteriye iletin.",
        },
        {
          icon: "truck",
          title: "Kargo ve barkod",
          description:
            "Anlaşmalı kargo firmalarınız için barkod üretin, gönderi kodlarını pazaryerine otomatik iletin, teslimat durumunu takip edin.",
        },
        {
          icon: "price",
          title: "Akıllı fiyat kuralları",
          description:
            "Komisyon, kargo, KDV ve hedef kâr marjını hesaba katan kural setleriyle kanal bazlı fiyatlarınızı otomatik belirleyin.",
        },
        {
          icon: "chart",
          title: "Raporlama ve kârlılık",
          description:
            "Kanal, marka ve ürün bazında ciro, iade ve net kâr raporlarını tek ekranda görün, Excel'e aktarın.",
        },
        {
          icon: "shield",
          title: "Yerel ve güvenli çalışma",
          description:
            "Uygulama kendi bilgisayarınızda çalışır. API anahtarlarınız şifrelenir, ticari verileriniz üçüncü taraf sunucularda tutulmaz.",
        },
      ],
    },
    how: {
      eyebrow: "Nasıl çalışır?",
      title: "Dört adımda kurulum, sonrası otomatik",
      description:
        "Teknik bilgi gerekmez. Kurulum sırasında ekibimiz uzaktan bağlantıyla size eşlik eder.",
      steps: [
        {
          title: "Programı indirin",
          description:
            "Kurulum dosyasını indirin ve Windows bilgisayarınıza kurun. Kurulum ortalama 2 dakika sürer.",
        },
        {
          title: "Hesaplarınızı bağlayın",
          description:
            "Pazaryeri API anahtarlarınızı ve muhasebe programı bağlantınızı sihirbaz üzerinden tanımlayın.",
        },
        {
          title: "Ürünlerinizi eşleştirin",
          description:
            "Stok kodu veya barkod üzerinden otomatik eşleştirme yapın; eşleşmeyenleri tek tıkla düzeltin.",
        },
        {
          title: "Otomatik çalışsın",
          description:
            "Belirlediğiniz periyotta senkronizasyon arka planda çalışır. Hata olursa anında bildirim alırsınız.",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "Entegrasyonlar",
      title: "Kullandığınız programlarla konuşur",
      description:
        "Pazaryerleri, e-ticaret altyapıları, ön muhasebe/ERP çözümleri, kargo firmaları ve e-fatura entegratörleri.",
      cta: "Tüm entegrasyonları görün",
    },
    security: {
      eyebrow: "Güvenlik & uyumluluk",
      title: "Ticari verileriniz sizin kontrolünüzde",
      description:
        "EditexSoft bir masaüstü uygulamasıdır; verileriniz kendi cihazınızda veya sunucunuzda kalır.",
      items: [
        {
          title: "KVKK uyumlu süreçler",
          description: "Kişisel veriler yalnızca sipariş işleme amacıyla, yerel olarak işlenir.",
        },
        {
          title: "Şifrelenmiş kimlik bilgileri",
          description: "API anahtarları ve şifreler AES-256 ile şifrelenerek saklanır.",
        },
        {
          title: "Otomatik yedekleme",
          description: "Ayar ve eşleştirme verileriniz her gün otomatik yedeklenir.",
        },
        {
          title: "Detaylı işlem günlüğü",
          description: "Her senkronizasyon adımı kayıt altına alınır, geriye dönük incelenebilir.",
        },
      ],
    },
    support: {
      eyebrow: "Destek",
      title: "Takıldığınız yerde gerçek bir insan",
      description:
        "Uzun destek formları yok. WhatsApp destek hattımızdan yazın, ekibimiz uzaktan bağlanarak yardımcı olsun.",
      cards: [
        {
          icon: "whatsapp",
          title: "WhatsApp destek hattı",
          description: "Mesai saatleri içinde ortalama 5 dakikada dönüş yapıyoruz.",
          action: "Sohbet başlat",
        },
        {
          icon: "screen",
          title: "Uzaktan kurulum desteği",
          description: "İlk kurulum ve eşleştirme adımlarında ekran paylaşımıyla yanınızdayız.",
          action: "Randevu alın",
        },
        {
          icon: "book",
          title: "Kullanım kılavuzu",
          description: "Adım adım anlatımlar, ekran görüntüleri ve sık karşılaşılan hatalar.",
          action: "Kılavuzu açın",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Fiyatlandırma",
      title: "İşletmenizin ölçeğine uygun paketler",
      description: "Gizli ücret yok. Dilediğiniz zaman yükseltin, düşürün veya iptal edin.",
      cta: "Paketleri karşılaştırın",
    },
    faqSection: {
      eyebrow: "Sık sorulan sorular",
      title: "Aklınızdaki sorular",
      cta: "Tüm soruları görün",
    },
    cta: {
      title: "Entegrasyonu bugün kurun, yarın satışa odaklanın",
      description:
        "14 gün boyunca tüm özellikleri ücretsiz deneyin. Kurulum ve eşleştirme desteği bizden.",
      primary: "Programı indirin",
      secondary: "Demo talep edin",
    },
  },

  featuresPage: {
    eyebrow: "Özellikler",
    title: "Entegrasyonun her adımı için tek program",
    description:
      "Ürün yüklemeden faturaya, stok eşitlemeden kargo barkoduna kadar e-ticaret operasyonunuzun tamamını EditexSoft üzerinden yönetin.",
    groups: [
      {
        icon: "sync",
        title: "Senkronizasyon",
        description: "Kanallar arası veri akışını dakikalar içinde otomatikleştirin.",
        items: [
          "Stok miktarı ve fiyat eşitleme (çift yönlü)",
          "Kanal bazlı stok ayırma ve rezerv kuralları",
          "Zamanlanmış görevler ve 60 saniyeye kadar senkron aralığı",
          "Değişiklik bazlı akıllı senkron ile düşük API tüketimi",
          "Hata durumunda otomatik yeniden deneme ve bildirim",
        ],
      },
      {
        icon: "orders",
        title: "Sipariş yönetimi",
        description: "Tüm kanalların siparişlerini tek listede toplayın.",
        items: [
          "Tek ekranda birleşik sipariş listesi ve filtreler",
          "Sipariş durum güncellemesi (hazırlanıyor, kargolandı, teslim)",
          "İptal ve iade süreçlerinin takibi",
          "Ön muhasebeye otomatik sipariş/fatura aktarımı",
          "Toplu paketleme ve toplama listesi çıktısı",
        ],
      },
      {
        icon: "upload",
        title: "Ürün ve katalog",
        description: "Binlerce ürünü hatasız şekilde kanallara taşıyın.",
        items: [
          "Excel şablonu ve ERP üzerinden toplu ürün aktarımı",
          "Varyant, renk/beden ve görsel yönetimi",
          "Kanal kategori eşleştirme ve zorunlu özellik doldurma",
          "Barkod / stok kodu ile otomatik eşleştirme",
          "Ürün açıklaması için kanal bazlı şablonlar",
        ],
      },
      {
        icon: "invoice",
        title: "Faturalama",
        description: "e-Fatura ve e-Arşiv süreçlerini otomatiğe alın.",
        items: [
          "Sipariş onayında otomatik fatura oluşturma",
          "e-Fatura / e-Arşiv entegratörü bağlantısı",
          "Fatura PDF'inin pazaryerine yüklenmesi",
          "İade faturası ve iptal senaryoları",
          "Seri numarası ve fatura no takibi",
        ],
      },
      {
        icon: "truck",
        title: "Kargo ve lojistik",
        description: "Gönderi süreçlerini tek tuşla yönetin.",
        items: [
          "Anlaşmalı kargo firmaları için barkod üretimi",
          "Toplu etiket yazdırma (termal yazıcı desteği)",
          "Takip numarasının pazaryerine otomatik bildirimi",
          "Teslimat durumlarının izlenmesi",
          "Kargo maliyetinin kârlılık raporuna yansıtılması",
        ],
      },
      {
        icon: "chart",
        title: "Raporlama",
        description: "Hangi kanalda gerçekten kazanıyorsunuz, görün.",
        items: [
          "Kanal, marka, kategori ve ürün bazlı satış raporları",
          "Komisyon, kargo ve KDV sonrası net kâr hesabı",
          "İade oranları ve iade nedeni analizi",
          "Stok devir hızı ve tükenmek üzere olan ürünler",
          "Excel ve CSV dışa aktarma",
        ],
      },
    ],
    highlight: {
      title: "Performansı düşünülerek tasarlandı",
      description:
        "EditexSoft, yüksek ürün adedine sahip mağazalarda bile akıcı çalışacak şekilde geliştirildi.",
      metrics: [
        { value: "250.000+", label: "Desteklenen ürün adedi" },
        { value: "10", label: "Eşzamanlı kanal bağlantısı" },
        { value: "< %1", label: "Ortalama senkron hata oranı" },
      ],
    },
  },

  integrationsPage: {
    eyebrow: "Entegrasyonlar",
    title: "Bağlanabileceğiniz kanallar ve programlar",
    description:
      "Listede aradığınız programı bulamadıysanız bize yazın; API'si olan çoğu sistem için entegrasyon geliştirebiliyoruz.",
    requestTitle: "Aradığınız entegrasyon listede yok mu?",
    requestDescription:
      "Kullandığınız program için talep oluşturun, geliştirme takvimimizi sizinle paylaşalım.",
    requestCta: "Entegrasyon talebi gönderin",
    categories: [
      {
        id: "marketplaces",
        title: "Pazaryerleri",
        description: "Türkiye ve yurt dışındaki başlıca satış kanalları.",
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
        title: "E-ticaret altyapıları",
        description: "Kendi web sitenizi de aynı stok havuzuna bağlayın.",
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
        title: "Ön muhasebe ve ERP",
        description: "Siparişler doğrudan muhasebe programınıza aktarılır.",
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
        title: "Kargo firmaları",
        description: "Barkod üretimi ve gönderi takibi.",
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
        title: "e-Fatura entegratörleri",
        description: "Fatura oluşturma ve GİB gönderimi.",
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
    eyebrow: "Fiyatlandırma",
    title: "Şeffaf ve esnek abonelik",
    description:
      "Tüm paketler 14 gün ücretsiz denemeyle başlar. Kurulum ve eğitim desteği her pakete dahildir.",
    currency: "TRY",
    locale: "tr-TR",
    billingMonthly: "Aylık",
    billingYearly: "Yıllık",
    yearlyBadge: "2 ay hediye",
    perMonth: "/ay",
    billedYearly: "yıllık faturalandırılır",
    billedMonthly: "aylık faturalandırılır",
    vatNote: "Fiyatlara KDV dahil değildir.",
    customPrice: "Size özel",
    plans: [
      {
        id: "starter",
        name: "Başlangıç",
        tagline: "Tek kanalda satışa yeni başlayanlar için.",
        monthly: 749,
        yearly: 7490,
        custom: false,
        popular: false,
        cta: "Ücretsiz başlayın",
        features: [
          "1 pazaryeri bağlantısı",
          "1.000 ürüne kadar",
          "Aylık 500 sipariş",
          "Stok ve fiyat senkronizasyonu",
          "Excel ile ürün aktarımı",
          "E-posta destek",
        ],
      },
      {
        id: "pro",
        name: "Profesyonel",
        tagline: "Çoklu kanalda büyüyen mağazalar için.",
        monthly: 1499,
        yearly: 14990,
        custom: false,
        popular: true,
        cta: "Ücretsiz başlayın",
        features: [
          "5 pazaryeri + 1 e-ticaret sitesi",
          "25.000 ürüne kadar",
          "Aylık 5.000 sipariş",
          "Ön muhasebe/ERP entegrasyonu",
          "e-Fatura ve kargo entegrasyonu",
          "Akıllı fiyat kuralları",
          "WhatsApp öncelikli destek",
        ],
      },
      {
        id: "enterprise",
        name: "Kurumsal",
        tagline: "Yüksek hacimli ve özel süreçli işletmeler için.",
        monthly: 0,
        yearly: 0,
        custom: true,
        popular: false,
        cta: "Teklif alın",
        features: [
          "Sınırsız kanal ve ürün",
          "Özel ERP alan eşleştirmeleri",
          "Çoklu mağaza / çoklu şirket yönetimi",
          "Özel geliştirme ve API erişimi",
          "Adanmış müşteri temsilcisi",
          "SLA'lı öncelikli destek",
        ],
      },
    ],
    comparisonTitle: "Paket karşılaştırma",
    comparison: [
      {
        group: "Kanallar",
        rows: [
          { label: "Pazaryeri bağlantısı", values: ["1", "5", "Sınırsız"] },
          { label: "E-ticaret sitesi", values: ["—", "1", "Sınırsız"] },
          { label: "Çoklu mağaza", values: ["—", "2", "Sınırsız"] },
        ],
      },
      {
        group: "Kapasite",
        rows: [
          { label: "Ürün adedi", values: ["1.000", "25.000", "Sınırsız"] },
          { label: "Aylık sipariş", values: ["500", "5.000", "Sınırsız"] },
          { label: "Senkron aralığı", values: ["15 dk", "60 sn", "60 sn"] },
        ],
      },
      {
        group: "Modüller",
        rows: [
          { label: "Stok & fiyat senkronizasyonu", values: ["yes", "yes", "yes"] },
          { label: "Toplu ürün aktarımı", values: ["yes", "yes", "yes"] },
          { label: "Ön muhasebe / ERP", values: ["no", "yes", "yes"] },
          { label: "e-Fatura & e-Arşiv", values: ["no", "yes", "yes"] },
          { label: "Kargo & barkod", values: ["no", "yes", "yes"] },
          { label: "Akıllı fiyat kuralları", values: ["no", "yes", "yes"] },
          { label: "Kârlılık raporları", values: ["no", "yes", "yes"] },
          { label: "API erişimi", values: ["no", "no", "yes"] },
        ],
      },
      {
        group: "Destek",
        rows: [
          { label: "Kullanım kılavuzu", values: ["yes", "yes", "yes"] },
          { label: "E-posta destek", values: ["yes", "yes", "yes"] },
          { label: "WhatsApp destek", values: ["no", "yes", "yes"] },
          { label: "Uzaktan kurulum", values: ["no", "yes", "yes"] },
          { label: "Adanmış temsilci", values: ["no", "no", "yes"] },
        ],
      },
    ],
    faqTitle: "Abonelik hakkında sık sorulanlar",
    faq: [
      {
        question: "Deneme süresi sonunda otomatik ücretlendirme olur mu?",
        answer:
          "Hayır. 14 günlük deneme süresi sonunda ödeme bilgisi girmediyseniz hesabınız otomatik olarak ücretsiz plana düşer, kartınızdan çekim yapılmaz.",
      },
      {
        question: "Paketimi sonradan değiştirebilir miyim?",
        answer:
          "Evet. Panelden istediğiniz zaman yükseltme veya düşürme yapabilirsiniz. Fark tutarı kalan gün sayısına göre orantılı hesaplanır.",
      },
      {
        question: "Yıllık ödemede ne kadar avantaj sağlıyorum?",
        answer:
          "Yıllık ödemede 12 ay yerine 10 ay ücreti ödersiniz; yani 2 ay hediye edilir.",
      },
      {
        question: "Fatura kesiyor musunuz?",
        answer:
          "Evet, tüm ödemeler için e-fatura veya e-arşiv fatura düzenlenir ve e-posta adresinize gönderilir.",
      },
    ],
  },

  downloadPage: {
    eyebrow: "İndirme merkezi",
    title: "EditexSoft masaüstü uygulamasını indirin",
    description:
      "Windows için hazırlanmış kurulum dosyasını indirin, 14 gün boyunca tüm özellikleri ücretsiz kullanın.",
    downloadCta: "Windows için indir (.exe)",
    versionLabel: "Sürüm",
    releaseLabel: "Yayın tarihi",
    sizeLabel: "Boyut",
    checksumLabel: "SHA-256",
    checksumHelp:
      "İndirdiğiniz dosyanın bütünlüğünü doğrulamak için PowerShell'de aşağıdaki komutu çalıştırabilirsiniz.",
    checksumCommand: "Get-FileHash .\\EditexSoftSetup.exe -Algorithm SHA256",
    pendingNotice:
      "Kurulum dosyası bağlantısı henüz yapılandırılmadı. Dosyayı yayına aldığınızda NEXT_PUBLIC_DOWNLOAD_URL ortam değişkenini güncelleyin.",
    requirementsTitle: "Sistem gereksinimleri",
    requirements: [
      { label: "İşletim sistemi", value: "Windows 10 / 11 (64-bit) veya Windows Server 2016+" },
      { label: "İşlemci", value: "Intel Core i3 ve üzeri (önerilen: i5)" },
      { label: "Bellek (RAM)", value: "En az 4 GB (önerilen: 8 GB)" },
      { label: "Disk alanı", value: "1 GB boş alan" },
      { label: "Çalışma zamanı", value: ".NET 8 Runtime (kurulumla birlikte gelir)" },
      { label: "İnternet", value: "Kesintisiz bağlantı, giden 443/TCP portu açık" },
    ],
    nextStepsTitle: "İndirdikten sonra",
    nextSteps: [
      "Kurulum dosyasını yönetici olarak çalıştırın.",
      "Lisans anahtarınızı girin veya deneme sürümünü başlatın.",
      "Pazaryeri ve muhasebe bağlantılarınızı sihirbazla tanımlayın.",
      "İlk senkronizasyonu başlatın; sorun yaşarsanız WhatsApp hattımızdan yazın.",
    ],
    guideCta: "Kurulum kılavuzunu okuyun",
    supportCta: "Kurulum desteği isteyin",
    changelogTitle: "Sürüm notları",
    changelog: [
      {
        version: "3.4.2",
        date: "18.08.2026",
        items: [
          "Trendyol yeni sipariş API sürümüne uyum sağlandı.",
          "Toplu ürün aktarımında bellek kullanımı %30 azaltıldı.",
          "Kargo etiketlerinde termal yazıcı ölçek sorunu giderildi.",
        ],
      },
      {
        version: "3.4.0",
        date: "02.07.2026",
        items: [
          "Akıllı fiyat kuralları modülü eklendi.",
          "Paraşüt entegrasyonu yayına alındı.",
          "Karanlık tema desteği eklendi.",
        ],
      },
      {
        version: "3.3.5",
        date: "14.05.2026",
        items: [
          "e-Arşiv fatura iptal senaryoları iyileştirildi.",
          "Çoklu mağaza geçişlerinde oturum hatası düzeltildi.",
        ],
      },
    ],
  },

  docs: {
    eyebrow: "Kullanım kılavuzu",
    title: "EditexSoft kullanım kılavuzu",
    description:
      "Kurulumdan ilk senkronizasyona, fatura ayarlarından sorun gidermeye kadar ihtiyacınız olan tüm adımlar.",
    sidebarTitle: "Konular",
    searchPlaceholder: "Kılavuzda ara...",
    noResults: "Aramanızla eşleşen konu bulunamadı.",
    helpTitle: "Cevabı bulamadınız mı?",
    helpDescription: "WhatsApp destek hattımızdan yazın, ekibimiz kısa sürede dönüş yapsın.",
    categories: [
      { title: "Başlangıç", slugs: ["installation", "first-setup"] as DocSlug[] },
      {
        title: "Bağlantılar",
        slugs: ["connect-marketplace", "product-matching"] as DocSlug[],
      },
      { title: "Günlük kullanım", slugs: ["order-flow", "invoicing"] as DocSlug[] },
      { title: "Bakım", slugs: ["troubleshooting", "updates"] as DocSlug[] },
    ],
    articles: {
      installation: {
        title: "Kurulum",
        description: "EditexSoft'u Windows bilgisayarınıza kurma adımları.",
        readingTime: "4",
        sections: [
          {
            heading: "Sistem gereksinimleri",
            body: [
              p("Kuruluma başlamadan önce bilgisayarınızın aşağıdaki koşulları karşıladığından emin olun."),
              table(
                ["Bileşen", "Minimum", "Önerilen"],
                [
                  ["İşletim sistemi", "Windows 10 64-bit", "Windows 11 64-bit"],
                  ["RAM", "4 GB", "8 GB"],
                  ["Disk", "1 GB", "5 GB"],
                  ["İnternet", "8 Mbps", "20 Mbps"],
                ],
              ),
              note(
                "info",
                "Sunucu kurulumu",
                "Programı 7/24 açık kalacak bir sunucuya veya bilgisayara kurmanız önerilir. Program kapalıyken senkronizasyon çalışmaz.",
              ),
            ],
          },
          {
            heading: "Kurulum adımları",
            body: [
              steps(
                "İndirme sayfasından EditexSoftSetup.exe dosyasını indirin.",
                "Dosyaya sağ tıklayıp Yönetici olarak çalıştır seçeneğini seçin.",
                "Windows SmartScreen uyarısı çıkarsa Ek bilgi > Yine de çalıştır adımını izleyin.",
                "Kurulum dizinini seçin (varsayılan: C:\\Program Files\\EditexSoft).",
                "Kurulum tamamlandığında Uygulamayı başlat seçeneğini işaretleyip bitirin.",
              ),
              note(
                "tip",
                "Antivirüs uyarısı",
                "Bazı antivirüs yazılımları yeni imzalanmış kurulum dosyalarını karantinaya alabilir. EditexSoft kurulum klasörünü istisnalara ekleyin.",
              ),
            ],
          },
          {
            heading: "Kurulumu doğrulama",
            body: [
              p("Program ilk açıldığında Sistem Kontrolü ekranı görüntülenir. Tüm satırların yeşil olduğundan emin olun."),
              list(
                ".NET 8 çalışma zamanı yüklü",
                "Veritabanı dosyası oluşturuldu",
                "İnternet bağlantısı ve 443 portu erişilebilir",
                "Lisans sunucusuna erişim sağlandı",
              ),
            ],
          },
        ],
      },
      "first-setup": {
        title: "İlk ayarlar",
        description: "Lisans aktivasyonu, firma bilgileri ve genel tercihler.",
        readingTime: "5",
        sections: [
          {
            heading: "Lisans aktivasyonu",
            body: [
              p("Programı ilk açtığınızda karşınıza lisans ekranı gelir. İki seçeneğiniz vardır:"),
              list(
                "14 günlük ücretsiz denemeyi başlat — yalnızca e-posta adresi yeterlidir.",
                "Lisans anahtarı gir — abonelik sonrası e-posta ile iletilen anahtarı yapıştırın.",
              ),
              note(
                "warn",
                "Lisans bir cihaza bağlıdır",
                "Lisans anahtarınız kurulum yaptığınız cihaza bağlanır. Cihaz değiştireceğiniz zaman destek hattından lisans taşıma talebi oluşturun.",
              ),
            ],
          },
          {
            heading: "Firma bilgileri",
            body: [
              p("Ayarlar > Firma menüsünden faturalarda ve raporlarda görünecek bilgileri doldurun."),
              list(
                "Ünvan, vergi dairesi ve vergi numarası",
                "Adres ve iletişim bilgileri",
                "Varsayılan para birimi ve KDV oranı",
                "Logo (fatura çıktıları için)",
              ),
            ],
          },
          {
            heading: "Genel tercihler",
            body: [
              p("Ayarlar > Genel bölümünden çalışma düzeninizi belirleyin."),
              table(
                ["Ayar", "Açıklama", "Önerilen"],
                [
                  ["Senkron aralığı", "Kanalların ne sıklıkla kontrol edileceği", "60 saniye"],
                  ["Windows ile başlat", "Bilgisayar açıldığında programı çalıştırır", "Açık"],
                  ["Arka planda çalış", "Kapatınca sistem tepsisine küçülür", "Açık"],
                  ["Hata bildirimi", "Hata durumunda e-posta gönderir", "Açık"],
                ],
              ),
            ],
          },
        ],
      },
      "connect-marketplace": {
        title: "Pazaryeri bağlama",
        description: "API anahtarlarını alma ve kanal bağlantısı kurma.",
        readingTime: "6",
        sections: [
          {
            heading: "Bağlantı sihirbazı",
            body: [
              p("Sol menüden Kanallar > Yeni kanal ekle yolunu izleyin ve bağlamak istediğiniz pazaryerini seçin."),
              steps(
                "Pazaryerinin satıcı panelinde Entegrasyon / API bölümüne gidin.",
                "Yeni bir API anahtarı (key) ve gizli anahtar (secret) oluşturun.",
                "Satıcı ID / mağaza numarası bilgisini not alın.",
                "EditexSoft'taki ilgili alanlara yapıştırın ve Bağlantıyı test et düğmesine basın.",
                "Test başarılıysa Kaydet ile kanalı aktifleştirin.",
              ),
            ],
          },
          {
            heading: "Kanal bazlı ayarlar",
            body: [
              p("Her kanal için ayrı çalışma kuralları tanımlayabilirsiniz."),
              list(
                "Stok gönderimi: gerçek stok, sabit stok veya yüzde oranı",
                "Fiyat gönderimi: liste fiyatı, indirimli fiyat veya fiyat kuralı",
                "Sipariş çekme başlangıç tarihi",
                "Otomatik onay ve kargo firması eşleştirmesi",
              ),
              note(
                "tip",
                "Önce test modunda çalıştırın",
                "İlk bağlantıda Yalnızca oku modunu açarak verilerin doğru geldiğini kontrol edin, sonra yazma işlemlerini etkinleştirin.",
              ),
            ],
          },
          {
            heading: "Sık karşılaşılan bağlantı hataları",
            body: [
              table(
                ["Hata", "Sebep", "Çözüm"],
                [
                  ["401 Unauthorized", "API anahtarı hatalı veya süresi dolmuş", "Panelden yeni anahtar üretin"],
                  ["403 Forbidden", "Yetki verilmemiş", "Satıcı panelinden entegrasyon iznini açın"],
                  ["429 Too Many Requests", "API limiti aşıldı", "Senkron aralığını artırın"],
                  ["Timeout", "Ağ veya güvenlik duvarı engeli", "443 portunu ve proxy ayarlarını kontrol edin"],
                ],
              ),
            ],
          },
        ],
      },
      "product-matching": {
        title: "Ürün eşleştirme",
        description: "ERP ürünlerinizi kanal ürünleriyle ilişkilendirme.",
        readingTime: "5",
        sections: [
          {
            heading: "Eşleştirme mantığı",
            body: [
              p("EditexSoft, ERP/muhasebe tarafındaki ürünü kanaldaki ürüne bir anahtar üzerinden bağlar. Anahtar olarak barkod veya stok kodu kullanılır."),
              note(
                "warn",
                "Tekil barkod şart",
                "Aynı barkodun birden fazla üründe kullanılması yanlış stok düşümüne yol açar. Aktarımdan önce barkod tekilliğini doğrulayın.",
              ),
            ],
          },
          {
            heading: "Otomatik eşleştirme",
            body: [
              steps(
                "Ürünler > Eşleştirme ekranını açın.",
                "Anahtar alanı olarak Barkod veya Stok kodu seçin.",
                "Otomatik eşleştir düğmesine basın.",
                "Eşleşmeyen kayıtlar Bekleyenler sekmesinde listelenir.",
                "Bekleyen kayıtları arama kutusundan bularak manuel eşleştirin.",
              ),
            ],
          },
          {
            heading: "Varyantlı ürünler",
            body: [
              p("Renk ve beden gibi varyantlarda her varyant ayrı bir satır olarak eşleştirilir."),
              list(
                "ERP tarafında her varyantın kendi stok kodu ve barkodu olmalıdır.",
                "Kanal tarafında varyantlar aynı ürün grubuna bağlıdır.",
                "Ana ürün silinirse tüm varyant eşleştirmeleri kaldırılır.",
              ),
              code("ERP: TS-001-KRM-M  ->  Kanal: 8680000000123 (Krem / M)"),
            ],
          },
        ],
      },
      "order-flow": {
        title: "Sipariş akışı",
        description: "Siparişin kanaldan muhasebeye kadar izlediği yol.",
        readingTime: "5",
        sections: [
          {
            heading: "Akışın adımları",
            body: [
              steps(
                "Kanaldan yeni sipariş çekilir ve Siparişler ekranına düşer.",
                "Stok rezervasyonu yapılır, ilgili ürünlerin stoğu diğer kanallardan düşülür.",
                "Sipariş ön muhasebe programına sipariş fişi veya fatura olarak aktarılır.",
                "Kargo barkodu üretilir ve etiket yazdırılır.",
                "Takip numarası kanala bildirilir, sipariş Kargolandı durumuna geçer.",
                "Fatura oluşturulup e-fatura entegratörüne gönderilir.",
              ),
            ],
          },
          {
            heading: "Sipariş durumları",
            body: [
              table(
                ["Durum", "Anlamı"],
                [
                  ["Yeni", "Kanaldan çekildi, henüz işlem yapılmadı"],
                  ["Onaylandı", "Stok rezerve edildi, hazırlığa alındı"],
                  ["Paketlendi", "Toplama ve paketleme tamamlandı"],
                  ["Kargolandı", "Takip numarası kanala iletildi"],
                  ["Teslim edildi", "Kargo firması teslimatı onayladı"],
                  ["İptal / İade", "Sipariş iptal edildi veya iade süreci başladı"],
                ],
              ),
            ],
          },
          {
            heading: "Toplu işlemler",
            body: [
              p("Sipariş listesinde birden fazla kaydı seçerek toplu işlem yapabilirsiniz."),
              list(
                "Toplu onaylama ve paketleme",
                "Toplu kargo barkodu üretimi ve etiket yazdırma",
                "Toplama listesi (picking list) çıktısı",
                "Toplu fatura oluşturma",
              ),
              note(
                "tip",
                "Yazıcı ayarı",
                "Termal etiket yazıcısı kullanıyorsanız Ayarlar > Yazıcı bölümünden 100x150 mm etiket boyutunu seçin.",
              ),
            ],
          },
        ],
      },
      invoicing: {
        title: "Fatura ayarları",
        description: "e-Fatura ve e-Arşiv gönderimini yapılandırma.",
        readingTime: "4",
        sections: [
          {
            heading: "Entegratör bağlantısı",
            body: [
              p("Ayarlar > e-Fatura menüsünden çalıştığınız entegratörü seçin ve kullanıcı bilgilerinizi girin."),
              list(
                "Entegratör kullanıcı adı ve şifresi",
                "Test / canlı ortam seçimi",
                "Fatura serisi ve başlangıç numarası",
                "e-Arşiv için varsayılan gönderim yöntemi (e-posta / kağıt)",
              ),
              note(
                "warn",
                "Önce test ortamı",
                "Canlı ortama geçmeden önce test ortamında en az bir fatura göndererek şablonunuzu doğrulayın.",
              ),
            ],
          },
          {
            heading: "Otomatik fatura kuralları",
            body: [
              p("Faturanın hangi anda oluşacağını belirleyin."),
              table(
                ["Tetikleyici", "Ne zaman kullanılır"],
                [
                  ["Sipariş onaylandığında", "Hızlı fatura kesmek isteyen mağazalar"],
                  ["Kargoya verildiğinde", "En yaygın kullanılan seçenek"],
                  ["Manuel", "Faturayı kontrol ederek kesmek isteyenler"],
                ],
              ),
            ],
          },
          {
            heading: "İade ve iptal",
            body: [
              list(
                "İade talebi onaylandığında iade faturası otomatik oluşturulabilir.",
                "e-Arşiv faturaları 8 gün içinde iptal edilebilir.",
                "e-Fatura iptali için alıcının red etmesi ya da iade faturası düzenlenmesi gerekir.",
              ),
            ],
          },
        ],
      },
      troubleshooting: {
        title: "Sorun giderme",
        description: "Sık karşılaşılan hatalar ve çözüm adımları.",
        readingTime: "6",
        sections: [
          {
            heading: "Senkronizasyon çalışmıyor",
            body: [
              steps(
                "Programın açık ve sistem tepsisinde çalışır durumda olduğunu doğrulayın.",
                "Kanallar ekranında bağlantı durumunun yeşil olduğunu kontrol edin.",
                "Günlükler ekranından son hata mesajını inceleyin.",
                "İnternet bağlantısını ve 443 portunu kontrol edin.",
                "Sorun sürerse günlük dosyasını destek hattımıza gönderin.",
              ),
              code("Günlük konumu: C:\\ProgramData\\EditexSoft\\logs\\sync-YYYYMMDD.log"),
            ],
          },
          {
            heading: "Stok yanlış görünüyor",
            body: [
              list(
                "Aynı barkodun birden fazla üründe kullanılıp kullanılmadığını kontrol edin.",
                "Kanal bazlı stok kuralında sabit stok veya yüzde ayarı olup olmadığına bakın.",
                "Rezerve edilmiş (bekleyen sipariş) stok miktarını dikkate alın.",
                "Manuel stok düzeltmesi yaptıysanız ERP tarafındaki değerle karşılaştırın.",
              ),
            ],
          },
          {
            heading: "Fatura gönderilemiyor",
            body: [
              table(
                ["Hata", "Çözüm"],
                [
                  ["Mükellef bulunamadı", "Alıcı VKN/TCKN bilgisini kontrol edin"],
                  ["Şema hatası", "Fatura şablonunuzu entegratörle birlikte doğrulayın"],
                  ["Kontör yetersiz", "Entegratör panelinden kontör yükleyin"],
                  ["Zaman aşımı", "Entegratör servis durumunu kontrol edin"],
                ],
              ),
            ],
          },
          {
            heading: "Destek ile iletişim",
            body: [
              p("Sorununuzu daha hızlı çözebilmemiz için lütfen şu bilgileri paylaşın:"),
              list(
                "Program sürümü (Yardım > Hakkında)",
                "Hatanın ekran görüntüsü",
                "İlgili günlük dosyası",
                "Etkilenen kanal ve sipariş/ürün numarası",
              ),
            ],
          },
        ],
      },
      updates: {
        title: "Güncelleme ve yedekleme",
        description: "Yeni sürüme geçiş ve veri yedekleme.",
        readingTime: "3",
        sections: [
          {
            heading: "Otomatik güncelleme",
            body: [
              p("Program açılışta yeni sürüm kontrolü yapar. Güncelleme mevcutsa sağ üstte bildirim gösterilir."),
              steps(
                "Bildirime tıklayın ve Güncellemeyi indir seçeneğini seçin.",
                "İndirme tamamlandığında program kendini kapatıp güncellemeyi uygular.",
                "Güncelleme sonrası ayarlarınız ve eşleştirmeleriniz korunur.",
              ),
              note(
                "info",
                "Sunucu kurulumlarında",
                "Çok kullanıcılı kurulumlarda güncellemeyi mesai dışında, tüm oturumlar kapalıyken yapmanız önerilir.",
              ),
            ],
          },
          {
            heading: "Yedekleme",
            body: [
              p("Ayar ve eşleştirme veritabanı her gün otomatik yedeklenir."),
              code("Yedek konumu: C:\\ProgramData\\EditexSoft\\backup\\"),
              list(
                "Son 30 günün yedeği saklanır.",
                "Ayarlar > Yedekleme ekranından manuel yedek alabilirsiniz.",
                "Yedek dosyasını farklı bir cihaza taşıyarak kurtarma yapabilirsiniz.",
              ),
            ],
          },
        ],
      },
    } as Record<DocSlug, DocArticle>,
  },

  faqPage: {
    eyebrow: "Sık sorulan sorular",
    title: "Merak edilenler",
    description:
      "Aradığınız cevabı bulamazsanız WhatsApp destek hattımızdan bize ulaşabilirsiniz.",
    categories: [
      {
        title: "Genel",
        items: [
          {
            question: "EditexSoft tam olarak ne yapıyor?",
            answer:
              "EditexSoft, pazaryerleri ve e-ticaret sitenizdeki ürün, stok, fiyat ve sipariş verilerini ön muhasebe/ERP programınızla çift yönlü olarak senkronize eden bir Windows masaüstü uygulamasıdır. Böylece aynı veriyi birden fazla panele elle girmek zorunda kalmazsınız.",
          },
          {
            question: "Hangi işletim sistemlerinde çalışır?",
            answer:
              "Windows 10 ve Windows 11 (64-bit) ile Windows Server 2016 ve üzeri sürümlerde çalışır. macOS ve Linux sürümleri şu an için planlanmamıştır.",
          },
          {
            question: "Programın sürekli açık kalması gerekiyor mu?",
            answer:
              "Evet. Senkronizasyon programın çalıştığı bilgisayarda gerçekleşir. Bu nedenle 7/24 açık kalan bir bilgisayar veya sunucuya kurulum yapılması önerilir.",
          },
          {
            question: "Kaç mağaza veya şirket bağlayabilirim?",
            answer:
              "Başlangıç paketinde tek mağaza desteklenir. Profesyonel pakette 2, Kurumsal pakette sınırsız mağaza ve şirket yönetebilirsiniz.",
          },
        ],
      },
      {
        title: "Kurulum ve kullanım",
        items: [
          {
            question: "Kurulum ne kadar sürüyor?",
            answer:
              "Programın kurulumu ortalama 2 dakika sürer. Kanal bağlantıları ve ürün eşleştirmeleriyle birlikte ilk kurulum genellikle 30-60 dakikada tamamlanır. Talep ederseniz ekibimiz uzaktan bağlanarak kurulumu birlikte yapar.",
          },
          {
            question: "Teknik bilgiye ihtiyacım var mı?",
            answer:
              "Hayır. Tüm bağlantılar adım adım ilerleyen sihirbazlar üzerinden yapılır. API anahtarı alma gibi adımlar için kılavuzda ekran görüntülü anlatımlar bulunur.",
          },
          {
            question: "Mevcut ürünlerimi nasıl aktarırım?",
            answer:
              "Ürünlerinizi ERP/muhasebe programınızdan doğrudan okuyabilir veya hazır Excel şablonumuzu kullanarak toplu olarak aktarabilirsiniz. Eşleştirme barkod ya da stok kodu üzerinden otomatik yapılır.",
          },
          {
            question: "Muhasebe programım listede yok, ne yapmalıyım?",
            answer:
              "API veya veritabanı erişimi sunan çoğu program için entegrasyon geliştirebiliyoruz. İletişim formundan programın adını bildirin, sizinle fizibilite ve takvim bilgisini paylaşalım.",
          },
        ],
      },
      {
        title: "Güvenlik ve veri",
        items: [
          {
            question: "Verilerim nerede saklanıyor?",
            answer:
              "Ürün, sipariş ve müşteri verileriniz programın kurulu olduğu bilgisayarda yerel veritabanında tutulur. Bu verileri sunucularımıza kopyalamayız; yalnızca lisans doğrulama için anonim bir cihaz kimliği iletilir.",
          },
          {
            question: "API anahtarlarım güvende mi?",
            answer:
              "Tüm kimlik bilgileri cihaz üzerinde AES-256 ile şifrelenerek saklanır ve arayüzde maskelenir.",
          },
          {
            question: "KVKK uyumu nasıl sağlanıyor?",
            answer:
              "Kişisel veriler yalnızca siparişin işlenmesi amacıyla, yerel olarak işlenir. Aydınlatma metni ve veri işleme esaslarımızı KVKK sayfamızda bulabilirsiniz.",
          },
        ],
      },
      {
        title: "Abonelik ve destek",
        items: [
          {
            question: "Ücretsiz deneme sürümü var mı?",
            answer:
              "Evet. Kredi kartı bilgisi girmeden 14 gün boyunca tüm özellikleri kullanabilirsiniz.",
          },
          {
            question: "Aboneliğimi nasıl iptal ederim?",
            answer:
              "Üyelik panelinizden tek tıkla iptal edebilirsiniz. İptal ettiğinizde mevcut dönem sonuna kadar programı kullanmaya devam edersiniz.",
          },
          {
            question: "Destek hizmeti nasıl işliyor?",
            answer:
              "Profesyonel ve Kurumsal paketlerde WhatsApp destek hattımızdan doğrudan yazabilirsiniz. Mesai saatleri içinde ortalama yanıt süremiz 5 dakikadır. Gerekirse uzaktan bağlantı ile müdahale ediyoruz.",
          },
          {
            question: "Güncellemeler ücretli mi?",
            answer:
              "Hayır. Aboneliğiniz aktif olduğu sürece tüm sürüm güncellemeleri ve yeni entegrasyonlar ücretsizdir.",
          },
        ],
      },
    ],
  },

  contactPage: {
    eyebrow: "İletişim",
    title: "Size nasıl yardımcı olabiliriz?",
    description:
      "Demo talebi, fiyat teklifi veya teknik destek için aşağıdaki kanallardan bize ulaşın.",
    channels: [
      {
        id: "whatsapp",
        title: "WhatsApp destek hattı",
        description: "En hızlı dönüş aldığınız kanal.",
        action: "Sohbeti başlat",
      },
      {
        id: "email",
        title: "E-posta",
        description: "Detaylı talepleriniz için yazın.",
        action: "E-posta gönder",
      },
      {
        id: "phone",
        title: "Telefon",
        description: "Mesai saatleri içinde arayabilirsiniz.",
        action: "Hemen ara",
      },
    ],
    infoTitle: "Bilgiler",
    workingHoursLabel: "Çalışma saatleri",
    addressLabel: "Adres",
    form: {
      title: "Bize yazın",
      description: "Formu doldurun, en geç bir iş günü içinde dönüş yapalım.",
      name: "Ad Soyad",
      namePlaceholder: "Adınız ve soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@sirket.com",
      phone: "Telefon",
      phonePlaceholder: "05XX XXX XX XX",
      company: "Firma",
      companyPlaceholder: "Firma adınız",
      subject: "Konu",
      subjects: [
        "Demo talebi",
        "Fiyat teklifi",
        "Teknik destek",
        "Entegrasyon talebi",
        "Diğer",
      ],
      message: "Mesajınız",
      messagePlaceholder: "Nasıl yardımcı olabiliriz?",
      consent:
        "Kişisel verilerimin Aydınlatma Metni kapsamında işlenmesine onay veriyorum.",
      submit: "Mesajı gönder",
      submitting: "Gönderiliyor...",
      successTitle: "Mesajınız alındı",
      successMessage:
        "Talebiniz ekibimize iletildi. En geç bir iş günü içinde size dönüş yapacağız.",
      errorTitle: "Mesaj gönderilemedi",
      errorMessage:
        "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp hattımızdan yazın.",
      validation: {
        name: "Lütfen adınızı ve soyadınızı girin.",
        email: "Geçerli bir e-posta adresi girin.",
        message: "Lütfen mesajınızı yazın (en az 10 karakter).",
        consent: "Devam etmek için onay vermeniz gerekir.",
      },
    },
  },

  legal: {
    title: "Yasal bilgiler",
    updatedLabel: "Son güncelleme",
    updatedAt: "1 Eylül 2026",
    pages: {
      privacy: {
        title: "Gizlilik Politikası",
        description: "Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz.",
        sections: [
          {
            heading: "Kapsam",
            body: [
              p("Bu Gizlilik Politikası, editexsoft.com web sitesi ve EditexSoft masaüstü uygulaması aracılığıyla işlenen kişisel verilere ilişkin esasları açıklar."),
            ],
          },
          {
            heading: "Topladığımız veriler",
            body: [
              list(
                "İletişim formu üzerinden ilettiğiniz ad, e-posta, telefon ve firma bilgileri",
                "Abonelik süreçlerinde alınan fatura bilgileri",
                "Web sitesi kullanımına ilişkin anonim istatistikler",
                "Lisans doğrulaması için anonimleştirilmiş cihaz kimliği",
              ),
            ],
          },
          {
            heading: "Verilerin kullanım amacı",
            body: [
              list(
                "Taleplerinize yanıt vermek ve destek sağlamak",
                "Abonelik ve faturalandırma süreçlerini yürütmek",
                "Ürün ve hizmet kalitesini geliştirmek",
                "Yasal yükümlülükleri yerine getirmek",
              ),
            ],
          },
          {
            heading: "Verilerin saklanması",
            body: [
              p("Masaüstü uygulamasında işlenen ürün, sipariş ve müşteri verileri kullanıcının kendi cihazında saklanır ve tarafımıza aktarılmaz. Web sitesi üzerinden iletilen veriler, ilgili amaç için gerekli süre boyunca saklanır."),
            ],
          },
          {
            heading: "Haklarınız",
            body: [
              p("6698 sayılı KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz."),
            ],
          },
        ],
      },
      terms: {
        title: "Kullanım Koşulları",
        description: "Web sitesi ve yazılım kullanımına ilişkin şartlar.",
        sections: [
          {
            heading: "Taraflar ve kabul",
            body: [
              p("Bu web sitesini kullanarak ve EditexSoft yazılımını kurarak aşağıdaki koşulları kabul etmiş sayılırsınız."),
            ],
          },
          {
            heading: "Lisans",
            body: [
              p("EditexSoft yazılımı satılmaz, kullanım hakkı abonelik süresince lisanslanır."),
              list(
                "Lisans, satın alınan paket kapsamındaki cihaz ve kullanıcı sayısıyla sınırlıdır.",
                "Yazılımın kaynak koduna erişilmesi, tersine mühendislik uygulanması yasaktır.",
                "Lisansın üçüncü kişilere devri yazılı onayımıza tabidir.",
              ),
            ],
          },
          {
            heading: "Kullanıcı yükümlülükleri",
            body: [
              list(
                "Pazaryeri ve entegratör hesaplarınızın kullanım şartlarına uymak",
                "API anahtarlarınızı güvenli şekilde saklamak",
                "Yazılımı yasa dışı amaçlarla kullanmamak",
              ),
            ],
          },
          {
            heading: "Sorumluluk sınırı",
            body: [
              p("Üçüncü taraf servislerin (pazaryeri, entegratör, kargo) kesinti veya API değişikliklerinden kaynaklanan aksaklıklardan doğrudan sorumluluk kabul edilmez. Yazılım, sektörde makul kabul edilen özenle sağlanır."),
            ],
          },
          {
            heading: "Değişiklikler",
            body: [
              p("Bu koşullar zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlanır."),
            ],
          },
        ],
      },
      kvkk: {
        title: "KVKK Aydınlatma Metni",
        description: "6698 sayılı Kanun kapsamında veri sorumlusu bilgilendirmesi.",
        sections: [
          {
            heading: "Veri sorumlusu",
            body: [
              p("6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu EditexSoft Yazılım'dır."),
            ],
          },
          {
            heading: "İşlenen kişisel veriler",
            body: [
              list(
                "Kimlik ve iletişim bilgileri (ad, soyad, e-posta, telefon)",
                "Müşteri işlem bilgileri (abonelik, fatura kayıtları)",
                "İşlem güvenliği bilgileri (log kayıtları)",
              ),
            ],
          },
          {
            heading: "İşleme amaçları ve hukuki sebep",
            body: [
              p("Kişisel verileriniz; sözleşmenin kurulması ve ifası, meşru menfaat ve hukuki yükümlülüklerin yerine getirilmesi hukuki sebeplerine dayanarak işlenmektedir."),
            ],
          },
          {
            heading: "Aktarım",
            body: [
              p("Verileriniz yalnızca yasal yükümlülükler ve hizmetin sağlanması için gerekli olduğu ölçüde, yetkili kamu kurumları ve hizmet sağlayıcılarımızla paylaşılabilir."),
            ],
          },
          {
            heading: "İlgili kişinin hakları",
            body: [
              list(
                "Kişisel verilerinin işlenip işlenmediğini öğrenme",
                "İşlenmişse buna ilişkin bilgi talep etme",
                "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
                "Silinmesini veya yok edilmesini isteme",
                "Zararın giderilmesini talep etme",
              ),
              p("Başvurularınızı destek e-posta adresimize iletebilirsiniz."),
            ],
          },
        ],
      },
      cookies: {
        title: "Çerez Politikası",
        description: "Web sitemizde kullanılan çerezler hakkında bilgi.",
        sections: [
          {
            heading: "Çerez nedir?",
            body: [
              p("Çerezler, web sitelerinin tarayıcınızda sakladığı küçük metin dosyalarıdır."),
            ],
          },
          {
            heading: "Kullandığımız çerezler",
            body: [
              table(
                ["Tür", "Amaç", "Süre"],
                [
                  ["Zorunlu", "Dil ve tema tercihinin hatırlanması", "1 yıl"],
                  ["Performans", "Anonim kullanım istatistikleri", "Oturum / 1 yıl"],
                ],
              ),
              p("Sitemizde reklam veya profilleme amaçlı üçüncü taraf çerezi kullanılmamaktadır."),
            ],
          },
          {
            heading: "Çerezleri yönetme",
            body: [
              p("Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi bazı özelliklerin çalışmamasına neden olabilir."),
            ],
          },
        ],
      },
      refund: {
        title: "İptal ve İade Koşulları",
        description: "Abonelik iptali ve ücret iadesi süreçleri.",
        sections: [
          {
            heading: "Deneme süresi",
            body: [
              p("14 günlük ücretsiz deneme süresi boyunca herhangi bir ücret tahsil edilmez ve dilediğiniz zaman vazgeçebilirsiniz."),
            ],
          },
          {
            heading: "Abonelik iptali",
            body: [
              list(
                "Aboneliğinizi üyelik panelinden tek tıkla iptal edebilirsiniz.",
                "İptal sonrasında mevcut fatura dönemi sonuna kadar hizmet devam eder.",
                "Sonraki dönem için tahsilat yapılmaz.",
              ),
            ],
          },
          {
            heading: "İade",
            body: [
              p("Yıllık abonelik satın alan kullanıcılar, ilk 14 gün içinde talep etmeleri hâlinde koşulsuz iade hakkına sahiptir. Bu süreden sonra kullanılmayan dönem için orantılı iade değerlendirmeye alınır."),
            ],
          },
          {
            heading: "Başvuru",
            body: [
              p("İade taleplerinizi destek e-posta adresimize fatura bilgilerinizle birlikte iletebilirsiniz. Talepler en geç 14 iş günü içinde sonuçlandırılır."),
            ],
          },
        ],
      },
    } as Record<LegalSlug, { title: string; description: string; sections: { heading: string; body: ReturnType<typeof p>[] }[] }>,
  },

  footer: {
    description:
      "EditexSoft, e-ticaret operasyonunuzu tek programda toplayan pazaryeri ve ERP entegrasyon yazılımıdır.",
    columns: [
      {
        title: "Ürün",
        links: [
          { label: "Özellikler", href: "/features" },
          { label: "Entegrasyonlar", href: "/integrations" },
          { label: "Fiyatlandırma", href: "/pricing" },
          { label: "İndir", href: "/download" },
        ],
      },
      {
        title: "Kaynaklar",
        links: [
          { label: "Kullanım kılavuzu", href: "/docs" },
          { label: "Sık sorulan sorular", href: "/faq" },
          { label: "Sürüm notları", href: "/download#changelog" },
          { label: "İletişim", href: "/contact" },
        ],
      },
      {
        title: "Yasal",
        links: [
          { label: "Gizlilik Politikası", href: "/legal/privacy" },
          { label: "Kullanım Koşulları", href: "/legal/terms" },
          { label: "KVKK Aydınlatma Metni", href: "/legal/kvkk" },
          { label: "Çerez Politikası", href: "/legal/cookies" },
          { label: "İptal ve İade", href: "/legal/refund" },
        ],
      },
    ],
    contactTitle: "İletişim",
    rights: "Tüm hakları saklıdır.",
    madeIn: "Türkiye'de geliştirildi",
  },

  landing: {
    meta: {
      brand: "EDITEXSOFT",
      sub: "ENTEGRASYON SİSTEMİ",
      est: "KURULUŞ 2019",
      platform: "WIN 10 / 11 / SERVER",
    },
    hero: {
      index: "00",
      label: "GİRİŞ",
      line1: "PAZARYERİ",
      line2: "İLE MUHASEBE",
      line3: "ARASINDAKİ",
      line4: "TEK HAT",
      lede: "Sipariş, stok, fiyat, fatura. Dört veri kümesi, yirmiden fazla kanal, tek bir yön. Kopyala-yapıştır yok; kesintisiz bir hat var.",
      primary: "PROGRAMI İNDİR",
      secondary: "KULLANIM KILAVUZU",
      specs: {
        version: "SÜRÜM",
        platform: "PLATFORM",
        platformValue: "WINDOWS 64-BIT",
        setup: "KURULUM",
        setupValue: "≈ 2 DAKİKA",
        trial: "DENEME",
        trialValue: "14 GÜN / KARTSIZ",
      },
      tickerLabel: "BAĞLI KANALLAR",
    },
    flow: {
      index: "01",
      label: "AKIŞ",
      titleLines: ["A NOKTASINDAN", "B NOKTASINA"],
      description:
        "Veri iki yönde ve kesintisiz akar. Aradaki her adım kayıt altındadır; hata olursa hat durur, sessizce yanlış yazmaz.",
      a: {
        code: "A",
        title: "SATIŞ KANALLARI",
        note: "SİPARİŞ / STOK / İADE",
        items: ["TRENDYOL", "HEPSİBURADA", "N11", "AMAZON", "ÇİÇEKSEPETİ"],
      },
      core: {
        title: "SENKRON MOTORU",
        note: "YEREL ÇALIŞIR / AES-256",
        steps: [
          { k: "01", v: "ÇEK", d: "Kanal API'lerinden sipariş ve stok verisi alınır." },
          { k: "02", v: "EŞLE", d: "Barkod veya stok kodu üzerinden kayıtlar eşlenir." },
          { k: "03", v: "DÖNÜŞTÜR", d: "Komisyon, kargo ve KDV kuralları uygulanır." },
          { k: "04", v: "YAZ", d: "Fiş, fatura ve stok hareketi hedefe işlenir." },
        ],
      },
      b: {
        code: "B",
        title: "ÖN MUHASEBE / ERP",
        note: "FİŞ / FATURA / CARİ",
        items: ["LOGO", "MİKRO", "NETSİS", "NEBİM V3", "PARAŞÜT"],
      },
      forward: "İLERİ HAT — SİPARİŞ",
      returnPath: "GERİ HAT — STOK VE FİYAT YAZIMI",
      interval: "60 SANİYEDE BİR",
    },
    capabilities: {
      index: "02",
      label: "YETENEK",
      titleLines: ["NE YAPAR"],
      note: "SEKİZ MODÜL / TEK PROGRAM",
    },
    metrics: { index: "03", label: "ÖLÇÜ", titleLines: ["RAKAMLAR"] },
    network: {
      index: "04",
      label: "AĞ",
      titleLines: ["BAĞLANTI", "DİZİNİ"],
      description:
        "Dolu kare bağlantının yayında olduğunu, boş kare geliştirme sırasında olduğunu gösterir.",
      cta: "TÜM ENTEGRASYONLAR",
    },
    tariff: {
      index: "05",
      label: "TARİFE",
      titleLines: ["FİYAT"],
      note: "GİZLİ ÜCRET YOK / İSTEDİĞİNİZ ZAMAN İPTAL",
    },
    support: {
      index: "06",
      label: "TEMAS",
      title1: "TAKILDIĞINIZ YERDE",
      title2: "GERÇEK BİR İNSAN",
      description:
        "Destek formu doldurup sıraya girmezsiniz. Yazarsınız, ekibimiz gerekirse uzaktan bağlanır.",
      cta: "WHATSAPP HATTINA YAZ",
      meta: {
        channel: "KANAL",
        channelValue: "WHATSAPP / TELEFON / E-POSTA",
        hours: "SAATLER",
        response: "ORT. YANIT",
        responseValue: "≈ 5 DAKİKA",
      },
    },
    closing: {
      index: "07",
      label: "SON",
      line1: "HATTI",
      line2: "BUGÜN KURUN",
      description:
        "14 gün boyunca tüm özellikler açık. Kurulum ve eşleştirme desteği bizden.",
      primary: "PROGRAMI İNDİR",
      secondary: "DEMO TALEP EDİN",
    },
  },

  notFound: {
    title: "Sayfa bulunamadı",
    description:
      "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.",
    cta: "Ana sayfaya dön",
    secondary: "Kullanım kılavuzu",
  },
};

export type Dictionary = typeof tr;
