import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import { useCartAbandonment } from "@/hooks/useCartAbandonment";
import { useState, useEffect } from "react";
import { UrgencyModal } from "@/components/UrgencyModal";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const { saveCartIntent } = useCartAbandonment();
  const [userCity, setUserCity] = useState<string>("");
  const [userState, setUserState] = useState<string>("");
  const [showUrgencyModal, setShowUrgencyModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ plan: 'lifetime' | 'monthly', url: string } | null>(null);

  useEffect(() => {
    // Get user's location from IP
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserCity(data.city);
          setUserState(data.region_code || "BR");
        }
      })
      .catch(() => {
        // If geolocation fails, continue normally
      });
  }, []);

  const handlePlanClick = (plan: 'lifetime' | 'monthly', url: string) => {
    // Save cart intent for recovery
    saveCartIntent(plan, userCity, userState);
    
    // Show urgency modal
    setSelectedPlan({ plan, url });
    setShowUrgencyModal(true);
  };

  const handleConfirmPurchase = () => {
    if (selectedPlan) {
      window.open(selectedPlan.url, '_blank');
      setShowUrgencyModal(false);
    }
  };

  return (
    <section id="oferta" className="py-6 md:py-20 px-3 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-3 text-xs md:text-base">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t('pricing.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 px-2 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('pricing.title1')}
            </span>
            <br />
            <span className="text-foreground">
              {t('pricing.title2')}
            </span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-3 sm:p-6 md:p-10 bg-gradient-card border-2 border-primary/20 shadow-2xl animate-scale-in max-w-5xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Left Side - Includes */}
            <div className="space-y-4 px-1">
              <div className="text-center lg:text-left">
                <h3 className="text-lg md:text-2xl font-bold mb-1.5 bg-gradient-primary bg-clip-text text-transparent">
                  {t('pricing.includesTitle')}
                </h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  {t('pricing.includesSubtitle')}
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  t('pricing.include1'),
                  t('pricing.include2'),
                  t('pricing.include3'),
                  t('pricing.include4'),
                  t('pricing.include5'),
                  t('pricing.include6'),
                  t('pricing.include7'),
                  t('pricing.include8')
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
                    <p className="text-xs md:text-base text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Pricing Options */}
            <div className="space-y-3 flex flex-col justify-center px-1">
              {/* Lifetime Access - Primary Option */}
              <div className="relative mt-3 md:mt-0">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg z-10 whitespace-nowrap">
                  {t('pricing.lifetimeBadge')}
                </div>
                
                <div className="text-center p-4 md:p-8 bg-gradient-primary rounded-2xl text-white shadow-2xl mt-1.5">
                  <p className="text-xs md:text-base text-white/90 mb-2">
                    {t('pricing.from')}
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                      {t('pricing.price')}
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-base text-white/90 font-semibold mb-3 md:mb-6">
                    {t('pricing.paymentInfo')}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-sm md:text-lg py-5 md:py-7 bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0 px-4"
                    onClick={() => handlePlanClick('lifetime', 'https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054')}
                  >
                    {t('pricing.ctaLifetime')}
                  </Button>
                  
                  <div className="mt-3 space-y-0.5">
                    <p className="text-xs md:text-sm text-white/90">
                      {t('pricing.benefit1')}
                    </p>
                    <p className="text-xs md:text-sm text-white/90">
                      {t('pricing.benefit2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly Option */}
              <div className="text-center p-4 md:p-6 bg-primary/5 backdrop-blur rounded-2xl border-2 border-primary/30 shadow-lg">
                <p className="text-xs md:text-base text-muted-foreground mb-2">
                  {t('pricing.monthlyQuestion')}
                </p>
                
                <div className="mb-2">
                  <div className="inline-flex items-baseline gap-1 justify-center">
                    <span className="text-lg md:text-2xl font-medium text-muted-foreground line-through">
                      {t('pricing.monthlyOldPrice')}
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {t('pricing.monthlyPrice')}
                    </span>
                    <span className="text-base md:text-lg text-muted-foreground">{t('pricing.monthlyPeriod')}</span>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  {t('pricing.monthlyAfter')}
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-xs md:text-base py-4 md:py-6 bg-gradient-primary text-white hover:scale-105 transition-all shadow-lg rounded-xl font-bold border-0 px-4"
                  onClick={() => handlePlanClick('monthly', 'https://pay.kirvano.com/d5b9bd49-16d8-4039-b097-0c428eb0b0f5')}
                >
                  {t('pricing.ctaMonthly')}
                </Button>
              </div>

              {/* Guarantee */}
              <div className="bg-primary/5 backdrop-blur rounded-xl p-3 md:p-5 text-center border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Shield className="text-primary flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-bold text-foreground text-xs md:text-base">
                    {t('pricing.guarantee')}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t('pricing.guaranteeText')}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="text-center text-xs md:text-sm text-muted-foreground space-y-1 px-2">
                <p>{t('pricing.trust1')}</p>
                <p>{t('pricing.trust2')}</p>
                <p>{t('pricing.trust3')}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Proof */}
        <div className="mt-6 md:mt-12 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs md:text-base text-muted-foreground mb-3 px-2">
            {t('pricing.socialProof')}
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap px-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                >
                  <Sparkles className="text-primary w-3 h-3 md:w-4 md:h-4" />
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-foreground font-medium">
              {t('pricing.socialProofShort')}
            </p>
          </div>
        </div>

        {/* Urgency Modal */}
        <UrgencyModal 
          open={showUrgencyModal}
          onOpenChange={setShowUrgencyModal}
          onConfirm={handleConfirmPurchase}
        />
      </div>
    </section>
  );
};

export default Pricing;
