import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/content/about";
import { brand } from "@/content/brand";
import { getRevealProps } from "@/lib/motion";

export const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-shell"
    >
      <Container>
        <div className="surface-card-strong overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div {...getRevealProps(prefersReducedMotion)}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6">
                <img
                  src={brand.founderPortrait.src}
                  alt={brand.founderPortrait.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...getRevealProps(prefersReducedMotion, 0.08)}>
              <SectionHeading
                label={aboutContent.label}
                title={aboutContent.title}
                description={aboutContent.description}
                invert
              />

              <div className="mt-6 grid gap-5 text-base leading-8 text-white/78">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutContent.credentials.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
