'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Vision', href: '/#vision' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      aria-label="Primary navigation"
      className="fixed top-6 right-0 z-50"
      style={{ width: '50vw' }} /* half width: middle -> right */
    >
      <nav
        className={clsx(
          'h-16 flex items-center px-6 gap-6 text-white shadow-lg',
          // left edge rounded fully (middle side)
          'rounded-l-full',
        )}
        style={{ backgroundColor: '#00486B', backdropFilter: 'saturate(120%) blur(6px)' }}
      >
        <div className="flex items-center gap-3 mr-auto">
          <div className="w-10 h-10 rounded-full bg-[#EF641C] flex items-center justify-center text-sm font-bold shadow">
            B
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Brownstone</div>
            <div className="text-xs" style={{ color: '#838385' }}>Construction Firm</div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href.replace('#', '')));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                    isActive ? 'bg-[#EF641C] text-white' : 'text-white/90 hover:bg-white/5'
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* simple mobile toggle */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="2" rx="1" fill="white" />
            <rect y="5" width="18" height="2" rx="1" fill="white" />
            <rect y="10" width="18" height="2" rx="1" fill="white" />
          </svg>
        </button>

        {/* mobile dropdown (anchored to the right) */}
        {open && (
          <div
            className="absolute right-0 mt-20 w-1/2 bg-[#00486B] rounded-r-lg rounded-b-lg shadow-lg py-3"
            style={{ right: 0 }}
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href} className="px-4">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-white/90 hover:bg-white/5 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
