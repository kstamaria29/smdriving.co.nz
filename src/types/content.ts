export type AnchorLink = {
  href: `#${string}`;
  label: string;
};

export type TrustItem = {
  title: string;
  description: string;
  mark?: {
    src: string;
    alt: string;
  };
};

export type ServiceItem = {
  slug: string;
  title: string;
  audience: string;
  focus: string;
  outcome: string;
};

export type ReviewItem = {
  name: string;
  quote: string;
  tag?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
