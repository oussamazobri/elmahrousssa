import React from "react";
import { ChefHat, Clock, Star, Utensils, Wine, Coffee } from "lucide-react";

const Restaurant = () => {
  const menuCategories = [
    {
      name: "Entrées Andalouses",
      arabicName: "مقبلات أندلسية",
      icon: Utensils,
      dishes: [
        {
          name: "Briouates aux crevettes et coriandre",
          price: "1,800 DA",
          description: "Feuilletés croustillants aux crevettes fraîches",
        },
        {
          name: "Salade de poulpe à l'andalouse",
          price: "2,200 DA",
          description: "Poulpe grillé, olives et huile d'olive vierge",
        },
        {
          name: "Mezze royal El Mahroussa",
          price: "3,500 DA",
          description: "Sélection de spécialités méditerranéennes",
        },
      ],
    },
    {
      name: "Plats Principaux",
      arabicName: "الأطباق الرئيسية",
      icon: ChefHat,
      dishes: [
        {
          name: "Tajine d'agneau aux pruneaux",
          price: "4,200 DA",
          description: "Agneau fondant mijoté aux épices et fruits secs",
        },
        {
          name: "Couscous royal aux sept légumes",
          price: "3,800 DA",
          description:
            "Couscous traditionnel avec viandes et légumes de saison",
        },
        {
          name: "Poisson grillé sauce chermoula",
          price: "4,500 DA",
          description: "Poisson du jour grillé avec sauce aux herbes fraîches",
        },
      ],
    },
    {
      name: "Desserts & Pâtisseries",
      arabicName: "حلويات ومعجنات",
      icon: Coffee,
      dishes: [
        {
          name: "Baklava aux pistaches",
          price: "1,200 DA",
          description: "Pâtisserie feuilletée au miel et pistaches",
        },
        {
          name: "Mahalabia à l'eau de rose",
          price: "900 DA",
          description: "Crème délicate parfumée à l'eau de rose",
        },
        {
          name: "Assortiment de pâtisseries orientales",
          price: "2,500 DA",
          description: "Sélection de nos meilleures créations sucrées",
        },
      ],
    },
  ];

  const chefs = [
    {
      name: "Chef Karim Benali",
      title: "Chef Exécutif",
      specialty: "Cuisine Andalouse Moderne",
      image:
        "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      experience: "15 ans d'expérience",
      description:
        "Formé dans les plus grands restaurants de Cordoue et Séville, le Chef Karim revisite la cuisine andalouse avec créativité.",
    },
    {
      name: "Chef Fatima Zahra",
      title: "Chef Pâtissière",
      specialty: "Pâtisseries Orientales",
      image:
        "https://plus.unsplash.com/premium_photo-1661598683387-b3029e0234b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNoZWYlMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
      experience: "12 ans d'expérience",
      description:
        "Maître dans l'art des pâtisseries traditionnelles, elle perpétue les recettes ancestrales avec une touche moderne.",
    },
  ];

  const restaurantSpaces = [
    {
      name: "Restaurant Principal",
      capacity: "80 couverts",
      ambiance: "Salle voûtée avec arcs mauresque",
      image:
        "https://images.unsplash.com/photo-1711273335316-fb461797a1fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Terrasse Andalouse",
      capacity: "45 couverts",
      ambiance: "Vue panoramique sur la Méditerranée",
      image:
        "https://images.unsplash.com/photo-1634156595455-1223b3e4a9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxUZXJyYXNzZSUyMEFuZGFsb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Salon Privé Nasride",
      capacity: "12 couverts",
      ambiance: "Intimité pour événements privés",
      image:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-slate-900 to-emerald-900 overflow-hidden">
        {/* Andalusian Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0zm0 20L20 50l30 30 30-30L50 20zm0 20l10 10-10 10-10-10L50 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Restaurant Andalou
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">
              مطعم أندلسي فاخر
            </p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Savourez l'art culinaire andalou dans un cadre somptueux, où
              chaque plat raconte l'histoire des saveurs méditerranéennes
            </p>

            {/* Rating */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-white font-medium ml-2">
                Restaurant 5 Étoiles
              </span>
            </div>

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

      {/* Restaurant Spaces */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">
              Nos Espaces Gastronomiques
            </h2>
            <p className="text-xl text-slate-600">أماكن تناول الطعام الفاخرة</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {restaurantSpaces.map((space, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                    {space.capacity}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">
                    {space.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {space.ambiance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">
              Notre Carte Andalouse
            </h2>
            <p className="text-xl text-slate-600">قائمة طعام أندلسية أصيلة</p>

            {/* Decorative Line */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-50 to-emerald-50 rounded-3xl p-12"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-slate-800 font-serif">
                      {category.name}
                    </h3>
                    <p className="text-emerald-600 font-medium">
                      {category.arabicName}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.dishes.map((dish, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-slate-800 flex-1">
                          {dish.name}
                        </h4>
                        <span className="text-2xl font-bold text-emerald-600 ml-4">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Nos Chefs d'Exception
            </h2>
            <p className="text-xl text-stone-300">طهاة متميزون</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-600 text-center"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-amber-400"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {chef.name}
                </h3>
                <p className="text-amber-400 font-medium mb-2">{chef.title}</p>
                <p className="text-emerald-400 mb-4">{chef.specialty}</p>
                <p className="text-stone-300 mb-4">{chef.experience}</p>
                <p className="text-stone-300 leading-relaxed">
                  {chef.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Reservations */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-emerald-600 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-800 font-serif">
                    Horaires d'Ouverture
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-slate-600">Petit-déjeuner</span>
                    <span className="font-medium text-slate-800">
                      07h00 - 10h30
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-slate-600">Déjeuner</span>
                    <span className="font-medium text-slate-800">
                      12h00 - 15h00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-slate-600">Dîner</span>
                    <span className="font-medium text-slate-800">
                      19h00 - 23h00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Service continu</span>
                    <span className="font-medium text-emerald-600">
                      Terrasse & Salon de thé
                    </span>
                  </div>
                </div>
              </div>

              {/* Reservations */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-serif">
                  Réservation de Table
                </h3>
                <p className="mb-6 leading-relaxed">
                  Réservez votre table pour une expérience culinaire inoubliable
                  dans notre restaurant andalou.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Réservation recommandée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Menu dégustation sur demande</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Événements privés possibles</span>
                  </div>
                </div>
                <button className="w-full bg-white text-emerald-600 font-bold py-4 px-6 rounded-xl hover:bg-stone-50 transition-colors duration-300">
                  Réserver une table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
