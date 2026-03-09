import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import MissionPage from './pages/MissionPage';
import ContactPage from './pages/ContactPage';
import KaeserPage from './pages/KaeserPage';
import ThermaxPage from './pages/ThermaxPage';
import CompressedAirPage from './pages/CompressedAirPage';
import SteamHeatPage from './pages/SteamHeatPage';
import IndustrialProductsPage from './pages/IndustrialProductsPage';
import ServicesPage from './pages/ServicesPage';
import CareerPage from './pages/CareerPage';
import { pageTransition } from './utils/animations';

function App() {
  const location = useLocation();

  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kaeser" element={<KaeserPage />} />
            <Route path="/thermax" element={<ThermaxPage />} />
            <Route path="/compressed-air" element={<CompressedAirPage />} />
            <Route path="/steam-heat" element={<SteamHeatPage />} />
            <Route path="/industrial-products" element={<IndustrialProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
