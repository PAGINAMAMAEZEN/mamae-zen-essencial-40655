import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, Clock, Heart, BookOpen, Sparkles } from "lucide-react";

const Solution = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Shield,
      title: "Segurança em Cada Decisão",
      description: "Informações confiáveis e atualizadas sobre medicamentos, doses e cuidados. Nunca mais fique na dúvida."
    },
    {
      icon: Clock,
      title: "Economia de Tempo Preciosa",
      description: "Encontre tudo em segundos. Sem precisar pesquisar em 10 sites diferentes ou esperar retorno da pediatra."
    },
    {
      icon: Heart,
      title: "Paz de Espírito",
      description: "Durma tranquila sabendo que tem um guia completo sempre à mão. Sua ansiedade vai diminuir drasticamente."
    },
    {
      icon: BookOpen,
      title: "Conhecimento Sempre Atualizado",
      description: "Acesso vitalício com todas as atualizações futuras. O app cresce junto com você e seu bebê."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm md:text-base mb-4">
            <Sparkles className="w-5 h-5" />
            <span>A Solução Que Você Estava Procurando</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Apresentamos o <span className="bg-gradient-primary bg-clip-text text-transparent">Mamãe Zen</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O aplicativo que transforma sua maternidade, trazendo segurança, 
            conhecimento e tranquilidade para o seu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold">
              Imagine Sua Vida Daqui a 30 Dias
            </h3>
            
            <div className="space-y-3 text-left md:text-center">
              <div className="flex items-start md:items-center gap-3 md:justify-center">
                <Check className="w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-base md:text-lg">Você acorda mais confiante e tranquila</p>
              </div>
              <div className="flex items-start md:items-center gap-3 md:justify-center">
                <Check className="w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-base md:text-lg">Cada decisão sobre seu bebê vem com segurança</p>
              </div>
              <div className="flex items-start md:items-center gap-3 md:justify-center">
                <Check className="w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-base md:text-lg">Você economiza horas de pesquisa e ansiedade</p>
              </div>
              <div className="flex items-start md:items-center gap-3 md:justify-center">
                <Check className="w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
                <p className="text-base md:text-lg">Sua família toda se beneficia da sua tranquilidade</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all text-sm md:text-xl px-4 md:px-10 py-6 md:py-8 shadow-xl font-bold mt-8 border-0 w-full max-w-2xl mx-auto"
              onClick={scrollToOffer}
            >
              Quero Transformar Minha Maternidade Agora
            </Button>

            <p className="text-sm opacity-90">
              Mais de 10.000 mães já transformaram suas vidas • Garanta seu lugar agora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
