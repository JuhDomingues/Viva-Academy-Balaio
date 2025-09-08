import { BookOpen, Home, Briefcase } from "lucide-react";

export const EntrepreneursSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-white leading-tight">
            Você não quer apenas imigrar.
          </h2>
          
          <div className="text-left space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              <strong>Quer ver seus filhos em boas escolas, sua família morando em um bairro seguro, 
              com acesso a oportunidades de trabalho e crescimento.</strong>
            </p>
            
            <p>
              É isso que a Viva Academy entrega: um passo a passo estruturado, com especialistas, 
              comunidade engajada e ferramentas práticas para cada decisão que você precisa tomar.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Chega de tentar descobrir tudo sozinho ou gastar com informações soltas. 
              Aqui você encontra tudo em um só lugar.
            </p>
          </div>
          
          {/* Visual Elements */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Escolas de Qualidade</h3>
              <p className="text-gray-300">Orientação completa para escolher as melhores escolas para seus filhos</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Bairros Seguros</h3>
              <p className="text-gray-300">Como encontrar e escolher os melhores bairros para morar</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Oportunidades</h3>
              <p className="text-gray-300">Acesso a trabalho e crescimento profissional nos EUA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};