import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Wifi,
  Car,
  Waves,
  UtensilsCrossed,
} from "lucide-react";

const Footer = () => {
  const amenities = [
    { icon: Wifi, label: "WiFi Gratuit" },
    { icon: Car, label: "Parking Privé" },
    { icon: Waves, label: "Piscine & Spa" },
    { icon: UtensilsCrossed, label: "Restaurant Gastronomique" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo image */}
              <img
                src="assets\mahroussa_logo.jpg" // Replace with your actual image path
                alt="Logo El Mahroussa"
                className="w-16 h-16 rounded-2xl shadow-xl object-cover"
              />

              {/* Brand text */}
              <div>
                <h3 className="text-3xl font-bold">El Mahroussa</h3>
                <p className="text-amber-300 font-medium">
                  Héritage & Élégance
                </p>
              </div>
            </div>

            <p className="text-stone-300 mb-8 leading-relaxed max-w-md">
              Immergez-vous dans l'art de vivre andalou au cœur de l'Algérie. Un
              havre de paix où tradition millénaire et luxe contemporain se
              rencontrent en parfaite harmonie.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-stone-300"
                >
                  <amenity.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-300">Route Côtière, Sidi Frej</p>
                  <p className="text-stone-300">16000 Alger, Algérie</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <p className="text-stone-300">+213 23 XX XX XX</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <p className="text-stone-300">contact@elmahroussa.dz</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-medium mb-4 text-amber-300">Suivez-nous</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-stone-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                "Accueil",
                "Chambres & Suites",
                "Restaurant",
                "Spa & Bien-être",
                "Événements",
                "Galerie",
                "Réservation",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-stone-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-stone-700">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 text-amber-300">
              Restez informé de nos actualités
            </h4>
            <p className="text-stone-300 mb-8">
              Recevez nos offres exclusives et découvrez les secrets d'El
              Mahroussa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-full bg-stone-700 border border-stone-600 focus:border-emerald-500 focus:outline-none text-white placeholder-stone-400"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              © 2024 El Mahroussa. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
              >
                Conditions d'utilisation
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
