import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/Carrossel/IMG 1.webp";
import img2 from "@/assets/Carrossel/IMG 2.webp";
import img3 from "@/assets/Carrossel/IMG 3.webp";
import img4 from "@/assets/Carrossel/IMG 4.webp";
import img5 from "@/assets/Carrossel/IMG 5.webp";
import img6 from "@/assets/Carrossel/IMG 6.webp";
import img7 from "@/assets/Carrossel/IMG 7.webp";
import img8 from "@/assets/Carrossel/IMG 8 .webp";

const carouselImages = [
  { src: img1, alt: "Viva Academy - Imagem 1" },
  { src: img2, alt: "Viva Academy - Imagem 2" },
  { src: img3, alt: "Viva Academy - Imagem 3" },
  { src: img4, alt: "Viva Academy - Imagem 4" },
  { src: img5, alt: "Viva Academy - Imagem 5" },
  { src: img6, alt: "Viva Academy - Imagem 6" },
  { src: img7, alt: "Viva Academy - Imagem 7" },
  { src: img8, alt: "Viva Academy - Imagem 8" }
];

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const duplicatedImages = [...carouselImages, ...carouselImages, ...carouselImages];
  const totalImages = duplicatedImages.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (currentIndex >= carouselImages.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(carouselImages.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex < carouselImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(carouselImages.length + currentIndex);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Um pouco do que você encontra dentro da Viva Academy!
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore nossa plataforma completa com conteúdo exclusivo para sua jornada de imigração
          </p>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden">
            <div 
              className={`flex gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 316}px)` }}
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[300px] h-[579px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(carouselImages.length + index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  (currentIndex % carouselImages.length) === index
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};