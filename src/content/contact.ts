import { brand } from "@/content/brand";

export const licenseTypeOptions = [
  { value: "Learners License", label: "Learners License" },
  { value: "Restricted License", label: "Restricted License" },
  { value: "Overseas License", label: "Overseas License" },
] as const;

export const experienceOptions = [
  { value: "Zero to little experience", label: "Zero to little experience" },
  { value: "Some experience", label: "Some experience" },
  {
    value: "Can drive but needs to learn the NZ rules",
    label: "Can drive but needs to learn the NZ rules",
  },
] as const;

export const contactContent = {
  label: "Contact",
  title: "Book a lesson or send an enquiry.",
  description:
    "If you are ready to get started, call now or send your details below and SM Driving School will get back to you promptly.",
  details: [
    {
      title: "Call",
      value: brand.phoneDisplay,
      href: brand.phoneHref,
      hint: "Fastest for urgent bookings and lesson questions.",
    },
    {
      title: "Email",
      value: brand.email,
      href: brand.emailHref,
      hint: "Useful if you want to outline your goals before a callback.",
    },
  ],
  form: {
    heading: "Send an enquiry",
    submitLabel: "Send Message",
    successMessage:
      "Thanks. Your enquiry has been sent successfully. SM Driving School will be in touch soon.",
    errorMessage:
      "Your enquiry could not be sent right now. Please try again, or call directly if you need a quicker response.",
    missingConfigMessage:
      "Formspree is not configured yet. Add VITE_FORMSPREE_ENDPOINT in .env to enable form submissions.",
    validation: {
      firstName: "Please enter your first name.",
      lastName: "Please enter your last name.",
      email: "Please enter a valid email address.",
      phone: "Please enter your phone number.",
      licenseType: "Please select your licence type.",
      experience: "Please select your driving experience.",
      message: "Please enter a message with a bit more detail.",
    },
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      licenseType: "License Type",
      experience: "Experience in Driving",
      message: "Message",
    },
  },
} as const;
