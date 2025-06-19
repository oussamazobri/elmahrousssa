import React, { useState } from "react";
import {
  Instagram,
  Heart,
  MessageCircle,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const InstagramCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const posts = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",

      likes: 2847,
      comments: 156,
      username: "elmahroussa_official",
    },
    {
      id: 2,
      image: "assets/chambre05.jpg",
      caption: " #LuxuryTravel #Algeria",
      likes: 1923,
      comments: 89,
      username: "elmahroussa_official",
    },
    {
      id: 3,
      image: "assets/decoration.jpg",
      caption: "Une expérience authentique inoubliable",
      likes: 3124,
      comments: 234,
      username: "elmahroussa_official",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      caption:
        "Détails artisanaux : zelliges et portes sculptées par nos maîtres artisans 🎨",
      likes: 1567,
      comments: 78,
      username: "elmahroussa_official",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      caption:
        "Suite Andalouse : où le luxe rencontre l'authenticité 👑 #LuxurySuite",
      likes: 2156,
      comments: 142,
      username: "elmahroussa_official",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(posts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(posts.length / 3)) % Math.ceil(posts.length / 3)
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-6 py-2 mb-6">
            <Instagram className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">
              @ELMAHROUSSA_OFFICIAL
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partagez vos moments magiques
          </h2>
          <p className="text-xl text-stone-300 leading-relaxed">
            Découvrez les plus beaux instants capturés par nos hôtes et notre
            équipe
          </p>
        </div>

        {/* Instagram Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Posts Grid */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(posts.length / 3) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-2">
                      {posts
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((post) => (
                          <div
                            key={post.id}
                            className="group relative bg-black rounded-2xl overflow-hidden aspect-square cursor-pointer"
                          >
                            {/* Image */}
                            <img
                              src={post.image}
                              alt={`Instagram post ${post.id}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                {/* Engagement Stats */}
                                <div className="flex items-center space-x-4 mb-3">
                                  <div className="flex items-center space-x-1 text-white">
                                    <Heart className="w-5 h-5" />
                                    <span className="font-medium">
                                      {post.likes.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-white">
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="font-medium">
                                      {post.comments}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-white">
                                    <Share className="w-5 h-5" />
                                  </div>
                                </div>

                                {/* Caption */}
                                <p className="text-white text-sm leading-relaxed line-clamp-2">
                                  {post.caption}
                                </p>
                              </div>
                            </div>

                            {/* Instagram Icon */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Instagram className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-8 py-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Instagram className="w-6 h-6 text-white" />
            <span className="text-white font-bold">
              Suivez-nous sur Instagram
            </span>
          </div>
          <p className="text-stone-400 mt-4">
            #ElMahroussa #LuxuryAlgeria #AndalusianHeritage
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
