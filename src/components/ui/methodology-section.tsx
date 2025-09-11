import { Button } from "@/components/ui/button";

interface MethodologySectionProps {
  onCTAClick: () => void;
}

export const MethodologySection = ({ onCTAClick }: MethodologySectionProps) => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Visual Elements */}
          <div className="relative">
            <div className="text-center space-y-8">
              <div className="inline-block">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">1</span>
                </div>
                <h3 className="font-bold text-lg text-white">MÉTODO ÚNICO</h3>
              </div>
              
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">VISÃO</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">AÇÃO</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">FOCO</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">VIDA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-primary">A Viva Academy é sua</span> <br />
              <span className="text-primary">bússola completa</span> <br />
              <span className="text-primary">para os EUA</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Desenvolvemos uma plataforma completa com trilhas estruturadas sobre 
                imigração, moradia, escolas e adaptação, tudo em um só lugar para 
                facilitar sua jornada.
              </p>
              
              <p>
                Com especialistas, lives semanais, comunidade engajada e ferramentas 
                práticas, você terá o suporte necessário para cada decisão importante 
                do seu processo de imigração.
              </p>
              
              <p>
                Mais de <strong>5.000 famílias</strong> já realizaram o sonho americano 
                com segurança e planejamento através da nossa metodologia.
              </p>
            </div>
            
            <div className="mt-12">
              <Button 
                onClick={() => {
                  const ofertaSection = document.getElementById('oferta');
                  if (ofertaSection) {
                    ofertaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4"
              >
                Quero começar meu plano de vida nos EUA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};