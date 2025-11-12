import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2, Clock } from "lucide-react";

interface UrgencyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const UrgencyModal = ({ open, onOpenChange, onConfirm }: UrgencyModalProps) => {
  const [stage, setStage] = useState<'checking' | 'released' | 'timer'>('checking');
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutos em segundos
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) return;

    // Simula verificação de vagas
    const checkTimer = setTimeout(() => {
      setStage('released');
    }, 3000);

    return () => clearTimeout(checkTimer);
  }, [open]);

  useEffect(() => {
    if (stage !== 'released') return;

    // Após mostrar mensagem de vaga liberada, inicia o timer
    const releaseTimer = setTimeout(() => {
      setStage('timer');
    }, 3000);

    return () => clearTimeout(releaseTimer);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'timer') return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onOpenChange(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, onOpenChange]);

  useEffect(() => {
    if (stage === 'timer') {
      const totalTime = 30 * 60;
      const elapsed = totalTime - timeLeft;
      setProgress((elapsed / totalTime) * 100);
    }
  }, [timeLeft, stage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-4">
        {stage === 'checking' && (
          <div className="text-center py-8">
            <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-6" />
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                Verificando Disponibilidade...
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground">
              Aguarde enquanto verificamos as vagas disponíveis
            </p>
          </div>
        )}

        {stage === 'released' && (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6 animate-scale-in" />
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4 text-primary">
                🎉 Vaga Liberada!
              </DialogTitle>
            </DialogHeader>
            <p className="text-foreground text-lg mb-4">
              Conseguimos reservar uma vaga de última hora para você!
            </p>
            <p className="text-muted-foreground">
              Preparando sua oferta especial...
            </p>
          </div>
        )}

        {stage === 'timer' && (
          <div className="py-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl text-center mb-2">
                ⚠️ Sua Vaga Está Reservada!
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-destructive/10 p-4 rounded-lg border-2 border-destructive/30">
                <p className="text-center text-sm text-muted-foreground mb-3">
                  Devido à alta demanda, reservamos apenas <span className="font-bold text-destructive">500 vagas</span> para esta oferta especial.
                </p>
                <p className="text-center text-foreground font-semibold">
                  Conseguimos liberar uma vaga de última hora especialmente para você!
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center border border-primary/20">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">
                  Tempo restante para garantir sua vaga:
                </p>
                <div className="text-5xl font-bold text-primary mb-4">
                  {formatTime(timeLeft)}
                </div>
                <Progress value={progress} className="h-3 mb-3" />
                <p className="text-xs text-destructive font-semibold">
                  Após esse tempo, sua vaga será liberada para outra mãe!
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full text-lg py-6 bg-gradient-primary hover:scale-105 transition-all shadow-xl font-bold"
                  onClick={onConfirm}
                >
                  Garantir Minha Vaga Agora
                </Button>
                
                <p className="text-center text-xs text-muted-foreground">
                  🔒 Pagamento 100% seguro • Acesso imediato
                </p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
