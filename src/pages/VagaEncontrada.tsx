import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, AlertTriangle, TrendingUp } from "lucide-react";

const VagaEncontrada = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const [planData, setPlanData] = useState<{ plan: string; url: string } | null>(null);

  useEffect(() => {
    // Prevent back navigation
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // Get plan data
    const saved = localStorage.getItem('mamaeZenPlan');
    if (saved) {
      setPlanData(JSON.parse(saved));
    } else {
      navigate('/');
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      window.onpopstate = null;
    };
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSecureSpot = () => {
    if (planData) {
      window.open(planData.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6 border-green-200 shadow-2xl">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            🎉 VAGA ENCONTRADA!
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            UMA mãe desistiu. Esta pode ser SUA ÚLTIMA CHANCE!
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 space-y-4">
          <div className="flex items-center justify-center gap-3 text-red-600">
            <Clock className="w-8 h-8 animate-pulse" />
            <span className="text-3xl font-bold">{formatTime(timeLeft)}</span>
          </div>
          <p className="text-red-700 font-semibold">
            Tempo para garantir esta vaga antes que outra mãe tome seu lugar!
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg space-y-4 border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-gray-800 font-bold mb-2">
                O QUE VOCÊ VAI PERDER SE NÃO AGIR AGORA:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ Continuar sem saber lidar com as crises do seu filho</li>
                <li>✗ Mais noites sem dormir, chorando de exaustão</li>
                <li>✗ Ver outras mães conseguindo enquanto você luta sozinha</li>
                <li>✗ Sentir que você é uma mãe fracassada e incapaz</li>
                <li>✗ Seu filho sem o suporte que ELE MERECE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg space-y-4 border border-green-200">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-gray-800 font-bold mb-2">
                O QUE VOCÊ VAI CONQUISTAR AGORA:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Saber exatamente como lidar com cada comportamento</li>
                <li>✓ Dormir tranquila sabendo que está no caminho certo</li>
                <li>✓ Ver o desenvolvimento do seu filho ACELERANDO</li>
                <li>✓ Sentir-se confiante e empoderada como mãe</li>
                <li>✓ Paz, segurança e controle da sua maternidade</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <Button
            className="w-full h-auto px-6 py-4 md:py-6 text-base md:text-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all animate-pulse"
            onClick={handleSecureSpot}
          >
            SIM! QUERO GARANTIR MINHA VAGA AGORA
          </Button>

          <p className="text-sm text-gray-600">
            ⚠️ Esta vaga será liberada para outra mãe em {formatTime(timeLeft)}
          </p>

          <div className="text-xs text-gray-500 space-y-1">
            <p>🔒 Pagamento 100% Seguro</p>
            <p>✓ Acesso Imediato Após Confirmação</p>
            <p>🎯 Garantia Incondicional de 7 Dias</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VagaEncontrada;
