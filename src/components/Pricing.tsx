import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";

const includes = [
  "Guias Práticos Completos",
  "Manual de Medicamentos Seguros",
  "Módulo Desenvolvimento & Autismo",
  "Botão de Emergência com GPS",
  "Biblioteca de Áudios Relaxantes",
  "E-books Premium Exclusivos",
  "Atualizações Vitalícias",
  "Suporte Prioritário"
];

const Pricing = () => {
  return (
    <section id="oferta" className="py-6 md:py-20 px-3 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-3 text-xs md:text-base">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span>Oferta Especial de Lançamento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 px-2 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              6 Módulos Completos
            </span>
            <br />
            <span className="text-foreground">
              Por Apenas R$ 97,90
            </span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Investimento único para ter tudo que você precisa por toda a vida
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-3 sm:p-6 md:p-10 bg-gradient-card border-2 border-primary/20 shadow-2xl animate-scale-in max-w-5xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Left Side - Includes */}
            <div className="space-y-4 px-1">
              <div className="text-center lg:text-left">
                <h3 className="text-lg md:text-2xl font-bold mb-1.5 bg-gradient-primary bg-clip-text text-transparent">
                  Acesso Completo Inclui:
                </h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Todos os módulos, para sempre
                </p>
              </div>

              <div className="space-y-2.5">
                {includes.map((item, index) => (
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
                  ⭐ ACESSO VITALÍCIO
                </div>
                
                <div className="text-center p-4 md:p-8 bg-gradient-primary rounded-2xl text-white shadow-2xl mt-1.5">
                  <p className="text-xs md:text-base text-white/90 mb-2">
                    De R$ 297 por apenas
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                      R$ 97,90
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-base text-white/90 font-semibold mb-3 md:mb-6">
                    Pagamento único • Acesso vitalício
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-sm md:text-lg py-5 md:py-7 bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0"
                    onClick={() => window.open('https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054', '_blank')}
                  >
                    ✨ Garantir Acesso Vitalício Agora
                  </Button>
                  
                  <div className="mt-3 space-y-0.5">
                    <p className="text-xs md:text-sm text-white/90">
                      ✓ Todas as atualizações futuras GRÁTIS
                    </p>
                    <p className="text-xs md:text-sm text-white/90">
                      ✓ Sem mensalidades, pague uma vez só
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly Option */}
              <div className="text-center p-4 md:p-6 bg-primary/5 backdrop-blur rounded-2xl border-2 border-primary/30 shadow-lg">
                <p className="text-xs md:text-base text-muted-foreground mb-1.5">
                  Prefere pagar mensalmente?
                </p>
                
                <div className="mb-1.5">
                  <span className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    R$ 37,90
                  </span>
                  <span className="text-sm md:text-lg text-muted-foreground">/mês</span>
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground mb-3">
                  Após 1º mês: R$ 49,90/mês
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-xs md:text-base py-4 md:py-6 bg-gradient-primary text-white hover:scale-105 transition-all shadow-lg rounded-xl font-bold border-0"
                  onClick={() => window.open('https://pay.kirvano.com/d5b9bd49-16d8-4039-b097-0c428eb0b0f5', '_blank')}
                >
                  💝 Começar por R$ 37,90/mês
                </Button>
              </div>

              {/* Guarantee */}
              <div className="bg-primary/5 backdrop-blur rounded-xl p-3 md:p-5 text-center border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Shield className="text-primary flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-bold text-foreground text-xs md:text-base">
                    Garantia de 7 Dias
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Experimente sem riscos. Não gostar? Devolvemos 100% do valor
                </p>
              </div>

              {/* Trust Badges */}
              <div className="text-center text-xs md:text-sm text-muted-foreground space-y-1">
                <p>🔒 Pagamento 100% seguro e criptografado</p>
                <p>⚡ Acesso imediato após a confirmação</p>
                <p>📱 Funciona em celular, tablet e computador</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Proof */}
        <div className="mt-6 md:mt-12 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs md:text-base text-muted-foreground mb-3 px-2">
            ✨ Mais de 10.000 mães já transformaram suas maternidades
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
              +10.000 mães satisfeitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
