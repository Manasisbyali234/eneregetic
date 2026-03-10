import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import About from '../components/sections/About';
import Values from '../components/sections/Values';
import OurStory from '../components/sections/OurStory';
import WhatWeOffer from '../components/sections/WhatWeOffer';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Products from '../components/sections/Products';
import Benefits from '../components/sections/Benefits';
import Partnerships from '../components/sections/Partnerships';
import Industries from '../components/sections/Industries';
import ClientsCarousel from '../components/sections/ClientsCarousel';
import TeamCulture from '../components/sections/TeamCulture';
import ConnectWithUs from '../components/sections/ConnectWithUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ClientsCarousel />
      <Features />
      <About />
      <Values />
      <OurStory />
      <TeamCulture />
      <WhatWeOffer />
      <WhyChooseUs />
      <Products />
      <Benefits />
      <Partnerships />
      <ConnectWithUs />
      <Industries />
    </>
  );
};

export default HomePage;
