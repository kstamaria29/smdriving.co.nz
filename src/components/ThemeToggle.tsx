import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

const STORAGE_KEY = "sm-driving-theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

type ThemeToggleProps = {
  className?: string;
  iconOnly?: boolean;
};

export const ThemeToggle = ({
  className,
  iconOnly = false,
}: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute("content", theme === "dark" ? "#081226" : "#0d1930");
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "focus-ring relative inline-flex h-12 items-center gap-3 rounded-full border border-brand-border bg-white px-3 text-brand-ink transition hover:border-brand-blue/30 dark:border-white/10 dark:bg-[#12203a] dark:text-white",
        iconOnly && "gap-2 px-2.5",
        className,
      )}
    >
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full bg-brand-blue/15 p-1 transition dark:bg-white/12",
          isDark ? "justify-end" : "justify-start",
        )}
      >
        <span className="h-4 w-4 rounded-full bg-brand-blue shadow-sm dark:bg-brand-red" />
      </span>
      <span
        className={cn(
          "flex items-center gap-2 text-sm font-semibold",
          iconOnly && "sr-only",
        )}
      >
        {isDark ? (
          <MoonStar className="h-4 w-4 text-brand-red" />
        ) : (
          <SunMedium className="h-4 w-4 text-brand-blue" />
        )}
        {isDark ? "Dark" : "Light"}
      </span>
      {iconOnly ? (
        isDark ? (
          <MoonStar className="h-4 w-4 text-brand-red" />
        ) : (
          <SunMedium className="h-4 w-4 text-brand-blue" />
        )
      ) : null}
    </button>
  );
};
