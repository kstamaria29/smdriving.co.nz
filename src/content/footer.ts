import { brand } from "@/content/brand";
import { navigationItems } from "@/content/navigation";

export const footerContent = {
  brandLine: brand.footerLine,
  links: navigationItems,
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
} as const;
