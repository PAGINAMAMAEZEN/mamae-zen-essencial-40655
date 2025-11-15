import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portalImage from "@/assets/portal-mamaezen.jpg";

const Portal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="relative w-full max-w-4xl">
        <img 
          src={portalImage} 
          alt="Portal Mamãe Zen - Entrada para o mundo mágico da maternidade"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={() => navigate('/inicio')}
            className="h-auto min-h-[56px] px-8 py-4 text-lg md:text-xl font-bold bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-2xl hover:scale-105 transition-all animate-pulse flex items-center justify-center text-center"
          >
            ✨ ENTRAR NO MUNDO MÁGICO MAMÃE ZEN ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
