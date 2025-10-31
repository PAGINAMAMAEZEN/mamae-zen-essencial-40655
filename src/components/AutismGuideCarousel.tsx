import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import introImage from "@/assets/autism-guide-intro.png";
import sinaisImage from "@/assets/autism-guide-sinais.png";
import estrategiasImage from "@/assets/autism-guide-estrategias.png";
import recursosImage from "@/assets/autism-guide-recursos.png";

const slides = [
  {
    image: introImage,
    alt: "Guia para Bebês Autistas - Introdução"
  },
  {
    image: sinaisImage,
    alt: "Sinais Precoces por Idade - Identificação do Autismo"
  },
  {
    image: estrategiasImage,
    alt: "Estratégias de Apoio para Crianças Autistas"
  },
  {
    image: recursosImage,
    alt: "Recursos e Suporte - Profissionais e Apoio aos Pais"
  }
];

const AutismGuideCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Guia Completo para Bebês Autistas
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça, aprenda e saiba como cuidar do seu bebê
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-2 border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src={slide.image} 
                        alt={slide.alt}
                        className="w-full h-auto object-cover aspect-[3/2]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
        
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            🌈 Deslize para conhecer todo o conteúdo do guia
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutismGuideCarousel;
