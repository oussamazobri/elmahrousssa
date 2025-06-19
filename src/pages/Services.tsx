import React from "react";
import {
  Waves,
  Dumbbell,
  Car,
  Wifi,
  UtensilsCrossed,
  Headphones,
  Shield,
  Clock,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Spa & Hammam Andalou",
      arabicTitle: "حمام أندلسي وسبا",
      description:
        "Hammam traditionnel avec gommage au savon noir, massages aux huiles d'argan et soins du visage aux roses de Damas.",
      features: [
        "Hammam traditionnel",
        "Massages thérapeutiques",
        "Soins aux huiles essentielles",
        "Piscine chauffée",
      ],
      price: "À partir de 8,500 DA",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    },
    {
      icon: UtensilsCrossed,
      title: "Service de Conciergerie",
      arabicTitle: "خدمة الكونسيرج",
      description:
        "Notre équipe dédiée organise vos excursions, réservations et expériences culturelles authentiques.",
      features: [
        "Réservations restaurants",
        "Excursions culturelles",
        "Transport privé",
        "Guide personnel",
      ],
      price: "Service inclus",
      image:
        "https://plus.unsplash.com/premium_photo-1716999430033-82bfa6136013?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Car,
      title: "Transport & Transferts",
      arabicTitle: "النقل والتنقلات",
      description:
        "Service de transport privé avec véhicules de luxe pour vos déplacements et excursions.",
      features: [
        "Transfert aéroport",
        "Véhicules de luxe",
        "Chauffeur privé",
        "Excursions guidées",
      ],
      price: "À partir de 5,000 DA",
      image:
        "https://images.unsplash.com/photo-1671194403261-36c3bad0e213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx0dXJpc20lMjBhbmRhbHVzJTIwdHJhbnNwb3J0fGVufDB8fDB8fHww",
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      title: "WiFi Haut Débit",
      description: "Connexion gratuite dans tout l'hôtel",
    },
    {
      icon: Shield,
      title: "Sécurité 24h/24",
      description: "Surveillance et sécurité permanente",
    },
    {
      icon: Clock,
      title: "Service 24h/24",
      description: "Réception et conciergerie disponibles",
    },
    {
      icon: Headphones,
      title: "Service Multilingue",
      description: "Personnel parlant arabe, français, anglais",
    },
    {
      icon: Dumbbell,
      title: "Salle de Sport",
      description: "Équipements modernes avec vue mer",
    },
    {
      icon: Car,
      title: "Parking Sécurisé",
      description: "Parking privé gratuit pour les clients",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-slate-900 to-amber-900 overflow-hidden">
        {/* Andalusian Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 0c22.091 0 40 17.909 40 40s-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0zm0 8c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32S57.673 8 40 8zm0 8c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Services & Prestations
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">
              خدمات ومرافق استثنائية
            </p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos services d'exception inspirés de l'hospitalité
              andalouse traditionnelle, alliant raffinement et authenticité
              culturelle
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

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-3xl transform rotate-2"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />

                  {/* Price Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-xl">
                    <div className="text-stone-900 font-bold text-lg">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800 mb-2 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-6">
                    {service.arabicTitle}
                  </p>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Réserver ce service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Équipements Inclus
            </h2>
            <p className="text-xl text-stone-300">مرافق مجانية لجميع النزلاء</p>

            {/* Decorative Line */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-stone-700/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-600 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-6 h-6 text-stone-900" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {amenity.title}
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
