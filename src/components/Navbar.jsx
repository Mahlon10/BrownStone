'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/#team' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
      setExpanded(isScrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const expandedWidth = '35vw';

  return (
    <>
      {/* Logo top-left, in line with navbar (outside the sliding bar) */}
      <div className="absolute top-6 left-6 z-50 pointer-events-auto">
        <Link href="/" className="flex items-center">
            <img src="/brown.png" alt="logo" className="h-7 w-auto ml-[-4] flex items-center justify-center items-center justify-center"/>
        </Link>
      </div>

      <div className="fixed top-6 right-0 z-50 pointer-events-none">
        {/* background (always visible) navigation - stays on page background */}
        <div className="relative pointer-events-auto" style={{ height: 64 }}>
          <div className="flex items-center gap-2 pr-3" style={{ right: 0 }}>
            {/* background links (visible at all times) - no border/background */}
            <div className="flex items-center gap-2 z-10">
              {links.map((l) => {
                const isActive =
                  pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href.replace('#', '')));
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={clsx(
                      'flex items-center gap-2 px-3 py-1 text-lg font-medium whitespace-nowrap transition-colors',
                      isActive
                        ? 'border-2 rounded-full border-[#EF641C] text-white font-semibold'
                        : 'text-white/90 hover:text-[#EF641C]'
                    )}
                  >
                    <span>{l.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* sliding overlay bar that covers background navigation (slides in from right to left) */}
          <motion.nav
            aria-hidden={!expanded}
            initial={false}
            animate={{
              width: expanded ? expandedWidth : 0,
              borderTopLeftRadius: expanded ? 32 : 9999,
              borderBottomLeftRadius: expanded ? 32 : 9999,
              opacity: expanded ? 1 : 0.98,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="absolute top-0 right-0 h-16 overflow-hidden shadow-lg z-20"
            style={{
              backgroundColor: '#00486B',
              backdropFilter: 'saturate(120%) blur(6px)',
              pointerEvents: expanded ? 'auto' : 'none',
            }}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(scrolled)}
          >
            <div className="h-16 flex items-center px-4 gap-3">
              <div className="flex items-center gap-2 ml-2">
                {links.map((l) => {
                  const isActive =
                    pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href.replace('#', '')));
                  return (
                    <AnimatePresence key={l.href}>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.16 }}
                          className="flex items-center"
                        >
                          <Link
                            href={l.href}
                            className={clsx(
                              'flex items-center gap-2 px-3 py-1 text-lg font-medium transition-colors duration-200 whitespace-nowrap',
                              isActive
                                ? 'border-2 rounded-full border-[#EF641C] text-white font-semibold'
                                : 'text-white/90 hover:text-white/95'
                            )}
                          >
                            <span>{l.label}</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
}
