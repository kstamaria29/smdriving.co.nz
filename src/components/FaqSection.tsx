import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { faqsContent } from "@/content/faqs";
import { getRevealProps } from "@/lib/motion";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="faqs"
      className="section-shell"
    >
      <Container>
        <motion.div {...getRevealProps(prefersReducedMotion)}>
          <SectionHeading
            label={faqsContent.label}
            title={faqsContent.title}
            description={faqsContent.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-4">
          {faqsContent.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                {...getRevealProps(prefersReducedMotion, index * 0.03, 18)}
                className="surface-card overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? -1 : index))
                    }
                  >
                    <span className="pr-4 text-base font-semibold text-brand-ink dark:text-slate-100 sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                      className="rounded-full border border-brand-border bg-white p-2 text-brand-blue dark:border-white/10 dark:bg-[#12203a] dark:text-slate-100"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-muted dark:text-slate-300 sm:px-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
