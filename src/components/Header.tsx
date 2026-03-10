import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import { brand } from "@/content/brand";
import { navigationItems } from "@/content/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SiteLogo } from "@/components/SiteLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/cn";

const contactSectionHref =
  navigationItems.find((item) => item.href === "#contact")?.href ?? "#contact";

const mobileActionClassName =
  "focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white transition hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:bg-[#12203a] dark:text-white dark:hover:border-white/20 dark:hover:text-white";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);

    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4">
        <div
          className={cn(
            "rounded-[1.75rem] border border-white/70 bg-white/80 px-4 py-3 transition duration-300 backdrop-blur-xl dark:border-white/10 dark:bg-[#081226]/78 sm:px-5",
            isScrolled
              ? "shadow-soft-lg ring-1 ring-brand-blue/8"
              : "shadow-soft-sm",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              className="focus-ring rounded-2xl"
              aria-label="Go to home section"
            >
              <SiteLogo iconOnly />
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-7 lg:flex"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-full px-1 py-1 text-sm font-medium text-brand-muted transition hover:text-brand-blue dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle iconOnly />
              <a
                href={brand.phoneHref}
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-brand-muted transition hover:text-brand-blue dark:text-slate-300 dark:hover:text-white"
              >
                <PhoneCall className="h-4 w-4" />
                {brand.phoneDisplay}
              </a>
              <ButtonLink href="#contact">Book a Lesson</ButtonLink>
            </div>

            <div className="flex items-center justify-end gap-2 lg:hidden">
              <a
                href={contactSectionHref}
                aria-label="Go to contact section"
                className={mobileActionClassName}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={brand.phoneHref}
                aria-label={`Call ${brand.shortName}`}
                className={mobileActionClassName}
              >
                <PhoneCall className="h-5 w-5" />
              </a>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen((current) => !current)}
                className={mobileActionClassName}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                id="mobile-navigation"
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
                }
                transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 rounded-[1.4rem] border border-brand-border bg-brand-surface p-3 dark:border-white/10 dark:bg-[#081226]">
                  <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col gap-1"
                  >
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-brand-ink transition hover:bg-white dark:text-slate-100 dark:hover:bg-white/8"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-3 rounded-2xl border border-brand-border/80 bg-white/80 p-3 dark:border-white/10 dark:bg-white/6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-[#8eb3ff]">
                          Theme
                        </p>
                      </div>
                      <ThemeToggle />
                    </div>
                  </div>
                  <div className="mt-3 grid gap-3">
                    <ButtonLink
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a Lesson
                    </ButtonLink>
                    <ButtonLink
                      href={brand.phoneHref}
                      variant="ghost"
                    >
                      Call {brand.phoneDisplay}
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
};
