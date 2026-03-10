import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingContent } from "@/content/pricing";
import { getRevealProps } from "@/lib/motion";

const pricingIcons = [Clock3, CalendarDays];

export const PricingSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="section-shell"
    >
      <Container>
        <motion.div {...getRevealProps(prefersReducedMotion)}>
          <SectionHeading
            label={pricingContent.label}
            title={pricingContent.title}
            description={pricingContent.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {pricingContent.tiers.map((tier, index) => {
              const Icon = pricingIcons[index];

              return (
                <motion.article
                  key={tier.name}
                  {...getRevealProps(prefersReducedMotion, index * 0.06)}
                  className="surface-card h-full p-6 sm:p-7"
                >
                  <div className="w-fit rounded-full bg-brand-red/10 p-3 text-brand-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-ink dark:text-slate-100">
                    {tier.name}
                  </h3>
                  <p className="mt-6 text-4xl font-semibold text-brand-ink dark:text-slate-100">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-brand-blue">
                    {tier.unit}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-brand-muted dark:text-slate-300">
                    {tier.note}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            {...getRevealProps(prefersReducedMotion, 0.08)}
            className="surface-card-strong route-line h-full overflow-hidden p-6 sm:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/68">
              Transparent Pricing
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Clear hourly rates, no guesswork.
            </h3>
            <p className="mt-4 text-base leading-7 text-white/74">
              {pricingContent.footerNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">Send an Enquiry</ButtonLink>
              <ButtonLink
                href="#services"
                variant="ghost"
                className="border-white/16 bg-white/8 text-white hover:border-white/28 hover:bg-white/12"
              >
                Compare Services
              </ButtonLink>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
};
