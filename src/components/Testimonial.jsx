'use client';

import React, { useState } from 'react';

export default function Testimonial() {
    const testimonials = [
    {
      id: 1,
      name: 'Daspora Investor',
      quote: 'Working with Brownstone was seamless from start to finish. The team delivered on time and beyond expectations.',
    },
    {
      id: 2,
      name: 'Local Homebuyer',
      quote: 'Their attention to detail and commitment to building real communities—not just houses—sets them apart.',
    },
  ];

  return (
<section className="bg-gray-50 py-16" style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900">What Clients Say</h3>
            <p className="text-gray-600 mt-2">Feedback from our loyal clients.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="bg-white rounded-lg p-6 shadow">
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-medium text-gray-900">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
  );
}