# Dağıtım — Vercel + editexsoft.com

Bu dosya siteyi Vercel'e alma ve GoDaddy'de duran `editexsoft.com` alan adını
bağlama adımlarını içerir.

---

## 1. Depoyu hazırlayın

```bash
git init
git add .
git commit -m "EditexSoft tanıtım sitesi"
git branch -M main
git remote add origin git@github.com:<kullanici>/editexsoft-web.git
git push -u origin main
```

> `.gitignore` `node_modules`, `.next` ve `.env*.local` dosyalarını zaten hariç tutar.
> Kurulum `.exe` dosyasını depoya eklemeyin; bkz. `public/downloads/README.txt`.

---

## 2. Vercel projesini oluşturun

1. [vercel.com/new](https://vercel.com/new) → GitHub deposunu içe aktarın.
2. Framework otomatik olarak **Next.js** algılanır; derleme ayarlarını değiştirmeyin.
3. **Environment Variables** bölümüne `.env.example` içindeki değişkenleri girin.
   En azından şunlar:

   | Değişken | Değer |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://editexsoft.com` |
   | `NEXT_PUBLIC_APP_URL` | `https://app.editexsoft.com` |
   | `NEXT_PUBLIC_WHATSAPP_PHONE` | Gerçek WhatsApp numaranız (ör. `905321234567`) |
   | `NEXT_PUBLIC_PHONE_DISPLAY` | `+90 532 123 45 67` |
   | `NEXT_PUBLIC_DOWNLOAD_URL` | `.exe` dosyasının adresi |
   | `RESEND_API_KEY` *(ops.)* | İletişim formu e-postaları için |
   | `CONTACT_TO_EMAIL` *(ops.)* | Formun düşeceği adres |

4. **Deploy** deyin. İlk dağıtım birkaç dakika sürer.

---

## 3. Alan adını bağlayın

Vercel panelinde **Project → Settings → Domains** bölümünden ekleyin:

- `editexsoft.com` (birincil)
- `www.editexsoft.com` → `editexsoft.com` adresine yönlendirilsin

Vercel size ekranda **tam DNS değerlerini** gösterir. Aşağıdaki adımları
uygularken **ekranda gördüğünüz değerleri esas alın**; buradaki değerler
referanstır.

### GoDaddy DNS'inde yapılacak değişiklikler

Mevcut bölge dosyanızda şu iki kayıt siteyi eski sunucuya yönlendiriyor:

```
@     3600  IN  A      160.153.0.55          <-- DEĞİŞECEK
www   3600  IN  CNAME  @                     <-- DEĞİŞECEK
```

Bunları şu şekilde güncelleyin:

| Tür | Ad | Yeni değer | TTL |
| --- | --- | --- | --- |
| `A` | `@` | Vercel'in verdiği IP (genellikle `216.198.79.1`) | 600 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 600 |

> GoDaddy'de apex (`@`) için CNAME kullanılamaz; bu yüzden apex `A` kaydı,
> `www` ise `CNAME` olarak ayarlanır.

### Dokunmayın — e-posta ve doğrulama kayıtları

Aşağıdaki kayıtlar e-posta teslimatı içindir, **silmeyin**:

```
@                          TXT    "v=spf1 include:secureserver.net ~all"
_dmarc                     TXT    "v=DMARC1; p=quarantine; ..."
secureserver1._domainkey   CNAME  s1.dkim.editexsoft_com.489.onsecureserver.net.
secureserver2._domainkey   CNAME  s2.dkim.editexsoft_com.489.onsecureserver.net.
```

Varsa `MX` kayıtlarınızı da olduğu gibi bırakın. Alan adı sunucuları
(`ns09/ns10.domaincontrol.com`) değişmez — DNS yönetimi GoDaddy'de kalır.

`_acme-challenge` kaydı eski barındırıcınızın (Cloudflare) sertifika doğrulaması
içindir; Vercel'e geçtikten sonra gerek kalmaz, silinebilir. Silmezseniz de
sorun çıkarmaz.

`_domainconnect` kaydı GoDaddy'nin otomatik yapılandırma servisidir, kalabilir.

### Doğrulama

DNS yayılması genellikle 10–30 dakika sürer (TTL 3600 ise 1 saate kadar).

```bash
dig +short editexsoft.com
dig +short www.editexsoft.com
```

Vercel, alan adı çözümlendiği anda Let's Encrypt sertifikasını otomatik alır.
`Domains` ekranındaki tüm satırlar yeşile döndüğünde site yayındadır.

---

## 4. Yayın sonrası kontrol listesi

- [ ] `src/config/site.ts` içindeki telefon, e-posta ve adres bilgileri güncellendi
- [ ] WhatsApp numarası gerçek numarayla değiştirildi ve link test edildi
- [ ] Fiyat paketleri ve tutarlar (`pricingPage.plans`) güncellendi
- [ ] `.exe` dosyası yüklendi, `NEXT_PUBLIC_DOWNLOAD_URL` doğru adresi gösteriyor
- [ ] Sürüm numarası, tarih, boyut ve (varsa) SHA-256 güncellendi
- [ ] Sürüm notları (`downloadPage.changelog`) gerçek notlarla değiştirildi
- [ ] Hukuki metinler hukukçu tarafından kontrol edildi
- [ ] İletişim formu uçtan uca test edildi (mesaj gerçekten ulaşıyor mu?)
- [ ] Google Search Console'a `https://editexsoft.com/sitemap.xml` gönderildi
- [ ] `https://editexsoft.com/robots.txt` ve `/sitemap.xml` erişilebilir
- [ ] Sosyal medya bağlantıları (`siteConfig.social`) doğru hesaplara gidiyor
- [ ] Open Graph görseli paylaşımda doğru görünüyor
      ([opengraph.xyz](https://www.opengraph.xyz) ile test edin)

---

## 5. Sonraki adım: üyelik uygulaması

Header'daki **Panele Giriş** ve fiyat kartlarındaki **Ücretsiz başlayın**
butonları `NEXT_PUBLIC_APP_URL` değişkenine gider (varsayılan
`https://app.editexsoft.com`).

Üyelik/abonelik uygulamasını ayrı bir Vercel projesi olarak yayınlayıp
GoDaddy'de şu kaydı eklemeniz yeterlidir:

```
app   3600  IN  CNAME  cname.vercel-dns.com.
```

Tanıtım sitesinde hiçbir kod değişikliği gerekmez.

---

## Analitik (opsiyonel)

Vercel panelinde **Analytics** ve **Speed Insights** sekmelerinden tek tıkla
açabilirsiniz. Kod tarafında paket eklemek isterseniz:

```bash
npm i @vercel/analytics @vercel/speed-insights
```

ve `src/app/[locale]/layout.tsx` içinde `<body>` kapanışından önce
`<Analytics />` ile `<SpeedInsights />` bileşenlerini render edin.
