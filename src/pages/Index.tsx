import Hero from "@/components/Hero";
import AutismGuideCarousel from "@/components/AutismGuideCarousel";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Modules from "@/components/Modules";
import AppDemo from "@/components/AppDemo";
import Urgency from "@/components/Urgency";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProofNotifications from "@/components/SocialProofNotifications";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Track page view and engagement
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // If user scrolls more than 50% and hasn't seen the offer yet
      if (scrollPercent > 50) {
        sessionStorage.setItem('mamaeZenEngaged', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <AutismGuideCarousel />
      <PainPoints />
      <Solution />
      <Modules />
      <AppDemo />
      <Urgency />
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
