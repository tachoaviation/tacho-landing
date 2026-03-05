import React from 'react';
import Navbar from '@/components/Navbar';
import HeroButton from '@/components/HeroButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Fixed Floating Navbar */}
      <div
        className="px-4 sm:px-6 md:px-12 lg:px-12"
        style={{ 
          position: 'fixed',
          top: '50px',
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <div 
        style={{ 
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/heroimg.png"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Hero Content - Positioned lower, aligned with navbar */}
        <div style={{ 
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '260px'
        }}>
          <div
            className="lg:-translate-x-20"
            style={{ 
              width: '100%',
              maxWidth: '950px',
              paddingLeft: '24px',
              paddingRight: '24px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            <h1 style={{ 
              color: '#ffffff',
              fontSize: '3.25rem',
              fontWeight: 600,
              marginBottom: '20px',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              fontFamily: 'inherit'
            }}>
              Managing Assets<br />for you
            </h1>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              marginBottom: '32px',
              lineHeight: 1.7,
              maxWidth: '400px',
              fontFamily: 'inherit'
            }}>
              Let us handle the logistics, so you can focus on<br className="hidden lg:block" /> growing your business.
            </p>
            <div>
              <HeroButton href="/contact">
                Get a quote
              </HeroButton>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#F2F6F9',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Vector Image */}
        <Image
          src="/aboutvector.webp"
          alt=""
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
          priority
        />

        {/* Two-column content — above bg image */}
        <div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1100px',
            width: '100%',
            padding: '80px 48px',
            margin: '0 auto',
          }}
        >
          {/* Left: Text */}
          <div className="flex-1">
            <h2 style={{
              color: '#00488C',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '28px',
              lineHeight: 1.15,
            }}>
              Providing Aviation<br />related services<br />worldwide
            </h2>
            <p style={{
              color: '#555555',
              fontSize: '0.875rem',
              lineHeight: 1.85,
              marginBottom: '20px',
            }}>
              Bridging the gap between technical status and commercial value for the modern aircraft lessor. Tacho positions itself as a technical extension of the lessor, focusing on Precision Over Assumptions to mitigate risks during lease transitions and maintenance events.
            </p>
            <p style={{
              color: '#555555',
              fontSize: '0.875rem',
              lineHeight: 1.85,
            }}>
              Bridging the gap between technical status and commercial value for the modern aircraft lessor. Tacho positions itself as a technical extension of the lessor.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full">
            <Image
              src="/aboutimg.webp"
              alt="Tacho Aviation Services"
              width={600}
              height={420}
              className="w-full h-auto"
              style={{
                borderRadius: '16px',
                objectFit: 'cover',
                display: 'block',
              }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
