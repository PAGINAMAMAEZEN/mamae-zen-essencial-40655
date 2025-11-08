import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Heart, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartAbandonment } from "@/hooks/useCartAbandonment";
import { useEffect } from "react";

const CartRecovery1 = () => {
  const navigate = useNavigate();
  const { cartData, clearCart } = useCartAbandonment();

  useEffect(() => {
    // Se não há dados do carrinho, redirecionar para home
    if (!cartData) {
      navigate("/");
    }
  }, [cartData, navigate]);

  const handleContinue = () => {
    // Redirecionar para a oferta
    const section = document.getElementById('oferta');
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
    navigate("/#oferta");
  };

  const handleGiveUp = () => {
    // Salvar que o usuário recusou a primeira vez
    localStorage.setItem('recoveryAttempt', '1');
    navigate("/recuperacao-2");
  };

  if (!cartData) return null;

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header com Emoção */}
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-16 h-16 text-destructive mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Espera! Antes de Desistir...
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Sabemos que você está preocupada com seu bebê
          </p>
        </div>

        {/* Seção de Dor Intensa */}
        <Card className="p-8 mb-8 border-l-4 border-destructive bg-card animate-scale-in">
          <div className="flex gap-4 mb-6">
            <AlertCircle className="w-12 h-12 text-destructive flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                A Cada Segundo Que Passa, Você Continua Insegura
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Neste exato momento, milhares de mães estão dormindo tranquilas porque têm 
                <span className="text-primary font-semibold"> TODAS as respostas </span>
                na palma da mão.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Enquanto isso, você continua acordando de madrugada com o coração apertado, 
                sem saber se está fazendo a coisa certa...
              </p>
              <p className="text-lg text-destructive font-semibold">
                Quanto tempo mais você vai viver com essa angústia?
              </p>
            </div>
          </div>
        </Card>

        {/* Seção de Culpa */}
        <Card className="p-8 mb-8 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-600 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Clock className="w-8 h-8 text-amber-600" />
            Seu Bebê Não Pode Esperar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Cada dia que passa sem as informações corretas é um dia a menos de tranquilidade. 
            É uma noite a mais de preocupação desnecessária.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Você merece ter paz. Seu bebê merece uma mãe confiante e segura das suas decisões.
          </p>
          <p className="text-xl font-bold text-amber-600 mt-6">
            Por apenas R$ {cartData.plan === 'lifetime' ? '49,90' : '19,99'}{cartData.plan === 'monthly' ? '/mês' : ''}, 
            você pode ter essa paz HOJE.
          </p>
        </Card>

        {/* Seção de Medo */}
        <Card className="p-8 mb-8 bg-destructive/5 border-l-4 border-destructive animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            O Que Pode Acontecer Se Você Não Tomar Essa Decisão Agora?
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              ❌ Continuar acordando de madrugada em pânico, sem saber o que fazer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ❌ Tomar decisões baseadas em informações erradas da internet
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ❌ Sentir culpa por não estar dando o melhor para seu bebê
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ❌ Gastar muito mais tempo (e dinheiro) procurando respostas
            </p>
          </div>
        </Card>

        {/* Garantia Reforçada */}
        <Card className="p-8 mb-8 bg-primary/5 border-2 border-primary animate-scale-in">
          <div className="text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Sem Riscos Para Você
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Você tem <span className="text-primary font-bold">7 dias completos</span> para testar. 
              Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
            <p className="text-xl font-bold text-primary">
              O único risco é continuar sem ter as respostas que você precisa.
            </p>
          </div>
        </Card>

        {/* CTAs */}
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="w-full text-xl py-8 bg-gradient-primary text-white hover:scale-105 transition-all shadow-xl font-bold"
            onClick={handleContinue}
          >
            ✨ Sim! Quero Ter Paz e Segurança Agora
          </Button>
          
          <button
            onClick={handleGiveUp}
            className="w-full text-muted-foreground hover:text-foreground transition-colors text-sm underline"
          >
            Não, prefiro continuar insegura
          </button>
        </div>

        {/* Prova Social */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>🔒 Mais de 10.000 mães já fizeram essa escolha</p>
          <p className="mt-2">⚡ Acesso imediato após a confirmação</p>
        </div>
      </div>
    </div>
  );
};

export default CartRecovery1;
