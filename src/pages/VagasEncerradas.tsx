import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { XCircle, Clock, TrendingDown } from "lucide-react";

const VagasEncerradas = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Prevent back navigation
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
      navigate('/vaga-encontrada');
    };

    // Countdown and redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/vaga-encontrada');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6 border-red-200 shadow-2xl">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600">
            VAGAS ENCERRADAS
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            As vagas para o MamãeZen acabaram de se esgotar...
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg space-y-4 border border-red-200">
          <div className="flex items-start gap-3">
            <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-gray-800 font-semibold mb-1">
                Mais uma mãe perdeu a chance de transformar sua maternidade
              </p>
              <p className="text-gray-600 text-sm">
                Enquanto você lia isso, outras mães garantiram suas vagas. 
                As crises de ansiedade, noites sem dormir e sensação de incapacidade 
                continuarão fazendo parte da sua rotina...
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-gray-800 font-semibold mb-1">
                Cada dia que passa é mais um dia de sofrimento
              </p>
              <p className="text-gray-600 text-sm">
                Mais birras impossíveis de controlar. Mais julgamentos. 
                Mais culpa por não saber lidar com seu filho autista. 
                Mais noites chorando sozinha...
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <div className="inline-flex items-center gap-2 text-2xl font-bold text-red-600">
            <Clock className="w-8 h-8 animate-pulse" />
            <span>Verificando disponibilidade... {countdown}s</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VagasEncerradas;
