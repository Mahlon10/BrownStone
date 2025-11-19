'use client';

import React from 'react';
import AboutUs from '@/components/Pages/AboutUs';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AboutUs />

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to work with us?</h2>
          <p className="text-gray-600 mb-4">Speak to an agent for personalized recommendations.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-pink-600 text-white px-5 py-2 rounded">Get in touch</Link>
            <Link href="/properties" className="border border-pink-600 text-pink-600 px-5 py-2 rounded">Browse properties</Link>
          </div>
        </div>
      </section>
    </main>
  );
}