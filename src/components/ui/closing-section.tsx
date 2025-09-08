import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap } from "lucide-react";

interface ClosingSectionProps {
  onCTAClick: () => void;
}

export const ClosingSection = ({ onCTAClick }: ClosingSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Heart className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emocional</h3>
              <p>Transforme ansiedade em confiança</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Financeiro</h3>
              <p>Evite gastos desnecessários</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Estratégico</h3>
              <p>Transforme sonho em estratégia</p>
            </div>
          </div>
          
          <h2 className="section-title mb-8">
            Imigrar sem preparo custa caro — financeiramente e emocionalmente
          </h2>
          
          <p className="text-xl mb-8 leading-relaxed">
            Com a Viva Academy, você transforma um sonho em estratégia, 
            e cada decisão da sua família fica mais leve e segura.
          </p>
          
          <div className="bg-primary/20 rounded-xl p-8 mb-12">
            <p className="text-2xl font-bold mb-4">
              Dia 11 de setembro começa o prazo de 7 dias 
              que pode mudar o rumo da sua vida.
            </p>
            <p className="text-xl font-semibold text-primary">
              Não perca essa oportunidade.
            </p>
          </div>
          
          <Button 
            onClick={onCTAClick}
            className="cta-button text-xl px-12 py-6 mb-8"
          >
            Garantir minha vaga na Viva Academy
          </Button>
          
          <p className="text-lg text-muted-foreground">
            Junte-se a centenas de famílias que já estão construindo 
            seu futuro nos EUA de forma segura e estruturada.
          </p>
        </div>
      </div>
    </section>
  );
};