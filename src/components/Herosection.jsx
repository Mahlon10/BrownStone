'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <header
      className="w-full h-screen relative flex items-center"
      style={{
        backgroundImage: 'url("/bkg8.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 mb-30 mr-25">
          <h1 style={{ color: '#EF641C' }} className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Brownstone Construction Firm
          </h1>
          <p className="mt-4 text-xl lg:text-2xl text-white font-semibold">
            Redesigning Africa’s Future, Brick by Brick.
          </p>
          <div className="absolute bg-white/10 p-6 rounded-lg border mt-15" style={{ borderColor: '#838385' }}>
            <h3 className="text-lg font-semibold" style={{ color: '#EF641C' }}>Why Brownstone?</h3>
            <ul className="mt-3 text-sm" style={{ color: '#f0f0f0' }}>
              <li className="mt-2">Full-spectrum development: Design & build community infrastructure</li>
              <li className="mt-1">Sustainable systems: Solar, EV charging, water management</li>
              <li className="mt-1">Local expertise with global standards</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
