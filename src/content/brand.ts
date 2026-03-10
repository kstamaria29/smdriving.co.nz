import logo from "@/assets/logo.png";
import founderPortrait from "@/assets/avatar.jpg";

export const brand = {
  name: "SM Driving School Ltd",
  shortName: "SM Driving School",
  founder: "Clifford Sta Maria",
  founderRole: "Founder & Lead Instructor",
  phoneDisplay: "+64 21 055 3275",
  phoneHref: "tel:+64210553275",
  email: "info@smdriving.co.nz",
  emailHref: "mailto:info@smdriving.co.nz",
  location: "Auckland, New Zealand",
  logo: {
    src: logo,
    alt: "SM Driving School logo",
  },
  founderPortrait: {
    src: founderPortrait,
    alt: "Clifford Sta Maria, founder and lead instructor at SM Driving School",
  },
  credentials: [
    "NZTA Approved Driving Instructor",
    "Street Talk Driver Education Provider",
  ],
  footerLine:
    "Practical, transparent one-on-one driving lessons that help Auckland drivers build real confidence.",
} as const;
