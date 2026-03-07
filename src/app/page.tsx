import React from 'react';
import Navbar from '@/components/Navbar';
import HeroButton from '@/components/HeroButton';
import Image from 'next/image';
import StrategySection from '@/components/StrategySection';

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
          <div className="flex-[1.25]">
            <h2
              className="text-[1.75rem] sm:text-[2.2rem] md:text-[2.9rem]"
              style={{
              color: '#00488C',
              fontWeight: 600,
              marginBottom: '48px',
              lineHeight: 1.10,
              transform: 'scaleY(1.0)',
              transformOrigin: 'top left',
              display: 'block',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}>
              Providing Aviation<br />related services<br />worldwide
            </h2>
            <p style={{
              color: '#545352',
              fontSize: '13.44px',
              lineHeight: '17px',
              transform: 'scaleY(1.1)',
              marginBottom: '16px',
              fontWeight: 100,
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}>
              Bridging the gap between technical status and commercial value for the modern aircraft lessor. Tacho positions itself as a technical extension of the lessor, focusing on Precision Over Assumptions to mitigate risks during lease transitions and maintenance events.
            </p>
            <p style={{
              color: '#545352',
              fontSize: '13.44px',
              lineHeight: '17px',
              transform: 'scaleY(1.1)',
              fontWeight: 100,
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}>
              Bridging the gap between technical status and commercial value for the modern aircraft lessor. Tacho positions itself as a technical extension of the lessor.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-[1.4] w-full">
            <Image
              src="/aboutimg.webp"
              alt="Tacho Aviation Services"
              width={1000}
              height={700}
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

      {/* Services Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#00488C',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Decorative overlay — services1 (full width, offset from top) */}
        <Image
          src="/services1.webp"
          alt=""
          width={1400}
          height={800}
          className="top-[8%] sm:top-[10%] md:top-[12%]"
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            transform: 'translateY(10px)',
          }}
        />

        {/* Decorative overlay — services2 (bottom-right) */}
        <Image
          src="/services2.webp"
          alt=""
          width={700}
          height={700}
          className="w-[65%] sm:w-[55%] md:w-[40%]"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 'auto',
            maxWidth: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Two-column content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1400px',
            width: '100%',
            padding: '80px 64px',
            margin: '0 auto',
          }}
        >
          {/* Heading */}
          <h2
            className="text-[1.75rem] sm:text-[2.2rem] md:text-[2.9rem]"
            style={{
              color: '#ffffff',
              fontWeight: 600,
              marginBottom: '48px',
              lineHeight: 1.10,
              transform: 'scaleY(1.0)',
              transformOrigin: 'top left',
              display: 'block',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            Our Complete<br />array of services
          </h2>

          {/* Images row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14">
            {/* Card 1 */}
            <div className="flex-1 rounded-[18px] sm:rounded-[35px]" style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/s1.webp"
                alt="Leasing Support"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 22px 28px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.32rem', lineHeight: 1.2, marginBottom: '4px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Leasing Support
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.6, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '56px' }}>
                  Operating lease placement and transition
                </p>
              </div>
              <div className="bg-[#41BEF0] hover:bg-[#2A9AC4] transition-colors duration-200" style={{ position: 'absolute', bottom: '18px', right: '16px', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 rounded-[18px] sm:rounded-[35px]" style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/s2.webp"
                alt="Service 2"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 22px 28px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.32rem', lineHeight: 1.2, marginBottom: '4px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Asset Management
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.6, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '56px' }}>
                  End-to-end lifecycle management tracking
                </p>
              </div>
              <div className="bg-[#41BEF0] hover:bg-[#2A9AC4] transition-colors duration-200" style={{ position: 'absolute', bottom: '18px', right: '16px', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 rounded-[18px] sm:rounded-[35px]" style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/s3.webp"
                alt="Service 3"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 22px 28px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.32rem', lineHeight: 1.2, marginBottom: '4px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Technical Oversight
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.6, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '56px' }}>
                  Pre-purchase inspections (PPI) and audits.
                </p>
              </div>
              <div className="bg-[#41BEF0] hover:bg-[#2A9AC4] transition-colors duration-200" style={{ position: 'absolute', bottom: '18px', right: '16px', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <StrategySection />
    </main>
  );
}
