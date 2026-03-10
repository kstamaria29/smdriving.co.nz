import type { ServiceItem } from "@/types/content";

export const servicesContent = {
  label: "Services",
  title: "Driving lessons designed around the exact stage you are in.",
  description:
    "Each lesson type is focused, straightforward, and tailored to help you make measurable progress on the road.",
  items: [
    {
      slug: "learner-lessons",
      title: "Learner Driver Lessons",
      audience: "For brand-new drivers or anyone still building early confidence.",
      focus:
        "Foundational car control, observation, intersections, lane positioning, and calm decision-making.",
      outcome:
        "You build strong habits early instead of unlearning poor technique later.",
    },
    {
      slug: "restricted-prep",
      title: "Restricted Licence Preparation",
      audience: "For drivers preparing for a restricted test or fixing common errors.",
      focus:
        "Test-style route work, scanning, hazard awareness, speed control, and decision points.",
      outcome:
        "You arrive knowing what the test expects and how to drive with consistency.",
    },
    {
      slug: "full-prep",
      title: "Full Licence Preparation",
      audience: "For restricted drivers getting ready to step up to a full licence.",
      focus:
        "Commentary driving, independent judgement, hazard identification, and higher-level road awareness.",
      outcome:
        "You sharpen the defensive driving skills needed for a confident full test drive.",
    },
    {
      slug: "overseas-conversion",
      title: "Overseas Licence Conversion Support",
      audience: "For experienced drivers who can drive but need to adjust to NZ rules and test expectations.",
      focus:
        "NZ road rules, local driving conventions, roundabouts, positioning, and common conversion mistakes.",
      outcome:
        "You adapt your existing driving experience into safe, test-ready performance in New Zealand.",
    },
  ] satisfies ServiceItem[],
} as const;
