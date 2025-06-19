import React from 'react';
import { Star, Quote, Play } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Benali",
      location: "Paris, France",
      rating: 5,
      text: "El Mahroussa nous a transportés dans un conte des Mille et Une Nuits. L'architecture est à couper le souffle, et l'hospitalité algérienne authentique. Un séjour inoubliable !",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      hasVideo: true
    },
    {
      name: "Jean-Michel Dubois",
      location: "Lyon, France",
      rating: 5,
      text: "Le raffinement de cet établissement dépasse toutes les attentes. Les détails architecturaux sont somptueux, et la gastronomie algérienne revisitée est exceptionnelle.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      hasVideo: false
    },
    {
      name: "Fatima Al-Zahra",
      location: "Casablanca, Maroc",
      rating: 5,
      text: "Une expérience culturelle authentique. Les soirées de musique andalouse dans le patio principal resteront gravées dans ma mémoire à jamais.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      hasVideo: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm">TÉMOIGNAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            L'avis de nos hôtes privilégiés
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez les expériences exceptionnelles vécues par nos invités dans ce havre de paix méditerranéen
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-amber-500 flex-shrink-0" />
                {testimonial.hasVideo && (
                  <div className="relative">
                    <button className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
                />
                <div>
                  <div className="font-bold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-stone-300">Satisfaction Client</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">1,247</div>
              <div className="text-stone-300">Avis 5 Étoiles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">15</div>
              <div className="text-stone-300">Prix d'Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-stone-300">Service Conciergerie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;