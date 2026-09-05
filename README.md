# EditexSoft — Tanıtım Web Sitesi

Pazaryeri ve ERP entegrasyon yazılımı **EditexSoft** için Next.js ile geliştirilmiş,
Türkçe/İngilizce çok dilli, karanlık tema destekli tanıtım sitesi.

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Dil:** TypeScript
- **Stil:** Tailwind CSS v4 (CSS değişkeni tabanlı tasarım sistemi)
- **Dağıtım:** Vercel
- **Alan adı:** editexsoft.com

---

## Hızlı başlangıç

```bash
npm install
cp .env.example .env.local     # değerleri doldurun
npm run dev                    # http://localhost:3000
```

Diğer komutlar:

```bash
npm run build       # üretim derlemesi
npm run start       # derlenmiş sürümü çalıştır
npm run lint        # ESLint
npm run typecheck   # TypeScript kontrolü
npm run check       # typecheck + lint + build
```

---

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/[dil]` | Ana sayfa — hero, özellikler, nasıl çalışır, entegrasyonlar, güvenlik, fiyat, destek, S.S.S. |
| `/[dil]/features` | Özellik grupları ve performans metrikleri |
| `/[dil]/integrations` | Pazaryeri, e-ticaret, ERP, kargo ve e-fatura entegrasyonları |
| `/[dil]/pricing` | Paketler, aylık/yıllık geçişi, karşılaştırma tablosu, abonelik S.S.S. |
| `/[dil]/download` | .exe indirme, sistem gereksinimleri, kurulum adımları, sürüm notları |
| `/[dil]/docs` | Kullanım kılavuzu dizini |
| `/[dil]/docs/[konu]` | 8 adet kılavuz makalesi (kurulum, ilk ayarlar, pazaryeri bağlama, ürün eşleştirme, sipariş akışı, fatura, sorun giderme, güncelleme) |
| `/[dil]/faq` | Sık sorulan sorular |
| `/[dil]/contact` | İletişim kanalları ve form |
| `/[dil]/legal/[belge]` | Gizlilik, kullanım koşulları, KVKK, çerez, iptal & iade |

`[dil]` = `tr` veya `en`. `/` adresine gelen ziyaretçi tarayıcı diline göre
yönlendirilir; seçim bir yıl boyunca çerezde saklanır.

---

## İçeriği düzenleme

Sitedeki **tüm metinler** iki sözlük dosyasında toplanmıştır:

```
src/i18n/dictionaries/tr.ts     # Türkçe
src/i18n/dictionaries/en.ts     # İngilizce
```

`tr.ts` referans kabul edilir; `en.ts` onun tipini uygulamak zorundadır
(`export const en: Dictionary`). Türkçeye yeni bir alan eklerseniz TypeScript
İngilizcede de eklemenizi zorunlu kılar — böylece çeviri unutulmaz.

Marka, iletişim ve indirme bilgileri ise tek dosyadadır:

```
src/config/site.ts
```

> **Önemli:** Fiyatlar, sürüm numarası, telefon/WhatsApp numarası, adres ve
> istatistikler örnek değerlerle doldurulmuştur. Yayına almadan önce
> `src/config/site.ts` ve sözlük dosyalarındaki değerleri kendi bilgilerinizle
> güncelleyin. Hukuki metinler (KVKK, gizlilik, kullanım koşulları, iade) taslak
> niteliğindedir; yayına almadan önce bir hukukçuya kontrol ettirin.

### Yeni kılavuz konusu ekleme

1. `src/i18n/types.ts` içindeki `docSlugs` dizisine yeni bir slug ekleyin.
2. `tr.ts` ve `en.ts` içindeki `docs.articles` altına makaleyi yazın.
3. `docs.categories` içinde uygun başlığa slug'ı ekleyin.

Sayfa, sitemap ve kenar menü otomatik olarak güncellenir.

### Yeni entegrasyon ekleme

`integrationsPage.categories` altındaki ilgili kategoriye
`{ name: "...", soon: false }` satırı ekleyin. Ana sayfadaki önizleme ve
entegrasyonlar sayfası otomatik güncellenir.

---

## Proje yapısı

```
src/
├── app/
│   ├── [locale]/            # Tüm sayfalar (kök layout burada, <html> dahil)
│   │   ├── layout.tsx       # Fontlar, tema betiği, header/footer, JSON-LD
│   │   ├── page.tsx         # Ana sayfa
│   │   ├── opengraph-image.tsx
│   │   └── ...              # features, pricing, download, docs, faq, contact, legal
│   ├── api/contact/route.ts # İletişim formu uç noktası
│   ├── icon.tsx             # Favicon (çalışma anında PNG üretilir)
│   ├── apple-icon.tsx
│   ├── sitemap.ts / robots.ts / manifest.ts
│   └── globals.css          # Tasarım sistemi (renk token'ları, animasyonlar)
├── components/
│   ├── layout/              # Header, Footer, tema/dil değiştirici, WhatsApp butonu
│   ├── sections/            # Sayfa bölümleri (hero, fiyat kartları, form ...)
│   └── ui/                  # Buton, container, accordion, ikonlar, içerik blokları
├── config/site.ts           # Marka ve iletişim ayarları
├── i18n/                    # Diller, sözlükler, içerik tipleri
├── lib/                     # Yardımcılar (cn, fiyat biçimlendirme, SEO)
└── proxy.ts                 # Dil algılama ve yönlendirme (Next 16 "middleware")
```

---

## Tasarım sistemi

Renkler `src/app/globals.css` içinde CSS değişkeni olarak tanımlıdır ve
Tailwind'e `@theme inline` ile aktarılır. Marka rengini değiştirmek için
`:root` altındaki `--brand-*` değerlerini güncellemeniz yeterlidir; karanlık
tema karşılıkları `.dark` bloğundadır.

Tema tercihi `localStorage` içinde (`editex-theme`) saklanır ve sayfa boyanmadan
önce çalışan satır içi bir betikle uygulanır, böylece açılışta renk sıçraması olmaz.
Tercih yoksa işletim sistemi ayarı kullanılır.

---

## İletişim formu

`POST /api/contact` üç şekilde çalışabilir:

1. `RESEND_API_KEY` tanımlıysa e-posta gönderilir.
2. Yoksa `CONTACT_WEBHOOK_URL` tanımlıysa oraya JSON gönderilir.
3. İkisi de yoksa mesaj sunucu günlüğüne yazılır (geliştirme için).

Form gizli bir "bot tuzağı" alanı içerir; doldurulmuş isteklere sessizce
başarı yanıtı döner ve mesaj iletilmez.

---

## SEO

- Her sayfa için `canonical` ve `hreflang` (tr-TR / en-US / x-default)
- Dile göre üretilen Open Graph görseli (`/[dil]/opengraph-image`)
- JSON-LD: `Organization`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`
- `sitemap.xml` (iki dilin tüm sayfaları) ve `robots.txt`
- PWA manifest ve otomatik üretilen favicon / apple-touch-icon

---

## Dağıtım

Vercel'e dağıtım ve editexsoft.com alan adının bağlanması için
[DEPLOYMENT.md](DEPLOYMENT.md) dosyasına bakın.
