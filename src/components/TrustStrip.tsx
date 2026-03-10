import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, MapPinned, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { trustContent } from "@/content/trust";
import { getRevealProps } from "@/lib/motion";

const trustIcons = [ShieldCheck, BadgeCheck, MapPinned, UserRoundCheck];

export const TrustStrip = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell py-8 sm:py-10">
      <Container>
        <motion.div
          {...getRevealProps(prefersReducedMotion)}
          className="surface-card-strong overflow-hidden px-5 py-6 sm:px-7"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/68">
                Trust Signals
              </p>
              <h2 className="mt-3 max-w-md text-2xl font-semibold text-white sm:text-3xl">
                {trustContent.heading}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustContent.items.map((item, index) => {
                const Icon = trustIcons[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4"
                  >
                    {item.mark ? (
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-2">
                        <img
                          src={item.mark.src}
                          alt={item.mark.alt}
                          className="h-14 w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-fit rounded-full bg-white/8 p-3">
                        <Icon className="h-5 w-5 text-brand-red" />
                      </div>
                    )}
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
