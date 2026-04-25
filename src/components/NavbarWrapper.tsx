'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        // Always show near the top
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down — hide
        setHidden(true);
      } else {
        // Scrolling up — reveal
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="px-4 md:px-12 fixed left-0 right-0 z-[50] top-4 md:top-[50px]"
      style={{
        transform: hidden ? 'translateY(-200%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    >
      <Navbar />
    </div>
  );
}
