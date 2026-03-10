import { Container } from "@/components/Container";
import { SiteLogo } from "@/components/SiteLogo";
import { brand } from "@/content/brand";
import { footerContent } from "@/content/footer";

export const FooterSection = () => (
  <footer className="mt-8 bg-brand-ink py-10 text-white">
    <Container>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SiteLogo
            className="items-start"
            invert
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            {footerContent.brandLine}
          </p>
          <div className="mt-5 grid gap-2 text-sm text-white/78">
            <a
              href={brand.phoneHref}
              className="focus-ring-dark w-fit rounded-full"
            >
              {brand.phoneDisplay}
            </a>
            <a
              href={brand.emailHref}
              className="focus-ring-dark w-fit rounded-full"
            >
              {brand.email}
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Quick links
            </p>
            <div className="mt-4 grid gap-3">
              {footerContent.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring-dark text-sm text-white/76 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              SM Driving School
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Auckland driving lessons with practical, transparent coaching for
              learners, test candidates, and overseas licence conversions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 h-px bg-white/10" />
      <p className="mt-6 text-sm text-white/56">{footerContent.copyright}</p>
    </Container>
  </footer>
);
