import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HotelCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "/assets/hotel01.jpg",

      description: "Un aperçu de la splendeur architecturale.",
    },
    {
      image: "/assets/hotel02.jpg",

      description: "Les détails magnifiquement préservés.",
    },
    {
      image: "/assets/hotel03.jpg",

      description: "La magie des patios andalous.",
    },
    {
      image: "/assets/hotel04.jpg",

      description: "La lumière et l’ombre en harmonie.",
    },
    {
      image: "/assets/hotel05.jpg",

      description: "Une atmosphère de paix intérieure.",
    },
    {
      image: "/assets/hotel06.jpg",

      description: "La rencontre du ciel et de la pierre.",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-amber-900 relative overflow-hidden">
      {/* Background pattern and decorations omitted for brevity */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header omitted for brevity */}

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
                        {slide.title}
                      </h3>
                      <p className="text-xl text-amber-300 mb-4 font-medium">
                        {slide.arabicTitle}
                      </p>
                      <p className="text-lg text-stone-200 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-4 mt-8">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? "ring-4 ring-amber-400 scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-amber-400/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-amber-400 scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelCarousel;
