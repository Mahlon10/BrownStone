'use client';

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16" style={{ backgroundColor: '#00486B', color: '#fff' }}>
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 max-w-2xl">
          Brownstone Construction Firm
          <br /> Office Location: 1 Airport Square, Accra - Ghana
          <br /> Phone: <a href="tel:+233244028773" style={{ color: '#EF641C' }}>+233 244 028 773</a>
          <br /> Email: <a href="mailto:info@brownstoneltd.com" style={{ color: '#EF641C' }}>info@brownstoneltd.com</a>
        </p>

        <div className="mt-6">
          <a href="https://www.brownstoneltd.com" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded" style={{ background: '#EF641C', color: '#fff' }}>
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}