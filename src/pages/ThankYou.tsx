import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCartAbandonment } from "@/hooks/useCartAbandonment";

const ThankYou = () => {
  const navigate = useNavigate();
  const { clearCart } = useCartAbandonment();

  useEffect(() => {
    // Limpar o carrinho abandonado
    clearCart();
  }, [clearCart]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-8 md:p-12 text-center bg-card animate-scale-in">
          <Heart className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Obrigada Por Estar Aqui ❤️
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Entendemos que às vezes não é o momento certo, e está tudo bem.
            </p>
            
            <p className="text-xl font-semibold text-foreground">
              Mas queremos que você saiba uma coisa importante:
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg text-left">
              <p className="mb-4">
                💙 <span className="font-semibold">Você é uma mãe incrível.</span> O simples fato de estar aqui, 
                procurando informações, mostra o quanto você se importa com seu bebê.
              </p>
              
              <p className="mb-4">
                💙 <span className="font-semibold">Não se cobre tanto.</span> Nenhuma mãe sabe tudo, e está tudo bem. 
                O importante é que você está fazendo o seu melhor.
              </p>
              
              <p className="mb-4">
                💙 <span className="font-semibold">Confie em você.</span> Seu instinto materno é poderoso. 
                Quando surgir uma dúvida, respire fundo e confie na sua capacidade.
              </p>
              
              <p>
                💙 <span className="font-semibold">Você não está sozinha.</span> Milhares de mães passam pelas mesmas 
                inseguranças todos os dias. Busque apoio quando precisar.
              </p>
            </div>
            
            <p className="text-primary font-semibold text-xl">
              Você está fazendo um ótimo trabalho, mamãe!
            </p>
            
            <div className="pt-6">
              <p className="text-base text-muted-foreground mb-2">
                Se mudar de ideia, estaremos aqui para te apoiar.
              </p>
              <p className="text-sm text-muted-foreground">
                O Mamãe Zen foi feito com muito carinho para mães como você ❤️
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-primary text-white hover:scale-105 transition-all shadow-lg font-bold"
              onClick={handleGoHome}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Voltar para o Início
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Nosso carinho e respeito pela sua jornada 💝
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
