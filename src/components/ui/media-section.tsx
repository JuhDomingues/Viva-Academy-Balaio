import { ExternalLink } from "lucide-react";
import gazetaImage from "@/assets/Jornais/Gazeta.png";
import valorImage from "@/assets/Jornais/valor-economico.png";
import terraImage from "@/assets/Jornais/Logo-Terra.png";
import dinoImage from "@/assets/Jornais/Dino.png";

const mediaLinks = [
  {
    title: "Gazeta da Semana",
    subtitle: "Brasileiro cria 'Netflix do imigrante' para facilitar a vida de quem vai para os EUA",
    url: "https://gazetadasemana.com.br/noticia/211271/brasileiro-cria-netflix-do-imigrante-para-facilitar-a-vida-de-quem-vai-para-os-eua#google_vignette",
    image: gazetaImage
  },
  {
    title: "Valor Econômico",
    subtitle: "Brasileiro cria 'Netflix do imigrante' para quem vai aos EUA",
    url: "https://valor.globo.com/patrocinado/dino/noticia/2025/02/05/brasileiro-cria-netflix-do-imigrante-para-quem-vai-aos-eua.ghtml",
    image: valorImage
  },
  {
    title: "Terra",
    subtitle: "Brasileiro cria 'Netflix do imigrante' para quem vai aos EUA",
    url: "https://www.terra.com.br/noticias/brasileiro-cria-netflix-do-imigrante-para-quem-vai-aos-eua,f2dc65d1d1008a914a78df53305d06eb09oq8odq.html#google_vignette",
    image: terraImage
  },
  {
    title: "Dino IG",
    subtitle: "Brasileiro cria 'Netflix do imigrante' para quem vai aos EUA",
    url: "https://dino.ig.com.br/2025-02-05/brasileiro-cria-netflix-do-imigrante-para-quem-vai-aos-eua.html#google_vignette",
    image: dinoImage
  }
];

export const MediaSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Viva Academy na mídia
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Veja como a imprensa nacional tem destacado nossa missão de ajudar famílias brasileiras a realizarem o sonho americano
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                />
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {link.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};