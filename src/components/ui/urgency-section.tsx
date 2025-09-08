import { Clock, AlertTriangle } from "lucide-react";

export const UrgencySection = () => {
  return (
    <section className="py-16 bg-black border-t-4 border-destructive">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <Clock className="h-12 w-12 text-destructive animate-pulse" />
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          
          
          {/* Countdown Visual Effect */}
          <div className="mt-8 p-6 bg-gray-900 rounded-lg shadow-lg border-2 border-destructive/20">
            <p className="text-sm text-gray-300 mb-2">TEMPO LIMITADO</p>
            <div className="text-2xl font-bold text-destructive">
              ⏰ Oferta expira em 7 dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};