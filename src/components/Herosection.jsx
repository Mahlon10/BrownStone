'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <header
      className="w-full h-screen relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(10,10,10,0.45), rgba(10,10,10,0.45)), url("/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 style={{ color: '#EF641C' }} className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Brownstone Construction Firm
          </h1>
          <p className="mt-4 text-xl lg:text-2xl font-semibold" style={{ color: '#838385' }}>
            Redesigning Africa’s Future, <span style={{ color: '#00486B' }}>Brick by Brick.</span>
          </p>

          <p className="mt-6 max-w-xl text-sm lg:text-base" style={{ color: '#f7f7f7' }}>
            Ghana-based developer delivering sustainable, community-focused housing and master-planned neighbourhoods.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-block px-5 py-3 rounded-full font-semibold"
              style={{ backgroundColor: '#EF641C', color: '#fff' }}
            >
              About Us
            </a>
            <a
              href="#services"
              className="inline-block px-5 py-3 rounded-full font-semibold border"
              style={{ borderColor: '#00486B', color: '#00486B', background: 'transparent' }}
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <div className="bg-white/10 p-6 rounded-lg border" style={{ borderColor: '#411600' }}>
            <h3 className="text-lg font-semibold" style={{ color: '#EF641C' }}>Why Brownstone?</h3>
            <ul className="mt-3 text-sm" style={{ color: '#f0f0f0' }}>
              <li className="mt-2">Full-spectrum development — design, build, community infrastructure</li>
              <li className="mt-1">Sustainable systems: solar, EV charging, water management</li>
              <li className="mt-1">Local expertise with global standards</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
