import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Baby, Heart, TrendingDown, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartAbandonment } from "@/hooks/useCartAbandonment";
import { useEffect } from "react";

const CartRecovery2 = () => {
  const navigate = useNavigate();
  const { cartData } = useCartAbandonment();

  useEffect(() => {
    // Se não há dados do carrinho, redirecionar para home
    if (!cartData) {
      navigate("/");
    }
  }, [cartData, navigate]);

  const handleFinalChance = () => {
    navigate("/#oferta");
  };

  const handleDecline = () => {
    localStorage.setItem('recoveryAttempt', '2');
    navigate("/obrigado");
  };

  if (!cartData) return null;

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Emocional */}
        <div className="text-center mb-12 animate-fade-in">
          <Baby className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Uma Última Coisa Antes de Você Ir...
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Pense no quanto sua tranquilidade vale
          </p>
        </div>

        {/* História Emocional */}
        <Card className="p-8 mb-8 bg-card border-l-4 border-primary animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Imagine Daqui a 3 Meses...
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-destructive mb-3">
                Sem o Mamãe Zen:
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você ainda estará acordada às 3h da manhã, pesquisando no Google se pode dar 
                aquele remédio. Seu marido roncando do lado, e você ali, sozinha, com medo 
                de fazer algo errado. As olheiras aumentando, a ansiedade crescendo, 
                a culpa te consumindo...
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Com o Mamãe Zen:
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Você dormindo tranquila, sabendo que tem TODAS as respostas sempre 
                disponíveis. Seu bebê está bem, você está confiante, e quando surge 
                alguma dúvida, são 2 cliques para ter a resposta certa. 
                <span className="font-bold"> Paz, segurança e tranquilidade.</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Comparação de Custo */}
        <Card className="p-8 mb-8 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-600 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <TrendingDown className="w-8 h-8" />
            Pense Nisso...
          </h2>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground">
            <p>• Uma ida ao shopping com seu bebê: R$ 80~150</p>
            <p>• Um delivery de pizza: R$ 60~100</p>
            <p>• Fazer as unhas: R$ 50~80</p>
            <p className="pt-4 text-lg md:text-xl font-bold text-amber-600">
              O Mamãe Zen custa apenas R$ {cartData?.plan === 'lifetime' ? '49,90 (UMA VEZ SÓ)' : '19,99 por mês'}
            </p>
            <p className="text-foreground font-semibold text-base md:text-lg">
              Menos que uma pizza, mas vale anos de tranquilidade!
            </p>
          </div>
        </Card>

        {/* Sentimento de Perda */}
        <Card className="p-8 mb-8 bg-destructive/5 border-l-4 border-destructive animate-fade-in">
          <div className="flex gap-4">
            <Clock className="w-12 h-12 text-destructive flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                O Tempo Está Passando...
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Enquanto você lê isso, outras mães estão garantindo o acesso. 
                A oferta especial de <span className="line-through">R$ 197</span> por 
                <span className="text-primary font-bold"> R$ 49,90</span> não vai durar para sempre.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Amanhã você pode acordar e ver que perdeu essa chance. 
                E aí, volta para as madrugadas de angústia e incerteza...
              </p>
            </div>
          </div>
        </Card>

        {/* Depoimento Real */}
        <Card className="p-8 mb-8 bg-primary/5 animate-scale-in">
          <div className="flex gap-4 mb-4">
            <Heart className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                "Eu quase desisti de comprar porque achei que era 'mais uma coisa na internet'. 
                Mas hoje, 2 meses depois, eu percebo que foi a MELHOR decisão que tomei. 
                Não consigo imaginar como era antes, aquele desespero... 
                Valeu cada centavo e muito mais."
              </p>
              <p className="font-semibold text-foreground">
                - Ana Paula, mãe de primeira viagem, Rio de Janeiro
              </p>
            </div>
          </div>
        </Card>

        {/* CTAs Finais */}
        <div className="space-y-4 mb-8">
          <Button 
            size="lg" 
            className="w-full text-lg md:text-xl py-8 bg-gradient-primary text-white hover:scale-105 transition-all shadow-xl font-bold animate-pulse px-4"
            onClick={handleFinalChance}
          >
            Sim! Quero Aproveitar Essa Última Chance
          </Button>
          
          <p className="text-center text-sm text-muted-foreground px-4">
            Garantia de 7 dias • Acesso imediato • Sem riscos
          </p>

          <button
            onClick={handleDecline}
            className="w-full text-muted-foreground hover:text-foreground transition-colors text-sm underline mt-6"
          >
            Não, prefiro continuar sozinha nessa jornada
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartRecovery2;
