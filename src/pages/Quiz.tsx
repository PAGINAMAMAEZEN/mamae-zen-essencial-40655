import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Baby, Heart, Sparkles } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Você é mãe de primeira viagem?",
      options: ["Sim, é meu primeiro filho", "Não, já tenho outros filhos"]
    },
    {
      question: "Qual é a sua maior dificuldade na maternidade?",
      options: [
        "Saber se estou fazendo as coisas certas",
        "Encontrar informações confiáveis rapidamente",
        "Lidar com a ansiedade e insegurança",
        "Ter tempo para tudo"
      ]
    },
    {
      question: "Com que frequência você busca informações sobre cuidados com bebê?",
      options: [
        "Diariamente",
        "Algumas vezes por semana",
        "Raramente",
        "Só quando tenho uma dúvida urgente"
      ]
    },
    {
      question: "Qual recurso seria mais útil para você agora?",
      options: [
        "Guia completo de medicamentos seguros",
        "Lista de sintomas e quando procurar ajuda",
        "Áudios relaxantes para acalmar",
        "Todas as opções acima"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, navigate to main page
      setTimeout(() => {
        navigate('/?from=quiz');
      }, 1000);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-8">
      <div className="container max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Quiz Rápido</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Descubra Como o <span className="text-primary">Mamãe Zen</span> 
            <br />Pode Te Ajudar
          </h1>
          <p className="text-muted-foreground">
            Responda 4 perguntas rápidas para recebermos uma recomendação personalizada
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <Card className="p-6 md:p-10 animate-scale-in">
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-4">
              {currentQuestion === 0 && <Baby className="w-8 h-8 text-primary flex-shrink-0" />}
              {currentQuestion === 1 && <Heart className="w-8 h-8 text-primary flex-shrink-0" />}
              {currentQuestion === 2 && <Sparkles className="w-8 h-8 text-primary flex-shrink-0" />}
              {currentQuestion === 3 && <Heart className="w-8 h-8 text-primary flex-shrink-0" />}
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {questions[currentQuestion].question}
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto py-4 px-5 hover:bg-primary/10 hover:border-primary transition-all text-base"
                onClick={() => handleAnswer(option)}
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </span>
              </Button>
            ))}
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            🔒 Suas respostas são privadas e seguras
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
