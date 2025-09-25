import { Trophy } from "lucide-react";

export const PositioningSection = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <div className="text-sm text-gray-400 mb-4 tracking-wider">
              SUA FAMÍLIA, <br />
              SEU FUTURO
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="text-primary">Imigração</span> <br />
              <span className="text-primary">Planejada,</span> <br />
              <span className="text-primary">Vida Estruturada</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A Viva Academy oferece o suporte completo que você precisa para transformar 
              o sonho americano em realidade. Especialistas, comunidade e ferramentas práticas 
              para cada decisão importante da sua jornada.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Da escolha da melhor escola para seus filhos até encontrar o bairro ideal para 
              morar - tudo organizado em um processo seguro e sustentável para sua família.
            </p>
          </div>
          
          {/* Right Side - Trophies */}
          <div className="relative flex justify-center items-center px-8 lg:px-0">
            {/* Main Trophy */}
            <div className="relative z-10">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <Trophy className="w-16 h-16 lg:w-20 lg:h-20 text-yellow-900" />
              </div>
            </div>
            
            {/* Secondary Trophies */}
            <div className="absolute -left-4 lg:-left-12 top-4 lg:top-8">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-xl opacity-80">
                <Trophy className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-900" />
              </div>
            </div>
            
            <div className="absolute -right-2 lg:-right-8 bottom-2 lg:bottom-4">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl opacity-90">
                <Trophy className="w-12 h-12 lg:w-14 lg:h-14 text-yellow-900" />
              </div>
            </div>
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};