import { AlertTriangle, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Urgency = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-destructive/5">
      <div className="container mx-auto max-w-5xl">
        <Card className="bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/20 p-6 md:p-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-bold text-sm md:text-base shadow-lg">
              <AlertTriangle className="w-5 h-5" />
              <span>ATENÇÃO: Não Deixe Para Depois</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Cada Dia Sem o Mamãe Zen é Mais Um Dia de 
              <span className="text-destructive block mt-2">Ansiedade e Insegurança</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <Clock className="w-10 h-10 text-orange-500 mx-auto" />
                <h3 className="font-bold text-lg">Tempo Perdido</h3>
                <p className="text-sm text-muted-foreground">
                  Quantas horas você já gastou pesquisando informações confusas na internet?
                </p>
              </div>

              <div className="space-y-2">
                <AlertTriangle className="w-10 h-10 text-destructive mx-auto" />
                <h3 className="font-bold text-lg">Decisões Inseguras</h3>
                <p className="text-sm text-muted-foreground">
                  Quantas vezes você ficou na dúvida se estava fazendo a coisa certa?
                </p>
              </div>

              <div className="space-y-2">
                <TrendingUp className="w-10 h-10 text-amber-600 mx-auto" />
                <h3 className="font-bold text-lg">Preço Aumentando</h3>
                <p className="text-sm text-muted-foreground">
                  Esta é uma oferta de lançamento. O preço vai aumentar em breve.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mt-8">
              <p className="text-base md:text-xl font-bold text-foreground leading-relaxed">
                <span className="text-destructive">Você pode continuar sofrendo sozinha</span>, 
                pesquisando em sites duvidosos, perdendo sono com cada dúvida...
              </p>
              <p className="text-base md:text-xl font-black text-primary mt-4 leading-relaxed">
                OU pode ter toda a segurança e tranquilidade que você merece 
                <span className="block mt-2">por menos de R$ 2,00 por mês (no plano vitalício).</span>
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              * O Mamãe Zen não substitui consultas médicas. Sempre consulte seu pediatra.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Urgency;
