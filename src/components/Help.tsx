'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Help() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (pathname === '/contact') {
      e.preventDefault();
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '52vh',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        src="/helpbg.webp"
        alt=""
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(23, 46, 78, 0.45)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '64px 48px',
        }}
      >
        <div style={{ maxWidth: '580px' }}>
          <h2
            style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 3.4vw, 3.08rem)',
              lineHeight: 1.06,
              marginBottom: '16px',
              textShadow: '0 2px 12px rgba(0,0,0,0.2)',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            We&apos;re here to help
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: 'clamp(1.04rem, 1.2vw, 1.3rem)',
              fontWeight: 200,
              lineHeight: 1.45,
              maxWidth: '640px',
              marginBottom: '28px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            we&apos;re ready to take your call and begin your aviation asset management, valuation, and more . Reach out today to get started
          </p>

          <Link
            href="/contact#contact-form"
            onClick={handleQuoteClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: 'inline-block',
              backgroundColor: isHovered ? '#003A72' : '#00488C',
              padding: '10px 32px',
              borderRadius: '12px',
              color: '#ffffff',
              fontWeight: 400,
              fontSize: '13px',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              transition: 'background-color 0.2s',
              cursor: 'pointer',
              fontFamily: 'var(--font-geist-mono), monospace',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                transform: 'scaleY(1.12)',
                transformOrigin: 'center',
              }}
            >
              Get a quote
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
