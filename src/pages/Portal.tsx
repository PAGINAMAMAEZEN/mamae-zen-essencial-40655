import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portalImage from "@/assets/portal-mamaezen.jpg";

const Portal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      <div className="relative w-full max-w-3xl mx-auto">
        <img 
          src={portalImage} 
          alt="Portal Mamãe Zen - Entrada para o mundo mágico da maternidade"
          className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <Button
            onClick={() => navigate('/inicio')}
            className="h-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl hover:scale-105 transition-all animate-pulse"
          >
            ✨ ENTRAR NO MUNDO MÁGICO MAMÃE ZEN ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
