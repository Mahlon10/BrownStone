'use client';

import React from 'react';
import HeroSection from '../components/Herosection';
import About from '../components/Pages/About';
import Services from '../components/Pages/Services';
import VisionValues from '../components/Pages/VisionValues';
import Contact from '../components/Pages/Contact';
import ReadMore from '../components/Pages/Read_More';
import Cert from '../components/cert';
import Service1 from '../components/Pages/Services_body';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <main>
        <ReadMore/>
        <Cert/>
        <Service1/>
        <Services />
        <VisionValues />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}