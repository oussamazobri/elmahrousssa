import React from 'react';
import Hero from '../components/Hero';
import HotelCarousel from '../components/HotelCarousel';
import HotelSoul from '../components/HotelSoul';
import BookingWidget from '../components/BookingWidget';
import Testimonials from '../components/Testimonials';
import InstagramCarousel from '../components/InstagramCarousel';

const Accueil = () => {
  return (
    <div>
      <Hero />
      <HotelCarousel />
      <HotelSoul />
      <BookingWidget />
      <Testimonials />
      <InstagramCarousel />
    </div>
  );
};

export default Accueil;