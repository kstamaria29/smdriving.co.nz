import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { reviewsContent } from "@/content/reviews";
import { getRevealProps } from "@/lib/motion";

export const ReviewsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [featuredReview, ...restReviews] = reviewsContent.items;

  return (
    <section
      id="reviews"
      className="section-shell"
    >
      <Container>
        <motion.div {...getRevealProps(prefersReducedMotion)}>
          <SectionHeading
            label={reviewsContent.label}
            title={reviewsContent.title}
            description={reviewsContent.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.article
            {...getRevealProps(prefersReducedMotion)}
            className="surface-card-strong relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute right-6 top-6 rounded-full bg-white/8 p-3 text-brand-red">
              <Quote className="h-5 w-5" />
            </div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
              {featuredReview.tag}
            </span>
            <p className="mt-6 max-w-xl text-xl leading-9 text-white sm:text-2xl">
              “{featuredReview.quote}”
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {featuredReview.name}
            </p>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {restReviews.map((review, index) => (
              <motion.article
                key={review.name}
                {...getRevealProps(prefersReducedMotion, index * 0.06)}
                className="surface-card p-6"
              >
                <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {review.tag}
                </span>
                <p className="mt-5 text-base leading-8 text-brand-ink/82 dark:text-slate-200">
                  “{review.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted dark:text-slate-300">
                  {review.name}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
