'use client';

import React from 'react';

export default function ContactPage() {
  const COLORS = {
    primary: '#EF641C',
    deep: '#411600',
    teal: '#00486B',
    muted: '#838385',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.teal, fontFamily: 'Montserrat, sans-serif' }}>
      {/* Full-width banner */}
      <header
        className="bg-fixed w-full relative overflow-hidden"
        style={{
          height: '320px',
          backgroundImage: "url('/ft.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            CONTACT US
          </h1>

          <div className="mt-3 w-24 h-1 rounded bg-[#EF641C]" />

          <p className="mt-4 max-w-3xl text-sm md:text-base text-white/90">
            Get in touch with Brownstone Construction Firm — Redesigning Africa’s Future, Brick by Brick.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-20 py-16">
        {/* Contact Information */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-white/90">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reach Out to Us</h2>

            <p className="leading-relaxed mb-3">
              Brownstone Construction Firm
            </p>
            <p className="leading-relaxed mb-3">
              📍 Office Location: 1 Airport Square, Accra - Ghana
            </p>
            <p className="leading-relaxed mb-3">
              📞 Phone: +233 244 028 773
            </p>
            <p className="leading-relaxed mb-3">
              📧 Email: info@brownstoneltd.com
            </p>
            <p className="leading-relaxed mb-3">
              🌐 Website: www.brownstoneltd.com
            </p>
            <p className="leading-relaxed mb-3">
              📱 Instagram: @Brownstone.ltd
            </p>
            <p className="leading-relaxed mb-3">
              💼 LinkedIn: Brownstone Ltd
            </p>
          </div>

          {/* Map Embed for 1 Airport Square */}
          <aside className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Brownstone Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.637573827626!2d-0.18392438459903265!3d5.557297396040917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9e1d30767f15%3A0x7989d1df60e37c!2s1%20Airport%20Square%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700803200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </section>

        {/* Contact Form */}
        <section className="max-w-6xl mx-auto mt-12 bg-white/95 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6" style={{ color: COLORS.deep }}>
            Send Us a Message
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2"
            />
            <button
              type="submit"
              className="bg-[#EF641C] text-white font-semibold py-3 px-6 rounded-full md:col-span-2 hover:bg-[#d85a18] transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
