import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Car, Plane } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+213 23 XX XX XX", "Service 24h/24"],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@elmahroussa.dz", "Réponse sous 2h"],
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Route Côtière, Sidi Frej", "16000 Alger, Algérie"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Réception 24h/24", "Conciergerie disponible"],
      color: "from-blue-400 to-blue-600"
    }
  ];

  const departments = [
    { value: "reservation", label: "Réservations" },
    { value: "concierge", label: "Conciergerie" },
    { value: "restaurant", label: "Restaurant" },
    { value: "spa", label: "Spa & Bien-être" },
    { value: "events", label: "Événements privés" },
    { value: "general", label: "Informations générales" }
  ];

  const directions = [
    {
      icon: Plane,
      title: "Depuis l'Aéroport Houari Boumediene",
      description: "45 minutes en voiture via l'autoroute A1",
      details: ["Distance: 35 km", "Taxi disponible", "Service navette sur demande"]
    },
    {
      icon: Car,
      title: "En Voiture depuis Alger Centre",
      description: "25 minutes via la Route Côtière",
      details: ["Distance: 18 km", "Parking gratuit", "Voiturier disponible"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-amber-900 overflow-hidden">
        {/* Andalusian Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0zm0 10c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40S72.091 10 50 10zm0 10c16.569 0 30 13.431 30 30s-13.431 30-30 30-30-13.431-30-30 13.431-30 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Contactez-nous
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">تواصل معنا</p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Notre équipe dédiée est à votre écoute pour vous accompagner dans la préparation 
              de votre séjour andalou d'exception
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

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-serif">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? 'text-slate-800 font-medium' : 'text-slate-600 text-sm'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">Envoyez-nous un message</h2>
                <p className="text-xl text-slate-600">أرسل لنا رسالة</p>
                
                {/* Decorative Line */}
                <div className="flex items-center space-x-4 mt-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
                  <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Département</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Sélectionnez un département</option>
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre demande en détail..."
                    className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 inline mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map & Directions */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">Notre Emplacement</h2>
                <p className="text-xl text-slate-600">موقعنا المتميز</p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-slate-200 to-stone-300 rounded-2xl h-80 mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-700 mb-2">El Mahroussa</h3>
                  <p className="text-slate-600">Route Côtière, Sidi Frej</p>
                  <p className="text-slate-600">16000 Alger, Algérie</p>
                </div>
              </div>

              {/* Directions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 font-serif">Comment nous rejoindre</h3>
                
                {directions.map((direction, index) => (
                  <div key={index} className="bg-gradient-to-br from-stone-50 to-emerald-50 rounded-2xl p-6 border border-stone-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <direction.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{direction.title}</h4>
                        <p className="text-slate-600 mb-4">{direction.description}</p>
                        <div className="space-y-1">
                          {direction.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              <span className="text-sm text-slate-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">Questions Fréquentes</h2>
            <p className="text-xl text-stone-300">الأسئلة الشائعة</p>
            
            {/* Decorative Line */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 border border-amber-400 transform rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Quels sont les horaires d'arrivée et de départ ?",
                answer: "Arrivée à partir de 15h00, départ avant 12h00. Nous proposons un service de bagagerie gratuit."
              },
              {
                question: "L'hôtel dispose-t-il d'un parking ?",
                answer: "Oui, nous offrons un parking privé sécurisé gratuit avec service voiturier."
              },
              {
                question: "Acceptez-vous les animaux de compagnie ?",
                answer: "Les animaux de compagnie sont acceptés sur demande avec un supplément de 2,000 DA par nuit."
              },
              {
                question: "Proposez-vous des transferts aéroport ?",
                answer: "Oui, nous proposons un service de navette privée sur réservation (tarif : 3,500 DA)."
              },
              {
                question: "Le WiFi est-il gratuit ?",
                answer: "Oui, le WiFi haut débit est gratuit dans tout l'établissement."
              },
              {
                question: "Peut-on annuler une réservation ?",
                answer: "Annulation gratuite jusqu'à 24h avant l'arrivée. Conditions spéciales pour les groupes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-stone-700/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-600">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                    <p className="text-stone-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;