import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconBook } from "@/components/ui/icons";
import { getDictionary } from "@/i18n";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  const locale = defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-0 h-[24rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-500)_22%,transparent),transparent)] blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <p className="font-display text-[5rem] font-extrabold leading-none text-gradient sm:text-[7rem]">
          404
        </p>
        <h1 className="mt-4 text-[1.75rem] font-bold text-fg sm:text-4xl">{dict.notFound.title}</h1>
        <p className="mt-4 max-w-lg text-[0.975rem] leading-relaxed text-fg-muted">
          {dict.notFound.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={`/${locale}`} className={buttonClass({ size: "lg" })}>
            {dict.notFound.cta}
            <IconArrowRight className="h-[1.05rem] w-[1.05rem]" />
          </Link>
          <Link
            href={`/${locale}/docs`}
            className={buttonClass({ variant: "outline", size: "lg" })}
          >
            <IconBook className="h-[1.05rem] w-[1.05rem]" />
            {dict.notFound.secondary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
