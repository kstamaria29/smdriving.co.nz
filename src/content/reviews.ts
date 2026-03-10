import type { ReviewItem } from "@/types/content";

export const reviewsContent = {
  label: "Reviews",
  title: "Encouraging, direct feedback that helps students make progress fast.",
  description:
    "These V1 reviews are polished placeholders based on typical student outcomes and are easy to replace with verified testimonials later.",
  items: [
    {
      name: "Maria L.",
      tag: "Passed Restricted",
      quote:
        "Clifford explained everything in a very practical way and fixed the small mistakes that kept costing me. I felt much more prepared by test day.",
    },
    {
      name: "Jason T.",
      tag: "Overseas Conversion",
      quote:
        "I already knew how to drive, but I needed help understanding New Zealand road expectations. The lesson was clear, honest, and exactly what I needed.",
    },
    {
      name: "Priya N.",
      tag: "Nervous Beginner",
      quote:
        "I was very anxious when I started. Clifford kept the lesson calm, broke everything down properly, and helped me gain confidence without pressure.",
    },
    {
      name: "Ethan R.",
      tag: "Parallel Parking Help",
      quote:
        "The mock assessment and parking breakdown made a huge difference. I finally understood what to do and why, instead of just guessing.",
    },
  ] satisfies ReviewItem[],
} as const;
