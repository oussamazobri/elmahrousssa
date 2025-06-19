import React, { useState } from 'react';
import { Calendar, Users, Shield, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [promoCode, setPromoCode] = useState('');

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 relative overflow-hidden">
      {/* Andalusian Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M60 0l60 60-60 60L0 60 60 0zm0 20L20 60l40 40 40-40L60 20zm0 20l20 20-20 20-20-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Horseshoe Arches */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <div className="w-20 h-24 border-2 border-amber-300 rounded-t-full"></div>
      </div>
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <div className="w-20 h-24 border-2 border-emerald-300 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Andalusian Styling */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 rounded-full px-8 py-3 mb-8 shadow-lg">
              <span className="text-stone-900 font-bold text-sm">✦ RÉSERVATION IMMÉDIATE ✦</span>
            </div>
            
            {/* Decorative Arch */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-20 border-2 border-amber-400 rounded-t-full relative">
                <div className="absolute inset-2 border border-amber-400 rounded-t-full"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Votre séjour de rêve vous attend
            </h2>
            <p className="text-xl text-amber-300 mb-6 font-medium">إقامة أحلامك في انتظارك</p>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Réservez dès maintenant et profitez de notre service personnalisé exceptionnel 
              dans l'authenticité andalouse
            </p>
          </div>

          {/* Booking Widget with Enhanced Design */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-2 border-amber-200 rounded-br-full opacity-30"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-2 border-emerald-200 rounded-bl-full opacity-30"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Check-in */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  <Calendar className="w-4 h-4 inline mr-2 text-emerald-600" />
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors hover:border-emerald-300"
                />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  <Calendar className="w-4 h-4 inline mr-2 text-emerald-600" />
                  Date de départ
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors hover:border-emerald-300"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  <Users className="w-4 h-4 inline mr-2 text-emerald-600" />
                  Nombre d'invités
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white hover:border-emerald-300"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'personne' : 'personnes'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 opacity-0">
                  Rechercher
                </label>
                <Link 
                  to="/reservation"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Search className="w-5 h-5 inline mr-2" />
                  Rechercher
                </Link>
              </div>
            </div>

            {/* Additional Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Promo Code */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  <Tag className="w-4 h-4 inline mr-2 text-amber-600" />
                  Code promotionnel (optionnel)
                </label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Entrez votre code"
                  className="w-full p-4 border-2 border-stone-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors hover:border-amber-300"
                />
              </div>

              {/* Security Info */}
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl border border-emerald-200">
                <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-emerald-800">Paiement sécurisé</div>
                  <div className="text-sm text-emerald-600">Cryptage SSL 256-bit • Annulation gratuite</div>
                </div>
              </div>
            </div>

            {/* Final Booking Button */}
            <div className="text-center">
              <Link 
                to="/reservation"
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-900 font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
                ✦ Réserver maintenant ✦
              </Link>
              <p className="text-sm text-slate-500 mt-4">
                Meilleur prix garanti • Confirmation immédiate • Service conciergerie 24h/24
              </p>
            </div>

            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;