import { useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "motion/react";
import { Mail, PhoneCall, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  contactContent,
  experienceOptions,
  licenseTypeOptions,
} from "@/content/contact";
import { getFormspreeEndpoint, submitToFormspree } from "@/lib/formspree";
import { getRevealProps } from "@/lib/motion";

const licenseTypeValues = licenseTypeOptions.map((item) => item.value) as [
  (typeof licenseTypeOptions)[number]["value"],
  ...(typeof licenseTypeOptions)[number]["value"][],
];

const experienceValues = experienceOptions.map((item) => item.value) as [
  (typeof experienceOptions)[number]["value"],
  ...(typeof experienceOptions)[number]["value"][],
];

const enquirySchema = z.object({
  firstName: z.string().trim().min(1, contactContent.form.validation.firstName),
  lastName: z.string().trim().min(1, contactContent.form.validation.lastName),
  email: z.email(contactContent.form.validation.email),
  phone: z.string().trim().min(7, contactContent.form.validation.phone),
  licenseType: z.enum(licenseTypeValues, {
    error: contactContent.form.validation.licenseType,
  }),
  experience: z.enum(experienceValues, {
    error: contactContent.form.validation.experience,
  }),
  message: z.string().trim().min(10, contactContent.form.validation.message),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

type FormMessageState =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

type FieldShellProps = {
  id: keyof EnquiryFormValues;
  label: string;
  error?: string;
  children: ReactNode;
};

const FieldShell = ({ id, label, error, children }: FieldShellProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-brand-ink dark:text-slate-100"
    >
      {label}
    </label>
    {children}
    {error ? (
      <p
        id={`${id}-error`}
        className="mt-2 text-sm text-brand-red"
      >
        {error}
      </p>
    ) : null}
  </div>
);

export const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formMessage, setFormMessage] = useState<FormMessageState>(null);
  const endpoint = getFormspreeEndpoint();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      licenseType: undefined,
      experience: undefined,
      message: "",
    },
  });

  const handleFormSubmit = async (values: EnquiryFormValues) => {
    setFormMessage(null);

    if (!endpoint) {
      setFormMessage({
        type: "error",
        message: contactContent.form.missingConfigMessage,
      });

      return;
    }

    try {
      await submitToFormspree(endpoint, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        licenseType: values.licenseType,
        experience: values.experience,
        message: values.message,
        _subject: `SM Driving School enquiry from ${values.firstName} ${values.lastName}`,
      });
      reset();
      setFormMessage({
        type: "success",
        message: contactContent.form.successMessage,
      });
    } catch (error) {
      setFormMessage({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : contactContent.form.errorMessage,
      });
    }
  };

  return (
    <section
      id="contact"
      className="section-shell"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div {...getRevealProps(prefersReducedMotion)}>
            <SectionHeading
              label={contactContent.label}
              title={contactContent.title}
              description={contactContent.description}
            />

            <div className="mt-8 grid gap-4">
              {contactContent.details.map((detail) => {
                const Icon = detail.title === "Call" ? PhoneCall : Mail;

                return (
                  <a
                    key={detail.title}
                    href={detail.href}
                    className="focus-ring surface-card flex items-start gap-4 px-5 py-5 transition hover:border-brand-blue/30 hover:-translate-y-0.5"
                  >
                    <div className="rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                        {detail.title}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-brand-ink dark:text-slate-100">
                        {detail.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-brand-muted dark:text-slate-300">
                        {detail.hint}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            {...getRevealProps(prefersReducedMotion, 0.08)}
            className="surface-card p-5 sm:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
              {contactContent.form.heading}
            </p>

            <form
              noValidate
              className="mt-8 grid gap-4"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FieldShell
                  id="firstName"
                  label={contactContent.form.fields.firstName}
                  error={errors.firstName?.message}
                >
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted dark:border-white/10 dark:bg-[#0a152c] dark:text-white dark:placeholder:text-slate-400"
                    {...register("firstName")}
                  />
                </FieldShell>

                <FieldShell
                  id="lastName"
                  label={contactContent.form.fields.lastName}
                  error={errors.lastName?.message}
                >
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted dark:border-white/10 dark:bg-[#0a152c] dark:text-white dark:placeholder:text-slate-400"
                    {...register("lastName")}
                  />
                </FieldShell>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FieldShell
                  id="email"
                  label={contactContent.form.fields.email}
                  error={errors.email?.message}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted dark:border-white/10 dark:bg-[#0a152c] dark:text-white dark:placeholder:text-slate-400"
                    {...register("email")}
                  />
                </FieldShell>

                <FieldShell
                  id="phone"
                  label={contactContent.form.fields.phone}
                  error={errors.phone?.message}
                >
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted dark:border-white/10 dark:bg-[#0a152c] dark:text-white dark:placeholder:text-slate-400"
                    {...register("phone")}
                  />
                </FieldShell>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FieldShell
                  id="licenseType"
                  label={contactContent.form.fields.licenseType}
                  error={errors.licenseType?.message}
                >
                  <select
                    id="licenseType"
                    aria-invalid={Boolean(errors.licenseType)}
                    aria-describedby={
                      errors.licenseType ? "licenseType-error" : undefined
                    }
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink dark:border-white/10 dark:bg-[#0a152c] dark:text-white"
                    {...register("licenseType")}
                  >
                    <option value="">Select licence type</option>
                    {licenseTypeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FieldShell>

                <FieldShell
                  id="experience"
                  label={contactContent.form.fields.experience}
                  error={errors.experience?.message}
                >
                  <select
                    id="experience"
                    aria-invalid={Boolean(errors.experience)}
                    aria-describedby={
                      errors.experience ? "experience-error" : undefined
                    }
                    className="focus-ring min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-ink dark:border-white/10 dark:bg-[#0a152c] dark:text-white"
                    {...register("experience")}
                  >
                    <option value="">Select your experience</option>
                    {experienceOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FieldShell>
              </div>

              <FieldShell
                id="message"
                label={contactContent.form.fields.message}
                error={errors.message?.message}
              >
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="focus-ring w-full rounded-[1.5rem] border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted dark:border-white/10 dark:bg-[#0a152c] dark:text-white dark:placeholder:text-slate-400"
                  {...register("message")}
                />
              </FieldShell>

              <div
                aria-live="polite"
                className="min-h-7"
              >
                {formMessage ? (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                      formMessage.type === "success"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200"
                        : "bg-brand-red/8 text-brand-red"
                    }`}
                  >
                    {formMessage.message}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d52a2f] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
