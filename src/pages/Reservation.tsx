import React, { useState } from "react";
import {
  Calendar,
  Users,
  Shield,
  Tag,
  Search,
  CreditCard,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Reservation = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    roomType: "",
    promoCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const roomTypes = [
    {
      id: "nasride",
      name: "Chambre Nasride",
      price: "28,000 DA",
      image: "assets/chambre04.jpg",
    },
    {
      id: "almohade",
      name: "Suite Almohade",
      price: "38,000 DA",
      image: "assets/chambre01.jpg",
    },
    {
      id: "andalouse",
      name: "Suite Andalouse Royale",
      price: "45,000 DA",
      image: "assets/chambre05.jpg",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (bookingStep < 3) setBookingStep(bookingStep + 1);
  };

  const prevStep = () => {
    if (bookingStep > 1) setBookingStep(bookingStep - 1);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-slate-900 to-amber-900 overflow-hidden">
        {/* Andalusian Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Réservation
            </h1>
            <p className="text-xl text-amber-300 mb-6 font-medium">
              حجز فوري ومضمون
            </p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Réservez votre séjour dans notre havre andalou en quelques clics.
              Confirmation immédiate et meilleur prix garanti.
            </p>

            {/* Progress Indicator */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      bookingStep >= step
                        ? "bg-amber-500 text-stone-900"
                        : "bg-stone-600 text-stone-300"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        bookingStep > step ? "bg-amber-500" : "bg-stone-600"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-8 mt-4 text-sm">
              <span
                className={
                  bookingStep >= 1 ? "text-amber-300" : "text-stone-400"
                }
              >
                Dates & Chambre
              </span>
              <span
                className={
                  bookingStep >= 2 ? "text-amber-300" : "text-stone-400"
                }
              >
                Informations
              </span>
              <span
                className={
                  bookingStep >= 3 ? "text-amber-300" : "text-stone-400"
                }
              >
                Confirmation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Dates and Room Selection */}
            {bookingStep === 1 && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center font-serif">
                  Choisissez vos dates et votre chambre
                </h2>

                {/* Date Selection */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date de départ
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      <Users className="w-4 h-4 inline mr-2" />
                      Nombre d'invités
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Selection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
                    Sélectionnez votre chambre
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {roomTypes.map((room) => (
                      <div
                        key={room.id}
                        className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                          formData.roomType === room.id
                            ? "border-emerald-500 shadow-xl scale-105"
                            : "border-stone-200 hover:border-emerald-300 hover:shadow-lg"
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, roomType: room.id })
                        }
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-slate-800 mb-2">
                            {room.name}
                          </h4>
                          <p className="text-2xl font-bold text-emerald-600">
                            {room.price}
                          </p>
                          <p className="text-sm text-slate-500 mt-2">
                            par nuit
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-2" />
                    Code promotionnel (optionnel)
                  </label>
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Entrez votre code"
                    className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  onClick={nextStep}
                  disabled={
                    !formData.checkIn ||
                    !formData.checkOut ||
                    !formData.roomType
                  }
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-stone-400 disabled:to-stone-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none"
                >
                  Continuer vers les informations personnelles
                </button>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {bookingStep === 2 && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center font-serif">
                  Vos informations personnelles
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Demandes spéciales (optionnel)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Allergies alimentaires, préférences de chambre, occasions spéciales..."
                    className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 border-2 border-stone-300 text-stone-700 font-bold py-4 px-6 rounded-xl hover:bg-stone-50 transition-colors duration-300"
                  >
                    Retour
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phone
                    }
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-stone-400 disabled:to-stone-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Continuer vers la confirmation
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {bookingStep === 3 && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center font-serif">
                  Confirmation de votre réservation
                </h2>

                {/* Booking Summary */}
                <div className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
                    Récapitulatif
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-700 mb-4">
                        Détails du séjour
                      </h4>
                      <div className="space-y-2 text-slate-600">
                        <p>
                          <strong>Arrivée:</strong> {formData.checkIn}
                        </p>
                        <p>
                          <strong>Départ:</strong> {formData.checkOut}
                        </p>
                        <p>
                          <strong>Invités:</strong> {formData.guests} personne
                          {formData.guests > 1 ? "s" : ""}
                        </p>
                        <p>
                          <strong>Chambre:</strong>{" "}
                          {
                            roomTypes.find((r) => r.id === formData.roomType)
                              ?.name
                          }
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-700 mb-4">
                        Informations client
                      </h4>
                      <div className="space-y-2 text-slate-600">
                        <p>
                          <strong>Nom:</strong> {formData.firstName}{" "}
                          {formData.lastName}
                        </p>
                        <p>
                          <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                          <strong>Téléphone:</strong> {formData.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="border-t border-stone-200 mt-8 pt-8">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Prix par nuit:</span>
                      <span>
                        {
                          roomTypes.find((r) => r.id === formData.roomType)
                            ?.price
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg mt-2">
                      <span className="font-medium">Taxes et frais:</span>
                      <span>Inclus</span>
                    </div>
                    <div className="border-t border-stone-300 mt-4 pt-4 flex justify-between items-center text-2xl font-bold text-emerald-600">
                      <span>Total:</span>
                      <span>
                        {
                          roomTypes.find((r) => r.id === formData.roomType)
                            ?.price
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-xl border border-emerald-200 mb-8">
                  <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-emerald-800">
                      Paiement sécurisé
                    </div>
                    <div className="text-sm text-emerald-600">
                      Cryptage SSL 256-bit • Annulation gratuite jusqu'à 24h
                      avant l'arrivée
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 border-2 border-stone-300 text-stone-700 font-bold py-4 px-6 rounded-xl hover:bg-stone-50 transition-colors duration-300"
                  >
                    Modifier les informations
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <CreditCard className="w-5 h-5 inline mr-2" />
                    Confirmer et payer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Besoin d'aide pour votre réservation ?
            </h2>
            <p className="text-stone-300">
              Notre équipe est à votre disposition 24h/24
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-stone-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Téléphone</h3>
              <p className="text-stone-300">+213 23 XX XX XX</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-stone-300">reservation@elmahroussa.dz</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adresse</h3>
              <p className="text-stone-300">
                Route Côtière, Sidi Frej
                <br />
                16000 Alger, Algérie
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
