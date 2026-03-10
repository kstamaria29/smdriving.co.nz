type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const labelTone = invert
    ? "text-white/70"
    : "text-brand-blue dark:text-[#8eb3ff]";
  const titleTone = invert ? "text-white" : "text-brand-ink dark:text-slate-100";
  const descriptionTone = invert
    ? "text-white/72"
    : "text-brand-muted dark:text-slate-300";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.22em] ${labelTone}`}
      >
        {label}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold sm:text-4xl ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionTone}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};
