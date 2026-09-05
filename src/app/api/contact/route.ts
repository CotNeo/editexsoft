import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  locale?: string;
  /** Bot tuzağı — dolu gelirse istek sessizce yok sayılır */
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

async function deliver(data: Required<Omit<Payload, "website">>) {
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const lines = [
    `Ad Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone || "-"}`,
    `Firma: ${data.company || "-"}`,
    `Konu: ${data.subject}`,
    `Dil: ${data.locale}`,
    "",
    data.message,
  ].join("\n");

  // 1) Resend ile e-posta gönderimi
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || `EditexSoft <onboarding@resend.dev>`,
        to: [to],
        reply_to: data.email,
        subject: `[${siteConfig.name}] ${data.subject} — ${data.name}`,
        text: lines,
      }),
    });
    if (!response.ok) {
      throw new Error(`Resend error: ${response.status}`);
    }
    return;
  }

  // 2) Genel webhook (Slack, Make, Zapier, n8n vb.)
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, text: lines }),
    });
    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }
    return;
  }

  // 3) Yapılandırma yoksa sunucu günlüğüne yaz
  console.info("[contact] Yeni form gönderimi (iletim yapılandırılmadı)\n%s", lines);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bot tuzağı doluysa başarılı gibi davran, hiçbir şey gönderme
  if (clean(body.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    company: clean(body.company, 160),
    subject: clean(body.subject, 120) || "Genel",
    message: clean(body.message, 4000),
    locale: clean(body.locale, 5) || "tr",
  };

  const errors: string[] = [];
  if (data.name.length < 2) errors.push("name");
  if (!EMAIL_RE.test(data.email)) errors.push("email");
  if (data.message.length < 10) errors.push("message");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  try {
    await deliver(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Gönderim başarısız:", error);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
