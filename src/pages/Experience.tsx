import React from "react";
import {
  Music,
  Palette,
  Mountain,
  Waves,
  Camera,
  Users,
  Star,
  Calendar,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Music,
      title: "Soirées Musicales Andalouses",
      arabicTitle: "أمسيات موسيقية أندلسية",
      description:
        "Plongez dans l'univers musical d'Al-Andalus avec nos concerts de oud, qanun et chants traditionnels dans le patio principal.",
      duration: "2h30",
      price: "2,500 DA",
      schedule: "Vendredi & Samedi 20h30",
      image:
        "https://plus.unsplash.com/premium_photo-1681053902031-31c68a2aa9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljcXVlJTIwYW5kYWx1c3xlbnwwfHwwfHx8MA%3D%3D",
      highlights: [
        "Musiciens professionnels",
        "Instruments authentiques",
        "Thé à la menthe inclus",
        "Ambiance intimiste",
      ],
    },
    {
      icon: Palette,
      title: "Ateliers d'Artisanat Traditionnel",
      arabicTitle: "ورش الحرف التقليدية",
      description:
        "Initiez-vous aux arts décoratifs andalous : calligraphie arabe, peinture sur céramique et création de zelliges.",
      duration: "3h",
      price: "3,200 DA",
      schedule: "Mercredi & Dimanche 14h00",
      image:
        "https://plus.unsplash.com/premium_photo-1677702162842-b4a4b3c47a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEF0ZWxpZXJzJTIwZCdBcnRpc2FuYXQlMjBUcmFkaXRpb25uZWx8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Maîtres artisans",
        "Matériaux authentiques",
        "Création personnalisée",
        "Certificat d'authenticité",
      ],
    },
    {
      icon: Mountain,
      title: "Excursions Culturelles",
      arabicTitle: "رحلات ثقافية",
      description:
        "Découvrez les trésors historiques d'Alger : Casbah, Palais des Raïs, et sites archéologiques andalous.",
      duration: "Journée complète",
      price: "8,500 DA",
      schedule: "Mardi, Jeudi & Samedi 9h00",
      image:
        "https://images.unsplash.com/photo-1713632041206-b29547fea23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEV4Y3Vyc2lvbnMlMjBDdWx0dXJlbGxlcyUyMGNhc2JhaHxlbnwwfHwwfHx8MA%3D%3D",
      highlights: [
        "Guide historien",
        "Transport privé",
        "Déjeuner traditionnel",
        "Entrées incluses",
      ],
    },
    {
      icon: Waves,
      title: "Croisière Méditerranéenne",
      arabicTitle: "رحلة بحرية متوسطية",
      description:
        "Naviguez le long de la côte algéroise à bord d'un yacht traditionnel avec dégustation de spécialités marines.",
      duration: "4h",
      price: "6,800 DA",
      schedule: "Tous les jours 15h00",
      image:
        "https://plus.unsplash.com/premium_photo-1677093726619-8cf03e37a6af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q3JvaXNpJUMzJUE4cmUlMjBNJUMzJUE5ZGl0ZXJyYW4lQzMlQTllbm5lfGVufDB8fDB8fHww",
      highlights: [
        "Yacht privatisé",
        "Capitaine expérimenté",
        "Collations marines",
        "Coucher de soleil",
      ],
    },
  ];

  const culturalPrograms = [
    {
      title: "Semaine du Patrimoine Andalou",
      date: "15-22 Mars 2024",
      description:
        "Festival culturel célébrant l'héritage andalou avec expositions, concerts et conférences.",
      activities: [
        "Expositions d'art",
        "Concerts quotidiens",
        "Conférences historiques",
        "Dégustations culinaires",
      ],
    },
    {
      title: "Festival de Calligraphie Arabe",
      date: "10-17 Mai 2024",
      description:
        "Rencontres avec les maîtres calligraphes et ateliers d'initiation à cet art millénaire.",
      activities: [
        "Démonstrations live",
        "Ateliers pratiques",
        "Exposition permanente",
        "Concours amateur",
      ],
    },
    {
      title: "Nuits Ramadan Authentiques",
      date: "Mars-Avril 2024",
      description:
        "Célébrez le mois sacré avec des soirées traditionnelles, ftour communautaire et récitations coraniques.",
      activities: [
        "Ftour traditionnel",
        "Récitations coraniques",
        "Musique spirituelle",
        "Décoration festive",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah karmi",
      experience: "Soirée Musicale Andalouse",
      rating: 5,
      comment:
        "Une soirée magique qui nous a transportés dans l'Andalousie médiévale. Les musiciens étaient exceptionnels !",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: "Ahmed Fateh",
      experience: "Atelier de Calligraphie",
      rating: 5,
      comment:
        "J'ai découvert la beauté de la calligraphie arabe avec un maître passionné. Une expérience enrichissante !",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-slate-900 to-emerald-900 overflow-hidden">
        {/* Andalusian Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M60 0c33.137 0 60 26.863 60 60s-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0zm0 12c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48S86.51 12 60 12zm0 12c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Expériences Culturelles
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">
              تجارب ثقافية أصيلة
            </p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Immergez-vous dans la richesse culturelle andalouse à travers des
              expériences authentiques qui réveilleront tous vos sens
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-purple-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experiences */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {experiences.map((experience, index) => (
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-amber-400/20 rounded-3xl transform rotate-2"></div>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />

                  {/* Info Badges */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                    {experience.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                    {experience.price}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {experience.schedule}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800 mb-2 font-serif">
                    {experience.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-6">
                    {experience.arabicTitle}
                  </p>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Réserver cette expérience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Programmes Culturels Saisonniers
            </h2>
            <p className="text-xl text-stone-300">برامج ثقافية موسمية</p>

            {/* Decorative Line */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {culturalPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-600 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                    {program.title}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold px-4 py-2 rounded-full text-sm">
                    {program.date}
                  </div>
                </div>

                <p className="text-stone-300 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-stone-300 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">
              Témoignages d'Expériences
            </h2>
            <p className="text-xl text-slate-600">شهادات الضيوف</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-300 mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {testimonial.experience}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Réservez Votre Expérience Culturelle
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Plongez dans l'authenticité andalouse et créez des souvenirs
            inoubliables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-stone-50 transition-colors duration-300 shadow-lg">
              Voir toutes les expériences
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg">
              Contactez notre conciergerie
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
