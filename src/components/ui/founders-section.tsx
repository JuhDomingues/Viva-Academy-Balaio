import { Button } from "@/components/ui/button";
import sandraImage from "@/assets/Sandra.webp";
import rafaelImage from "@/assets/Rafael.webp";
import rodrigoImage from "@/assets/Rodrigo.webp";
import wesleyImage from "@/assets/Wesley.webp";
import isabelaImage from "@/assets/Isabela.webp";

interface FoundersSectionProps {
  onCTAClick: () => void;
}

export const FoundersSection = ({ onCTAClick }: FoundersSectionProps) => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Especialistas em Imigração à sua disposição
          </h2>
        </div>
        
        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto mb-16">
          {/* Sandra Arcanjo */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={sandraImage} 
                alt="Sandra Arcanjo"
                className="w-48 h-48 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-white mb-1">Sandra Arcanjo</h3>
            <p className="text-sm text-gray-300 mb-2">Especialista em revalidação</p>
          </div>
          
          {/* Rafael Rezende */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={rafaelImage} 
                alt="Rafael Rezende"
                className="w-48 h-48 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-white mb-1">Rafael Rezende</h3>
            <p className="text-sm text-gray-300 mb-2">Especialista em seguros</p>
          </div>
          
          {/* Dr. Rodrigo Andrade */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={rodrigoImage} 
                alt="Dr. Rodrigo Andrade"
                className="w-48 h-48 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-white mb-1">Dr. Rodrigo Andrade</h3>
            <p className="text-sm text-gray-300 mb-2">Doutor em fisioterapia</p>
          </div>
          
          {/* Wesley Costa */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={wesleyImage} 
                alt="Wesley Costa"
                className="w-48 h-48 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-white mb-1">Wesley Costa</h3>
            <p className="text-sm text-gray-300 mb-2">School Counselor</p>
          </div>
          
          {/* Dra. Isabela Freitas */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={isabelaImage} 
                alt="Dra. Isabela Freitas"
                className="w-48 h-48 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-white mb-1">Dra. Isabela Freitas</h3>
            <p className="text-sm text-gray-300 mb-2">Advogada | Paralegal</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button 
            onClick={() => {
              const ofertaSection = document.getElementById('oferta');
              if (ofertaSection) {
                ofertaSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-12 py-4 rounded-none"
          >
Quero começar meu plano de vida nos EUA
          </Button>
        </div>
      </div>
    </section>
  );
};