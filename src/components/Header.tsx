import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Chambres", path: "/chambres" },
    { name: "Services", path: "/services" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Expérience", path: "/experience" },
    { name: "Réservation", path: "/reservation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-50/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Andalusian Border Pattern */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-emerald-600 to-amber-600 opacity-80"></div>

      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Local Image */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="assets\mahroussa_logo.jpg" // Replace with your actual image path
                alt="El Mahroussa Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to the original Andalusian design if image fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback Andalusian Design (hidden by default) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center"
                style={{ display: "none" }}
              >
                <div className="relative">
                  <div className="w-10 h-10 border-2 border-stone-50 rounded-full relative">
                    <div className="absolute inset-1 border border-stone-50 rounded-full"></div>
                    <div className="absolute top-2 left-2 right-2 h-3 border-t border-stone-50 rounded-t-full"></div>
                  </div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 border border-stone-50 transform rotate-45"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border border-stone-50 transform rotate-45"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 font-serif">
                El Mahroussa
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group px-2 py-1 ${
                  location.pathname === item.path
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-700"
                }`}
              >
                {item.name}
                {/* Andalusian Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {/* Decorative Dots */}
                {location.pathname === item.path && (
                  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with Andalusian Design */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-stone-50/95 backdrop-blur-md shadow-lg border-t border-amber-200">
            {/* Geometric Pattern Border */}
            <div className="h-2 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`block py-3 font-medium transition-colors duration-300 border-b border-stone-200 last:border-b-0 relative ${
                    location.pathname === item.path
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-stone-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {location.pathname === item.path && (
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    )}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
