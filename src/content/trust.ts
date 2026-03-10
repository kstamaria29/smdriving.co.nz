import nztaMark from "@/assets/credential-nzta.svg";
import streetTalkMark from "@/assets/credential-street-talk.svg";
import type { TrustItem } from "@/types/content";

export const trustContent = {
  heading: "Built around clarity, safety, and local test readiness.",
  items: [
    {
      title: "NZTA Approved Driving Instructor",
      description:
        "Professional instruction backed by recognised local approval.",
      mark: {
        src: nztaMark,
        alt: "NZTA Approved Driving Instructor trust mark",
      },
    },
    {
      title: "Street Talk Provider",
      description:
        "Approved driver education support focused on practical outcomes.",
      mark: {
        src: streetTalkMark,
        alt: "Street Talk Driver Education Provider trust mark",
      },
    },
    {
      title: "Local Test Preparation",
      description:
        "Coaching shaped around Auckland roads and VTNZ Glenfield expectations.",
    },
    {
      title: "Practical One-on-One Lessons",
      description:
        "Clear, direct feedback tailored to your current confidence and goals.",
    },
  ] satisfies TrustItem[],
} as const;
