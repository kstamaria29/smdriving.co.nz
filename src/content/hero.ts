import { brand } from "@/content/brand";

export const heroContent = {
  schoolName: brand.name,
  title: "Learn to drive with confidence.",
  description:
    "SM Driving School helps learner drivers, restricted and full licence candidates, and overseas licence conversions with practical coaching from Clifford Sta Maria, an NZTA Approved Driving Instructor.",
  primaryCta: {
    label: "Contact us Now",
    href: "#contact",
  },
  secondaryCta: {
    label: "View Pricing",
    href: "#pricing",
  },
  supportingPoints: [
    "Learner lessons that build calm, repeatable habits from the start",
    "Focused preparation for restricted and full licence tests",
    "Overseas licence conversion support with practical NZ-road coaching",
    "Mock and video assessments with direct, actionable feedback",
  ],
  founderCard: {
    kicker: "Founder-led instruction",
    title: brand.founder,
    subtitle: "Practical lessons with transparent coaching and local test insight.",
    credential: "NZTA Approved Driving Instructor",
    badges: [
      "VTNZ Glenfield familiarity",
      "Reverse parallel parking support",
      "Video and mock assessments",
    ],
  },
} as const;
