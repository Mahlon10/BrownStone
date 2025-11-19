'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-3xl font-bold" style={{ color: '#411600' }}>About Us</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Brownstone Construction Firm is a Ghana-based property development and construction company committed to
          delivering high-quality, sustainable, and community-focused housing solutions. Founded in 2024, Brownstone was
          established in response to the growing demand for modern, thoughtfully designed living spaces in Ghana’s
          expanding urban and peri-urban areas.
        </p>

        <p className="mt-4 text-gray-700 max-w-3xl">
          We blend innovation with practicality—integrating schools, clinics, green spaces, EV charging and agritech
          amenities to create lasting community value.
        </p>
      </div>
    </section>
  );
}