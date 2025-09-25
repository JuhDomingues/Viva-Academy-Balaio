import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { trackPixelEvent, FacebookPixelEvents } from "@/lib/facebook-pixel";

interface PricingSectionProps {
  onCTAClick: () => void;
}

export const PricingSection = ({ onCTAClick }: PricingSectionProps) => {
  return (
    <section id="oferta" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Title */}
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Oferta Exclusiva
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Comece sua jornada hoje
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforme o sonho americano em realidade com nossa plataforma completa
            </p>
          </div>
          
          {/* Clean Pricing Card */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-12 shadow-lg relative max-w-3xl mx-auto">
            {/* Limited Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm">
                OFERTA LIMITADA
              </div>
            </div>

            {/* Price Section */}
            <div className="text-center mb-12 mt-4">
              <div className="mb-4">
                <span className="text-lg text-gray-400 line-through">De R$ 1.997</span>
              </div>
              <div className="relative inline-block">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                  12x R$ 66,42
                </div>
              </div>
              <p className="text-lg text-gray-300 mt-2">ou à vista por R$ 797</p>
            </div>
            
            {/* Urgency */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-red-600" />
                <p className="text-lg font-semibold text-red-700">Oferta válida por apenas 7 dias</p>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-white">
                O que está incluído:
              </h3>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Plataforma com trilhas completas sobre imigração, moradia, escolas e adaptação</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Lives semanais com especialistas em cada área da vida nos EUA</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Comunidade exclusiva para trocar experiências reais</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Descontos em serviços de visto, consultorias e parceiros oficiais</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Apoio completo para um processo organizado e seguro</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="space-y-4">
              <Button 
                onClick={() => {
                  // Track Facebook Pixel conversion event
                  trackPixelEvent(FacebookPixelEvents.INITIATE_CHECKOUT, {
                    content_name: 'Viva Academy Subscription',
                    value: 797,
                    currency: 'BRL',
                    source: 'pricing_section'
                  });
                  
                  window.open('https://assinatura.vivaacademy.app/subscribe/oferta-especial-balaio', '_blank');
                }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 rounded-xl shadow-lg transition-all max-w-md mx-auto"
              >
                GARANTIR MINHA VAGA AGORA
              </Button>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <span>✓ Compra 100% Segura</span>
                <span>✓ Acesso Imediato</span>
                <span>✓ Garantia de 7 dias</span>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Mais de 5.000 famílias já realizaram o sonho americano</p>
            <div className="flex items-center justify-center gap-1">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="ml-2 text-gray-300 font-medium">4.9/5 (2.847 avaliações)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};