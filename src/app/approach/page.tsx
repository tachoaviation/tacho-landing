import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import HelpWrapper from '@/components/HelpWrapper';

export const metadata: Metadata = {
  title: "Approach",
  description: "Learn about the approach of Tacho Aviation.",
};

export default function ApproachPage() {
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
          alt="Approach"
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
            Our Strategic<br />Approach
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
            Our Complete array of services
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '80px 48px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        
        {/* Section: Value Protection */}
        <section id="value-protection" style={{ scrollMarginTop: '120px', paddingBottom: '80px' }}>
          <p style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace' }}>
            01 - Approach
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Value Protection
          </h2>
          <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1.15rem', maxWidth: '900px', fontWeight: 300 }}>
            We focus on preserving the long-term value of high-cost assets through lifecycle-driven technical management.
          </p>
        </section>

        {/* Section: Lessor-Aligned Management */}
        <section id="lessor-aligned-management" style={{ scrollMarginTop: '120px', paddingBottom: '80px' }}>
          <p style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace' }}>
            02 - Approach
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Lessor-Aligned Management
          </h2>
          <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1.15rem', maxWidth: '900px', fontWeight: 300 }}>
            Identification of technical Our approach is built around acting as a direct extension of the lessor's technical and commercial interests and financial exposure areas .
          </p>
        </section>

        {/* Section: Technical Oversight */}
        <section id="technical-oversight" style={{ scrollMarginTop: '120px', paddingBottom: '80px' }}>
          <p style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace' }}>
            03 - Approach
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Technical Oversight
          </h2>
          <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1.15rem', maxWidth: '900px', fontWeight: 300 }}>
            We implement disciplined oversight processes to ensure aircraft performance, compliance, and condition are consistently maintained.
          </p>
        </section>

      </div>

      <HelpWrapper />
    </main>
  );
}
