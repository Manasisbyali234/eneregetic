import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Products from '../components/sections/Products';
import Benefits from '../components/sections/Benefits';
import Partnerships from '../components/sections/Partnerships';
import Industries from '../components/sections/Industries';
import ClientsCarousel from '../components/sections/ClientsCarousel';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ClientsCarousel />
      <Features />
      <About />
      <WhyChooseUs />
      <Products />
      <Benefits />
      <Partnerships />
      <Industries />
    </>
  );
};

export default HomePage;
