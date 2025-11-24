'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleToTop = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
    }
  };

  return (
    <footer className="bg-[#00486B] text-gray-200 relative">
      <div className="container mx-auto px-6 lg:px-20 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center text-white font-bold mb-4">
            <img src="/brown.png" alt="Brownstone Logo" className="h-8" />
          </Link>
          <p className="text-sm text-gray-300">
            Redesigning Africa’s Future, Brick by Brick
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/projects" className="hover:underline">Teams</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">info@brownstoneconstruction.com</p>
          <p className="text-sm mt-1">+233 24 123 4567</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8H12v2h.07c.62-1.17 2.14-2.4 4.43-2.4 4.74 0 5.61 3.12 5.61 7.18V24h-5v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.98V24h-5V8z"/>
              </svg>
            </a>

  {/* Instagram */}
  <a href="#" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="Instagram">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.055 1.96.24 2.42.403a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.163.46.348 1.25.403 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.96-.403 2.42a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.163-1.25.348-2.42.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.96-.24-2.42-.403a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.163-.46-.348-1.25-.403-2.42-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.055-1.17.24-1.96.403-2.42a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.163 1.25-.348 2.42-.403 1.266-.058 1.65-.07 4.85-.07M12 0C8.74 0 8.332.013 7.052.072 5.78.131 4.84.308 4.042.592a6.96 6.96 0 0 0-2.54 1.66A6.96 6.96 0 0 0 .592 4.042C.308 4.84.131 5.78.072 7.052.013 8.332 0 8.74 0 12c0 3.26.013 3.668.072 4.948.059 1.272.236 2.212.52 3.01a6.96 6.96 0 0 0 1.66 2.54 6.96 6.96 0 0 0 2.54 1.66c.798.284 1.738.461 3.01.52C8.332 23.987 8.74 24 12 24s3.668-.013 4.948-.072c1.272-.059 2.212-.236 3.01-.52a6.96 6.96 0 0 0 2.54-1.66 6.96 6.96 0 0 0 1.66-2.54c.284-.798.461-1.738.52-3.01C23.987 15.668 24 15.26 24 12s-.013-3.668-.072-4.948c-.059-1.272-.236-2.212-.52-3.01a6.96 6.96 0 0 0-1.66-2.54 6.96 6.96 0 0 0-2.54-1.66c-.798-.284-1.738-.461-3.01-.52C15.668.013 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#1375a4]">
        <div className="container mx-auto px-6 lg:px-20 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <span>Brownstone Construction | © {new Date().getFullYear()} All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            <Link href="/privacy" className="hover:underline">Privacy</Link> · 
            <Link href="/terms" className="hover:underline">Terms</Link> · 
            <Link href="/sitemap" className="hover:underline">Site map</Link>
          </span>
        </div>
      </div>

      {/* To Top Button */}
      <a
        href="/"
        onClick={handleToTop}
        className="absolute right-6 bottom-8 flex items-center gap-3 bg-[#EF641C] text-white px-3 py-2 rounded-full shadow-lg hover:opacity-95"
        aria-label="To Top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm font-medium">To Top</span>
      </a>
    </footer>
  );
}
