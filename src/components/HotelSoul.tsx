import React from 'react';
import { Palette, Music, ChefHat, Building2 } from 'lucide-react';

const HotelSoul = () => {
  const features = [
    {
      icon: Building2,
      title: "Architecture Andalouse",
      arabicTitle: "العمارة الأندلسية",
      description: "Arcs outrepassés, colonnes de marbre et patios ornés de fontaines centrales inspirés des palais de Grenade et Cordoue."
    },
    {
      icon: Palette,
      title: "Artisanat Traditionnel",
      arabicTitle: "الحرف التقليدية",
      description: "Zelliges de Fès, portes sculptées à la main, tapis berbères et cuivres ciselés par nos artisans locaux."
    },
    {
      icon: Music,
      title: "Héritage Musical",
      arabicTitle: "التراث الموسيقي",
      description: "Soirées de musique andalouse, concerts de oud et spectacles de danse traditionnelle dans notre patio principal."
    },
    {
      icon: ChefHat,
      title: "Gastronomie Authentique",
      arabicTitle: "فن الطبخ الأصيل",
      description: "Cuisine algérienne raffinée avec tajines, couscous royal et pâtisseries orientales préparés selon les recettes ancestrales."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50 relative overflow-hidden">
      {/* Andalusian Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.6'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0zm0 20L20 50l30 30 30-30L50 20zm0 20l10 10-10 10-10-10L50 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Andalusian Design */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 rounded-full px-8 py-3 mb-8 shadow-lg">
            <span className="text-stone-900 font-bold text-sm">✦ L'ÂME DE L'HÔTEL ✦</span>
          </div>
          
          {/* Decorative Horseshoe Arch */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-20 border-2 border-amber-400 rounded-t-full relative">
              <div className="absolute inset-2 border border-amber-400 rounded-t-full"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-serif">
            Un séjour dans le patrimoine
          </h2>
          <p className="text-xl text-emerald-600 mb-6 font-medium">إقامة في قلب التراث</p>
          <p className="text-xl text-slate-600 leading-relaxed">
            El Mahroussa vous transporte dans l'âge d'or d'Al-Andalus, où chaque détail architectural 
            raconte l'histoire millénaire de la civilisation ar abo-musulmane en Méditerranée.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with Andalusian Frame */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-3xl transform rotate-2"></div>
            <div className="absolute -inset-4 border-2 border-amber-300/30 rounded-2xl transform -rotate-1"></div>
            
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
              alt="Patio central avec fontaine"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            
            {/* Geometric Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-amber-400 transform rotate-45"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-emerald-400 transform rotate-45"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-emerald-400 transform rotate-45"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-amber-400 transform rotate-45"></div>
            
            {/* Heritage Badge */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-xl">
              <div className="text-stone-900 font-bold text-3xl">1001</div>
              <div className="text-stone-800 text-sm">Nuits Magiques</div>
            </div>
          </div>

          {/* Content with Andalusian Elements */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-serif">
              L'héritage vivant de l'Andalousie
            </h3>
            <p className="text-emerald-600 font-medium mb-6">التراث الحي للأندلس</p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Inspiré par l'architecture des palais nasrides et almohades, El Mahroussa perpétue 
              l'art de vivre raffiné de l'Andalousie médiévale. Nos espaces respirent l'harmonie 
              parfaite entre tradition et modernité, créant une atmosphère unique où le temps 
              semble suspendu dans la beauté éternelle.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Patios Andalous Authentiques</h4>
                  <p className="text-slate-600">Jardins intérieurs avec fontaines en marbre de Carrare et orangers centenaires importés de Séville</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Palette className="w-7 h-7 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Artisanat d'Exception</h4>
                  <p className="text-slate-600">Mobilier authentique créé par les maîtres artisans du Maghreb selon les techniques ancestrales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with Enhanced Andalusian Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-stone-100 relative overflow-hidden"
            >
              {/* Andalusian Corner Pattern */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <div className="w-full h-full border-2 border-emerald-400 rounded-bl-full"></div>
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 mb-2 font-serif">{feature.title}</h4>
              <p className="text-emerald-600 font-medium mb-4 text-sm">{feature.arabicTitle}</p>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              
              {/* Decorative Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Decorative Geometric Separator */}
        <div className="flex justify-center items-center space-x-4 mt-16">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400"></div>
          <div className="w-4 h-4 border border-amber-400 transform rotate-45"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HotelSoul;