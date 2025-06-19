import React from "react";
import {
  Bed,
  Wifi,
  Car,
  Coffee,
  Bath,
  Mountain,
  Waves,
  Star,
} from "lucide-react";

const Chambres = () => {
  const suites = [
    {
      name: "Suite Andalouse Royale",
      arabicName: "جناح الأندلس الملكي",
      price: "45,000 DA",
      image: "assets/chambre01.jpg",
      size: "85m²",
      guests: 2,
      features: ["Vue sur mer", "Patio privé", "Hammam", "Salon mauresque"],
      description:
        "Suite somptueuse inspirée des palais de Grenade avec arcs outrepassés, zelliges de Fès et mobilier artisanal.",
    },
    {
      name: "Chambre Nasride",
      arabicName: "غرفة نصرية",
      price: "28,000 DA",
      image: "assets/chambre04.jpg",
      size: "45m²",
      guests: 2,
      features: [
        "Balcon andalou",
        "Décor traditionnel",
        "Salle de bain marbre",
        "Vue jardin",
      ],
      description:
        "Chambre élégante aux motifs géométriques islamiques avec vue sur nos jardins andalous.",
    },
    {
      name: "Suite Almohade",
      arabicName: "جناح الموحدين",
      price: "38,000 DA",
      image: "assets/chambre05.jpg",
      size: "65m²",
      guests: 3,
      features: [
        "Salon séparé",
        "Terrasse privée",
        "Décor berbère",
        "Cheminée traditionnelle",
      ],
      description:
        "Suite spacieuse alliant raffinement almohade et confort moderne avec terrasse panoramique.",
    },
  ];

  const amenities = [
    { icon: Wifi, name: "WiFi Haut Débit" },
    { icon: Car, name: "Parking Privé" },
    { icon: Coffee, name: "Service Thé 24h" },
    { icon: Bath, name: "Hammam Privé" },
    { icon: Mountain, name: "Vue Panoramique" },
    { icon: Waves, name: "Accès Plage" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Andalusian Pattern */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden">
        {/* Andalusian Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M60 0l60 60-60 60L0 60 60 0zm0 20L20 60l40 40 40-40L60 20zm0 20l20 20-20 20-20-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative Border */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Chambres & Suites
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">
              غرف وأجنحة فاخرة
            </p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos chambres et suites inspirées de l'architecture
              andalouse, où chaque détail évoque la splendeur des palais
              mauresques
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Suites Grid */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {suites.map((suite, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Andalusian Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold px-4 py-2 rounded-full shadow-lg">
                    {suite.price}
                  </div>

                  {/* Star Rating */}
                  <div className="absolute top-4 left-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1 font-serif">
                      {suite.name}
                    </h3>
                    <p className="text-emerald-600 font-medium">
                      {suite.arabicName}
                    </p>
                  </div>

                  {/* Room Info */}
                  <div className="flex items-center space-x-6 mb-4 text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{suite.guests} personnes</span>
                    </div>
                    <div className="text-sm">{suite.size}</div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {suite.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {suite.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Réserver cette suite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Équipements & Services
            </h2>
            <p className="text-xl text-stone-300">خدمات ومرافق فاخرة</p>

            {/* Decorative Line */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <amenity.icon className="w-8 h-8 text-stone-900" />
                </div>
                <h4 className="text-white font-medium">{amenity.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chambres;
