import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  
  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') }
  ];
  
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-foreground">{t('faq.title1')} </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('faq.title2')}
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            {t('faq.subtitle')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border-2 rounded-2xl px-4 md:px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
