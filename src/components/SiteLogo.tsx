import { brand } from "@/content/brand";
import { cn } from "@/lib/cn";

type SiteLogoProps = {
  condensed?: boolean;
  className?: string;
  invert?: boolean;
  iconOnly?: boolean;
};

export const SiteLogo = ({
  condensed = false,
  className,
  invert = false,
  iconOnly = false,
}: SiteLogoProps) => (
  <div className={cn("flex items-center gap-3", className)}>
    <img
      src={brand.logo.src}
      alt={brand.logo.alt}
      className="h-11 w-11 object-contain"
    />
    {!iconOnly ? (
      <div className="min-w-0">
        <p
          className={cn(
            "truncate text-sm font-semibold uppercase tracking-[0.18em]",
            invert ? "text-white" : "text-brand-blue dark:text-[#8eb3ff]",
          )}
        >
          SM Driving School
        </p>
        {!condensed ? (
          <p
            className={cn(
              "truncate text-sm",
              invert ? "text-white/70" : "text-brand-muted dark:text-slate-300",
            )}
          >
            {brand.name}
          </p>
        ) : null}
      </div>
    ) : null}
  </div>
);
