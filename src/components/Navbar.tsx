'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
      <nav style={{ 
        backgroundColor: '#00488C', 
        padding: '8px 24px',
        borderRadius: '15px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/tachologo.svg" 
              alt="Tacho Logo" 
              width={120} 
              height={36}
              style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
              priority
            />
          </Link>

          {/* Navigation Links - Centered (Desktop only) */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '40px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                style={{
                  color: pathname === link.href ? '#41BEF0' : '#ffffff',
                  fontWeight: 500,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us Button (Desktop only) */}
          <button
            onClick={() => router.push('/contact')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden md:block"
            style={{ 
              backgroundColor: isHovered ? '#2A9AC4' : '#41BEF0',
              padding: '8px 20px',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginLeft: '20px'
            }}
          >
            Contact Us
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center"
            style={{
              width: '32px',
              height: '32px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
            aria-label="Toggle mobile menu"
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                marginBottom: isMobileMenuOpen ? '0' : '5px'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'opacity 0.3s',
                opacity: isMobileMenuOpen ? 0 : 1,
                marginBottom: isMobileMenuOpen ? '0' : '5px'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden"
          style={{
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out, margin-top 0.3s ease-in-out',
            maxHeight: isMobileMenuOpen ? '320px' : '0',
            marginTop: isMobileMenuOpen ? '16px' : '0'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '16px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: pathname === link.href ? '#41BEF0' : '#ffffff',
                  fontWeight: 500,
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                router.push('/contact');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                backgroundColor: '#41BEF0',
                padding: '10px 20px',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '8px',
                width: '100%'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
