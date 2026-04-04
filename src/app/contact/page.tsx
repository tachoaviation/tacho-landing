import React from 'react';
import Image from 'next/image';
import HelpWrapper from '@/components/HelpWrapper';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F2F6F9]">

      {/* Hero Section */}
      <div 
        style={{ 
          position: 'relative',
          width: '100%',
        }}
      >
        <Image
          src="/contacthero.webp"
          alt="Contact Us"
          width={1920}
          height={800}
          priority
          sizes="100vw"
          className="w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-0 object-cover"
          style={{
            display: 'block'
          }}
        />
        {/* Overlay for better text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 32, 90, 0.4)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
        {/* Hero Content */}
        <div style={{ 
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '115px'
        }}>
          <h1 
            className="text-center"
            style={{ 
            color: '#ffffff',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}>
            Get in Touch<br />with Our Experts
          </h1>
          <p className="text-center" style={{
            color: '#ebf4f8',
            marginTop: '16px',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontWeight: 400,
            letterSpacing: '0.01em',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}>
            Reach out to discuss your aviation asset management needs.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        style={{
          width: '100%',
          padding: '80px 0',
          backgroundColor: 'transparent',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif'
        }}
      >
        <div 
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'row',
            gap: '80px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Column: Form */}
          <div style={{ flex: '1 1 500px', width: '100%' }}>
            <ContactForm />
          </div>

          {/* Right Column: Info */}
          <div className="w-full flex flex-col items-center md:items-start" style={{ flex: '1 1 400px', paddingTop: '16px' }}>
            <div className="flex flex-col items-start text-left w-auto max-w-[full]">
              <h2 style={{
                color: '#00488C',
                fontSize: '40px',
                fontWeight: 600,
                marginBottom: '32px',
                letterSpacing: '-1px'
              }}>
                Contact Tacho
              </h2>

              <div className="flex flex-col items-start" style={{ gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '1px', color: '#4A5568', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Office Hours
                  </h3>
                  <p style={{ fontSize: '16px', color: '#1f2937' }}>Monday - Friday 8:00am - 5:00pm</p>
                </div>

                <div>
                  <h3 style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '1px', color: '#4A5568', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Contact Information
                  </h3>
                  <div className="flex flex-col items-start" style={{ gap: '12px' }}>
                    <div className="flex flex-row items-center gap-3 text-gray-800">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <a href="tel:987654321" className="hover:text-[#00488C] transition-colors" style={{ fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                        Telephone - 987654321
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-3 text-gray-800">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <a href="mailto:info@tacho.com" className="hover:text-[#00488C] transition-colors" style={{ fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                        info@tacho.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '1px', color: '#4A5568', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Find us on social media
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                  <a href="#" aria-label="LinkedIn" className="hover:text-[#005582] transition-colors" style={{ color: '#0077b5', padding: '4px 0' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HelpWrapper />
    </main>
  );
}
