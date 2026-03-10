import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";

const App = () => (
  <div className="overflow-x-clip">
    <a
      href="#main-content"
      className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 dark:focus:bg-[#12203a] dark:focus:text-white"
    >
      Skip to content
    </a>
    <Header />
    <main id="main-content">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ReviewsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
);

export default App;
