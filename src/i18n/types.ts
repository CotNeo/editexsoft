/** Kılavuz ve hukuki sayfalarda kullanılan içerik blokları */
export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "note"; variant: "info" | "tip" | "warn"; title: string; text: string }
  | { type: "code"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export const p = (text: string): DocBlock => ({ type: "p", text });
export const list = (...items: string[]): DocBlock => ({ type: "list", items });
export const steps = (...items: string[]): DocBlock => ({ type: "steps", items });
export const code = (text: string): DocBlock => ({ type: "code", text });
export const table = (head: string[], rows: string[][]): DocBlock => ({
  type: "table",
  head,
  rows,
});
export const note = (
  variant: "info" | "tip" | "warn",
  title: string,
  text: string,
): DocBlock => ({ type: "note", variant, title, text });

export type DocSection = { heading: string; body: DocBlock[] };
export type DocArticle = {
  title: string;
  description: string;
  readingTime: string;
  sections: DocSection[];
};

export const docSlugs = [
  "installation",
  "first-setup",
  "connect-marketplace",
  "product-matching",
  "order-flow",
  "invoicing",
  "troubleshooting",
  "updates",
] as const;
export type DocSlug = (typeof docSlugs)[number];

export const legalSlugs = ["privacy", "terms", "kvkk", "cookies", "refund"] as const;
export type LegalSlug = (typeof legalSlugs)[number];
