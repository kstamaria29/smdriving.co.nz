import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-[#d52a2f] focus-ring shadow-lg shadow-brand-red/20",
  secondary:
    "bg-brand-blue text-white hover:bg-[#274780] focus-ring shadow-lg shadow-brand-blue/20",
  ghost:
    "border border-brand-border bg-white text-brand-ink hover:border-brand-blue/40 hover:text-brand-blue focus-ring dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:border-white/24 dark:hover:text-white",
};

export const ButtonLink = ({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(
      "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200",
      variants[variant],
      className,
    )}
    {...props}
  />
);
