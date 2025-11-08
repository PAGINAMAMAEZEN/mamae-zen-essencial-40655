import { AlertCircle, Baby, Clock, Heart, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";

const PainPoints = () => {
  const pains = [
    {
      icon: AlertCircle,
      title: "Medo de Fazer Algo Errado",
      description: "Você acorda de madrugada com o coração apertado, com medo de dar o remédio errado ou na dose errada para seu bebê. Cada decisão parece carregar um peso enorme.",
      color: "text-destructive"
    },
    {
      icon: Clock,
      title: "Sem Tempo Para Pesquisar",
      description: "Entre fraldas, mamadas e noites sem dormir, quando você vai ter tempo de ficar horas pesquisando na internet? E ainda corre o risco de encontrar informação errada.",
      color: "text-orange-500"
    },
    {
      icon: ShieldAlert,
      title: "Informações Confusas e Contraditórias",
      description: "Um site diz uma coisa, outro diz o contrário. Sua sogra tem uma opinião, a pediatra tem outra. Você não aguenta mais essa confusão e só quer ter CERTEZA do que fazer.",
      color: "text-amber-600"
    },
    {
      icon: Baby,
      title: "Culpa Por Não Saber Tudo",
      description: "Você se sente culpada por não saber tudo sobre maternidade. 'Eu deveria saber isso', você pensa. Mas ninguém nasce sabendo ser mãe, e você merece ter apoio.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive font-medium text-sm md:text-base mb-4">
            <Heart className="w-5 h-5" />
            <span>Sabemos Como Você Se Sente</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Você Não Está Sozinha Nessa <span className="text-primary">Jornada</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de mães passam pelas mesmas dificuldades todos os dias. 
            Reconhece alguma dessas situações?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in border-l-4"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderLeftColor: `var(--${pain.color})` 
              }}
            >
              <div className="flex gap-4">
                <div className={`${pain.color} flex-shrink-0`}>
                  <pain.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {pain.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-primary text-white px-6 py-4 rounded-xl shadow-xl max-w-2xl">
            <p className="text-lg md:text-xl font-semibold">
              E se você pudesse ter TODAS as respostas que precisa, 
              <span className="block mt-2">sempre que precisar, na palma da sua mão?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
