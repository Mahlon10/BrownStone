'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ReadMore() {
  useEffect(() => {
    // Run ScrollReveal only on client side
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          easing: 'ease-in-out',
        });

        sr.reveal('.about-text', { origin: 'left', interval: 100 });
        sr.reveal('.about-images', { origin: 'right', interval: 100 });
      }
    })();
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="about-text space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            More Information <br /> About Travels
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts. You choose the place, and we’ll guide
            you all the way — get your spot now!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
          >
            Reserve a Place
          </a>
        </div>

        {/* Image side */}
        <div className="about-images flex justify-center items-center gap-6">
          <div className="overflow-hidden shadow-lg h-40">
            <Image
              src="/profilecut.png"
              alt="tig"
              width={255}
              height={100}
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
