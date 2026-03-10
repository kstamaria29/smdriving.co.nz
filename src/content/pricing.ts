export const pricingContent = {
  label: "Pricing",
  title: "Simple, transparent lesson pricing.",
  description:
    "No clutter, no confusing packages. Clear hourly pricing so you know exactly what to expect.",
  tiers: [
    {
      name: "Weekday Lessons",
      price: "NZ$80",
      unit: "per hour",
      note: "Ideal for regular learner lessons and licence preparation sessions.",
    },
    {
      name: "Weekends & Public Holidays",
      price: "NZ$120",
      unit: "per hour",
      note: "Flexible support for students who need lessons outside standard weekdays.",
    },
  ],
  footerNote:
    "Need help deciding what type of lesson is right for you? Call or send an enquiry and SM Driving School will guide you to the best starting point.",
} as const;
