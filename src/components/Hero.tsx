import React from "react";
import { Calendar, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hotel facade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-900/30 to-amber-900/40 z-10"></div>
        <img
          src="assets\mainimghotel.jpg"
          alt="El Mahroussa Hotel Facade"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Andalusian Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M60 0l60 60-60 60L0 60 60 0zm0 20L20 60l40 40 40-40L60 20zm0 20l20 20-20 20-20-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Horseshoe Arch Decorative Elements */}
      <div className="absolute top-20 left-10 z-25 hidden lg:block opacity-30">
        <div className="w-24 h-32 border-2 border-amber-300 rounded-t-full"></div>
        <div className="w-20 h-28 border border-amber-300 rounded-t-full absolute top-2 left-2"></div>
      </div>

      <div className="absolute top-20 right-10 z-25 hidden lg:block opacity-30">
        <div className="w-24 h-32 border-2 border-emerald-300 rounded-t-full"></div>
        <div className="w-20 h-28 border border-emerald-300 rounded-t-full absolute top-2 left-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Andalusian Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-amber-300/30">
            <div className="w-6 h-6 border border-amber-300 rounded-full relative">
              <div className="absolute inset-1 border border-amber-300 rounded-full"></div>
            </div>
            <span className="text-amber-100 font-medium">
              قصر الأندلس الفاخر
            </span>
            <Star className="w-5 h-5 text-amber-400 fill-current" />
          </div>

          {/* Main Headline with Arabic Calligraphy Style */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-50 mb-6 leading-tight font-serif">
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-amber-300 mb-4">
              ✦ El Mahroussa ✦
            </span>
            Un havre d'héritage et d\'élégance
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-emerald-300 mt-4">
              au cœur de Sidi Frej
            </span>
          </h1>

          {/* Arabic Subtitle */}
          <div className="text-2xl md:text-3xl text-amber-200 mb-4 font-medium">
            واحة التراث والأناقة في قلب سيدي فرج
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'authenticité de l'architecture andalouse et mauresque
            dans un cadre de luxe exceptionnel, où chaque détail évoque la
            splendeur des palais de Grenade et Cordoue
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/reservation"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Réserver maintenant</span>
              </span>
            </Link>
            <Link
              to="/experience"
              className="group border-2 border-stone-50 text-stone-50 hover:bg-stone-50 hover:text-slate-800 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Découvrir l'hôtel</span>
              </span>
            </Link>
          </div>

          {/* Location Info with Andalusian Styling */}
          <div className="flex items-center justify-center space-x-3 text-stone-300">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              Sidi Frej, Alger • Vue sur mer Méditerranée
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating Andalusian Info Cards */}
      <div className="absolute bottom-10 left-10 z-30 hidden lg:block">
        <div className="bg-stone-50/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/20 shadow-xl">
          <div className="text-amber-300 text-sm mb-2 font-medium">
            🌡️ Température
          </div>
          <div className="text-2xl font-bold text-amber-300">24°C</div>
          <div className="text-xs text-stone-300 mt-1">
            Climat méditerranéen
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
        <div className="bg-stone-50/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 shadow-xl">
          <div className="text-emerald-300 text-sm mb-2 font-medium">
            🏛️ Disponibilité
          </div>
          <div className="text-2xl font-bold text-emerald-300">Ouvert</div>
          <div className="text-xs text-stone-300 mt-1">Service 24h/24</div>
        </div>
      </div>

      {/* Decorative Geometric Border at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-emerald-600 to-amber-600 opacity-60 z-40"></div>
    </section>
  );
};

export default Hero;
