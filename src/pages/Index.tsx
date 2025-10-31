import Hero from "@/components/Hero";
import AutismGuideCarousel from "@/components/AutismGuideCarousel";
import Modules from "@/components/Modules";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProofNotifications from "@/components/SocialProofNotifications";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AutismGuideCarousel />
      <Modules />
      <AppDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SocialProofNotifications />
    </main>
  );
};

export default Index;
