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
import { useCartAbandonment } from "@/hooks/useCartAbandonment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { hasAbandonedCart, checkAndRedirect } = useCartAbandonment();
  const navigate = useNavigate();

  // Check if user should be redirected to recovery funnel
  useEffect(() => {
    const redirectPath = checkAndRedirect();
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [checkAndRedirect, navigate]);

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
      
      {hasAbandonedCart && (
        <div className="fixed bottom-20 right-4 z-40 animate-bounce">
          <div className="bg-gradient-primary text-white px-4 py-3 rounded-full shadow-2xl text-sm font-bold">
            🎁 Desconto especial te esperando!
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
