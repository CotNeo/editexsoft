import { ButtonLink, ExternalButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconDownload, IconWhatsapp } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { cta } = dict.home;

  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.75rem] border border-border-base bg-[linear-gradient(125deg,var(--brand-700),var(--brand-600)_38%,var(--accent-600))] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--teal-400)_50%,transparent)] blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[1.75rem] font-bold leading-tight text-white sm:text-[2.35rem]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.975rem] leading-relaxed text-white/85">
              {cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={`/${locale}/download`}
                size="lg"
                variant="secondary"
                className="w-full bg-white text-brand-700 hover:bg-white sm:w-auto"
              >
                <IconDownload className="h-[1.15rem] w-[1.15rem]" />
                {cta.primary}
              </ButtonLink>
              <ExternalButtonLink
                href={whatsappLink(dict.common.whatsappMessage)}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="outline"
                className="w-full border-white/35 bg-white/10 text-white backdrop-blur hover:border-white/60 hover:bg-white/20 sm:w-auto"
              >
                <IconWhatsapp className="h-[1.15rem] w-[1.15rem]" />
                {cta.secondary}
              </ExternalButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
