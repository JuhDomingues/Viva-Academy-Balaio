import { CheckCircle } from "lucide-react";

const benefits = [
  "Plataforma com trilhas completas sobre imigração, moradia, escolas e adaptação",
  "Lives semanais com especialistas em cada área da vida nos EUA",
  "Comunidade exclusiva para trocar experiências reais",
  "Descontos e cashback em serviços de visto, consultorias e parceiros oficiais",
  "Apoio para transformar sua mudança em um processo organizado, seguro e sustentável"
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">
            O que você recebe ao se juntar à Viva Academy
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Com a assinatura, você terá acesso a:
          </p>
          
          <div className="grid gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};