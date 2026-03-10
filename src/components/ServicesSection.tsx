import { motion, useReducedMotion } from "motion/react";
import { BookOpen, CarFront, Globe2, ScanSearch } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { servicesContent } from "@/content/services";
import { getRevealProps } from "@/lib/motion";

const serviceIcons = [BookOpen, ScanSearch, CarFront, Globe2];

export const ServicesSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="section-shell"
    >
      <Container>
        <motion.div {...getRevealProps(prefersReducedMotion)}>
          <SectionHeading
            label={servicesContent.label}
            title={servicesContent.title}
            description={servicesContent.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {servicesContent.items.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.slug}
                {...getRevealProps(prefersReducedMotion, index * 0.06)}
                className="surface-card h-full p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-ink dark:text-slate-100">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                      {service.audience}
                    </p>
                  </div>
                  <div className="rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 grid gap-4 text-sm leading-7 text-brand-muted dark:text-slate-300">
                  <p>
                    <span className="font-semibold text-brand-ink dark:text-slate-100">
                      Focus:
                    </span>{" "}
                    {service.focus}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-ink dark:text-slate-100">
                      Outcome:
                    </span>{" "}
                    {service.outcome}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
