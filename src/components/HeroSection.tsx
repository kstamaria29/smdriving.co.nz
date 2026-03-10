import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { brand } from "@/content/brand";
import { heroContent } from "@/content/hero";
import { getRevealProps } from "@/lib/motion";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="section-shell pt-8 sm:pt-10"
    >
      <Container>
        <motion.div
          {...getRevealProps(prefersReducedMotion)}
          className="surface-card relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 xl:px-10 xl:py-12 3xl:px-12 3xl:py-14"
        >
          <div className="relative grid gap-10 xl:grid-cols-[0.96fr_0.84fr] xl:items-start xl:gap-14 3xl:gap-20">
            <div>
              <div className="relative rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={brand.logo.src}
                      alt=""
                      aria-hidden="true"
                      className="w-[27rem] max-w-none opacity-[0.09] blur-[0.25px] dark:opacity-[0.16] sm:w-[31rem] md:w-[34rem] lg:w-[36rem] xl:w-[38rem] 3xl:w-[44rem]"
                    />
                  </div>
                  <div className="absolute right-6 top-4 h-36 w-36 rounded-full bg-brand-red/10 blur-3xl" />
                  <div className="absolute left-0 top-8 h-40 w-40 rounded-full bg-brand-blue/12 blur-3xl" />
                </div>

                <div className="relative px-1 sm:px-2">
                  <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/16 bg-white/72 px-3 py-2 pr-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/6">
                    <img
                      src={brand.logo.src}
                      alt=""
                      aria-hidden="true"
                      className="h-10 w-10 object-contain"
                    />
                    <div className="min-w-0">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-[#8eb3ff]">
                        {heroContent.schoolName}
                      </p>
                      <p className="text-xs text-brand-muted dark:text-slate-300">
                        Auckland driving lessons
                      </p>
                    </div>
                  </div>

                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink dark:text-slate-100 sm:text-5xl lg:text-[3.95rem] lg:leading-[1.02] 3xl:text-[4.8rem]">
                    {heroContent.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted dark:text-slate-300 sm:text-lg 3xl:max-w-3xl 3xl:text-[1.18rem]">
                    {heroContent.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={heroContent.primaryCta.href}>
                      {heroContent.primaryCta.label}
                      <PhoneCall className="ml-2 h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink
                      href={heroContent.secondaryCta.href}
                      variant="ghost"
                    >
                      {heroContent.secondaryCta.label}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 3xl:max-w-[48rem]">
                {heroContent.supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-brand-border/80 bg-white/72 px-4 py-4 text-sm leading-6 text-brand-ink/84 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-5"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:justify-self-end xl:max-w-[34rem] 3xl:max-w-[38rem]">
              <div className="surface-card-strong route-line overflow-hidden p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/64">
                  {heroContent.founderCard.kicker}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {heroContent.founderCard.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  {heroContent.founderCard.subtitle}
                </p>
                <div className="mt-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {heroContent.founderCard.credential}
                </div>
                <ul className="mt-5 grid gap-3 text-sm text-white/82">
                  {heroContent.founderCard.badges.map((badge) => (
                    <li
                      key={badge}
                      className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                      <span>{badge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
