'use client';

import React from 'react';

export default function VisionValues() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-3xl font-bold" style={{ color: '#411600' }}>Vision & Values</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded">
            <h3 className="font-semibold text-lg" style={{ color: '#00486B' }}>Our Vision</h3>
            <p className="mt-2 text-gray-700">
              To redefine the future by building a legacy of prosperity — where innovation, sustainability, and human potential shape thriving communities.
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold text-lg" style={{ color: '#00486B' }}>Our Mission & Core Values</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              <li><strong>Integrity:</strong> We keep our word in quality, delivery and relationships.</li>
              <li><strong>Excellence:</strong> Precision and pride in every project.</li>
              <li><strong>Sustainability:</strong> Building with the planet and people in mind.</li>
              <li><strong>Innovation:</strong> Leveraging new technology for smarter outcomes.</li>
              <li><strong>Empowerment:</strong> Uplifting communities through opportunity.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}