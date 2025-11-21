'use client';

import React from 'react';

export default function FixedImage() {
  return (
    <div className="relative">
      {/* Fixed full-screen background image */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.35), rgba(10,10,10,0.35)), url('/fixed-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content block that sits over the fixed image */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20 text-white">
          <h1 style={{ color: '#EF641C' }} className="text-4xl lg:text-6xl font-extrabold">
            Brownstone Construction Firm
          </h1>
          <p className="mt-4 text-xl lg:text-2xl font-semibold" style={{ color: '#838385' }}>
            Redesigning Africa’s Future, <span style={{ color: '#00486B' }}>Brick by Brick.</span>
          </p>
        </div>
      </section>

      {/* Extra content to allow scrolling while image remains fixed */}
      <section className="bg-white">
        <div className="container mx-auto px-6 lg:px-20 py-16">
          <h2 className="text-2xl font-semibold" style={{ color: '#411600' }}>Scroll content</h2>
          <p className="mt-4 text-gray-700">
            This area scrolls while the image behind remains fixed. Add your site sections below.
          </p>

          {/* filler to demonstrate scroll */}
          <div className="mt-8 space-y-6">
            <p className="text-gray-600">...</p>
            <p className="text-gray-600">...</p>
            <p className="text-gray-600">...</p>
          </div>
        </div>
      </section>
    </div>
  );
}