import type { FaqItem } from "@/types/content";

export const faqsContent = {
  label: "FAQs",
  title: "Straight answers before you book.",
  description:
    "If you are unsure where to start, these are the questions most learners and test candidates usually ask first.",
  items: [
    {
      question: "Can you help complete beginners who have little or no driving experience?",
      answer:
        "Yes. Lessons can start from the basics, with a calm focus on car control, observation, road positioning, and confidence-building at a pace that suits you.",
    },
    {
      question: "Do you help with restricted licence preparation?",
      answer:
        "Yes. Restricted preparation covers test-style driving, common errors, route familiarity, and the decision-making skills that assessors are looking for.",
    },
    {
      question: "Can you help me prepare for my full licence test?",
      answer:
        "Yes. Full licence preparation focuses on higher-level hazard awareness, commentary driving, safer judgement, and polishing the habits expected at full-test level.",
    },
    {
      question: "Do you specialise in overseas licence conversions?",
      answer:
        "Yes. This is one of SM Driving School’s key strengths. Lessons help experienced drivers adapt to New Zealand road rules, local habits, and test expectations.",
    },
    {
      question: "Do you cover Auckland and local test routes like VTNZ Glenfield?",
      answer:
        "Yes. Auckland-based coaching is part of the service, with practical preparation shaped around local driving conditions and VTNZ Glenfield familiarity.",
    },
    {
      question: "Are weekend lessons available?",
      answer:
        "Yes. Weekend and public-holiday lessons are available at a different hourly rate, which is shown in the pricing section.",
    },
    {
      question: "What should I bring to my lesson?",
      answer:
        "Bring your licence, glasses if you need them for driving, and any questions or concerns you want to work through. If you are preparing for a test, mention that when enquiring.",
    },
    {
      question: "Can you help with parking and tricky manoeuvres?",
      answer:
        "Yes. Reverse parallel parking and other manoeuvres are covered clearly and practically so you understand the process instead of memorising it blindly.",
    },
    {
      question: "How long is each lesson?",
      answer:
        "Pricing is based on an hourly lesson rate. If you need a different format for assessment or test preparation, mention it in your enquiry.",
    },
    {
      question: "What is the fastest way to contact SM Driving School?",
      answer:
        "You can call directly for the fastest response, or use the contact form to send your details and goals for a callback or reply by email.",
    },
  ] satisfies FaqItem[],
} as const;
