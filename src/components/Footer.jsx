'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6" style={{ background: '#411600', color: '#fff' }}>
      <div className="container mx-auto px-8 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <div>
          <strong>Brownstone Construction Firm</strong>
          <div className="text-sm">© {new Date().getFullYear()} Brownstone. All rights reserved.</div>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <a href="https://www.instagram.com/Brownstone.ltd" target="_blank" rel="noreferrer" className="mr-4">Instagram</a>
          <a href="https://www.linkedin.com/company/brownstone-construction-firm" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}