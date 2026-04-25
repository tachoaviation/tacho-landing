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
    { 
      href: '/services', 
      label: 'Services',
      subLinks: [
        { href: '/services#leasing-support', label: 'Leasing Support' },
        { href: '/services#asset-management', label: 'Asset Management' },
        { href: '/services#technical-oversight', label: 'Technical Oversight' }
      ]
    },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="navbar-container" style={{ maxWidth: '950px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
      <nav
        className="navbar-nav"
        style={{
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
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <div key={link.href} className="relative group" style={{ padding: '16px 0' }}>
                <Link 
                  href={link.href} 
                  style={{
                    color: pathname === link.href || (link.subLinks && pathname.startsWith(link.href) && pathname.length > 2) ? '#41BEF0' : '#ffffff',
                    fontWeight: 500,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {link.label}
                  {link.subLinks && (
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[230px]" style={{ zIndex: 100, marginTop: '-8px' }}>
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '10px 0', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', marginTop: '8px', border: '1px solid #eaeaea' }}>
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            fontSize: '14px',
                            color: '#333',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F2F6F9'; e.currentTarget.style.color = '#00488C'; }}
                          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#333'; }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button (Desktop only) */}
          <button
            onClick={() => {
              if (pathname === '/contact') {
                const form = document.getElementById('contact-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              } else {
                router.push('/contact#contact-form');
              }
            }}
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
              <div key={link.href} className="flex flex-col">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link 
                    href={link.href}
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                    style={{
                      color: pathname === link.href || (link.subLinks && pathname.startsWith(link.href) && pathname.length > 2) ? '#41BEF0' : '#ffffff',
                      fontWeight: 500,
                      fontSize: '16px',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      flex: 1
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
                {link.subLinks && (
                  <div style={{ marginLeft: '16px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '16px' }}>
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          color: '#ffffff',
                          opacity: 0.9,
                          fontSize: '14.5px',
                          textDecoration: 'none',
                          fontWeight: 400
                        }}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                if (pathname === '/contact') {
                  const form = document.getElementById('contact-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  router.push('/contact#contact-form');
                }
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
