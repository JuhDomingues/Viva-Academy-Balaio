export const BalaioOffer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-6 flex items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <img 
            src="/logo balaio.jpg" 
            alt="Logo Podcast do Balaio" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-center">
            <p className="font-semibold text-lg">
              OFERTA ESPECIAL em parceria com o <span className="font-bold">Podcast do Balaio</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle animation background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
    </div>
  );
};