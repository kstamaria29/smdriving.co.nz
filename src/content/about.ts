import { brand } from "@/content/brand";

export const aboutContent = {
  label: "About",
  title: `Meet ${brand.founder}`,
  description:
    "Founder-led instruction focused on building safe, capable, confident drivers for Auckland roads.",
  paragraphs: [
    "Hi, I'm Clifford, the founder and lead instructor at SM Driving School Ltd. As an NZTA Approved Driving Instructor and an approved Street Talk Driver Education Provider, I am dedicated to helping Aucklanders become safe, confident, and highly skilled drivers.",
    "Whether you are getting behind the wheel for the very first time, looking to pass your Restricted or Full License test, or needing an overseas license conversion, I am here to guide you every step of the way.",
    "I believe in practical, transparent teaching. By using mock assessment drives tailored to local testing routes like VTNZ Glenfield, I make sure my students know exactly what to expect on test day. My goal is not just to help you pass a test. It is to equip you with the defensive driving skills you need for a lifetime of safe motoring.",
  ],
  credentials: [
    "NZTA Approved Driving Instructor",
    "Street Talk Driver Education Provider (NZTA Approved)",
    "Founder-led one-on-one lessons",
    "Video and mock assessments with clear feedback",
  ],
} as const;
