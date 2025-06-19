import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Chambres from './pages/Chambres';
import Services from './pages/Services';
import Restaurant from './pages/Restaurant';
import Experience from './pages/Experience';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chambres" element={<Chambres />} />
          <Route path="/services" element={<Services />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;