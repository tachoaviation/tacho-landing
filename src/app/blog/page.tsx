import React from 'react';
import Image from 'next/image';

export default function BlogPage() {
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
          src="/bloghero.webp"
          alt="Blog"
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
            Insights from<br />Tacho Aviation
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
            Stay updated with the latest industry trends and expert analysis.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-20">
        {/* Blank for now */}
      </div>
    </main>
  );
}
