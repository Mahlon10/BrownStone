'use client';

import React from 'react';

const services = [
  { title: 'Residential Construction', desc: 'Design and build high-quality homes and developments.' },
  { title: 'Master-Planned Communities', desc: 'Holistic neighbourhoods with schools, clinics, retail and parks.' },
  { title: 'Sustainable & Smart Infrastructure', desc: 'Solar, EV charging, water management and agri-tech zones.' },
  { title: 'Real Estate Investment Development', desc: 'Build-to-sell or build-to-rent projects with investor support.' },
  { title: 'Project Management & Consultancy', desc: 'End-to-end planning, budgeting and delivery services.' },
];

export default function Services() {
  return (
    <section id="services" className="py-16" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-3xl font-bold" style={{ color: '#00486B' }}>Our Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-lg shadow-sm" style={{ borderLeft: `4px solid ${'#EF641C'}`, background: '#fff' }}>
              <h3 className="font-semibold text-xl" style={{ color: '#411600' }}>{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}