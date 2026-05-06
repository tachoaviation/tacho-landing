import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Tacho Aviation | Technical Advisory & Asset Management",
  description: "Bridging the gap between technical status and commercial value for the modern aircraft lessor. Based globally, with expertise in inspections and lifecycle management.",
};
import HeroButton from '@/components/HeroButton';
import Image from 'next/image';
import Link from 'next/link';
import PreloadScreen from '../components/PreloadScreen';
import StrategySectionWrapper from '@/components/StrategySectionWrapper';
import HelpWrapper from '@/components/HelpWrapper';

export default function Home() {
  return (
    <main>
      <PreloadScreen />

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
          preload="metadata"
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

        {/* Hero Content - left-aligned to match About section */}
        <div style={{ 
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '260px',
        }}>
          <div
            style={{ 
              width: '100%',
              maxWidth: '1300px',
              margin: '0 auto',
              padding: '0 48px',
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
              <HeroButton href="/contact#contact-form">
                Get a quote
              </HeroButton>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
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
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Two-column content — above bg image */}
        <div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1300px',
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
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                borderRadius: '16px',
                objectFit: 'cover',
                display: 'block',
              }}
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
          sizes="100vw"
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
          sizes="(max-width: 768px) 65vw, 40vw"
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
            maxWidth: '1300px',
            width: '100%',
            padding: '80px 48px',
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
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 md:gap-9">
            {/* Card 1 */}
            <Link href="/services#leasing-support" className="group flex-1 rounded-[18px] sm:rounded-[28px] hover:scale-[1.02] transition-transform duration-300" style={{ position: 'relative', overflow: 'hidden', display: 'block' }}>
              <Image
                src="/s1.webp"
                alt="Leasing Support"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 18px 22px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.2, marginBottom: '3px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Leasing Support
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.7rem', lineHeight: 1.5, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '48px' }}>
                  Operating lease placement and transition
                </p>
              </div>
              <div className="bg-[#41BEF0] group-hover:bg-[#00488C] hover:bg-[#00488C] transition-colors duration-200" style={{ position: 'absolute', bottom: '14px', right: '14px', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services#asset-management" className="group flex-1 rounded-[18px] sm:rounded-[28px] hover:scale-[1.02] transition-transform duration-300" style={{ position: 'relative', overflow: 'hidden', display: 'block' }}>
              <Image
                src="/s2.webp"
                alt="Service 2"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 18px 22px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.2, marginBottom: '3px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Asset Management
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.7rem', lineHeight: 1.5, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '48px' }}>
                  End-to-end lifecycle management tracking
                </p>
              </div>
              <div className="bg-[#41BEF0] group-hover:bg-[#00488C] hover:bg-[#00488C] transition-colors duration-200" style={{ position: 'absolute', bottom: '14px', right: '14px', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services#technical-oversight" className="group flex-1 rounded-[18px] sm:rounded-[28px] hover:scale-[1.02] transition-transform duration-300" style={{ position: 'relative', overflow: 'hidden', display: 'block' }}>
              <Image
                src="/s3.webp"
                alt="Service 3"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                borderRadius: '16px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 18px 22px' }}>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.2, marginBottom: '3px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  Technical Oversight
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.7rem', lineHeight: 1.5, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0, paddingRight: '48px' }}>
                  Pre-purchase inspections (PPI) and audits.
                </p>
              </div>
              <div className="bg-[#41BEF0] group-hover:bg-[#00488C] hover:bg-[#00488C] transition-colors duration-200" style={{ position: 'absolute', bottom: '14px', right: '14px', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <StrategySectionWrapper />

      {/* Why Us Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {/* Background Image */}
        <Image
          src="/whybg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Decorative vector — bottom-right */}
        <Image
          src="/plane1.webp"
          alt=""
          width={300}
          height={300}
          className="hidden md:block w-[65%] sm:w-[55%] md:w-[16%]"
          sizes="(max-width: 768px) 65vw, 16vw"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 'auto',
            maxWidth: '100%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1300px',
            width: '100%',
            padding: '122px 48px 72px',
            margin: '0 auto',
          }}
        >
          <div style={{ paddingTop: '6px', marginBottom: '56px' }}>
            <h2
              className="text-[1.75rem] sm:text-[2.2rem] md:text-[2.9rem] why-section-heading"
              style={{
                color: '#ffffff',
                fontWeight: 600,
                marginBottom: '20px',
                lineHeight: 1.05,
                transform: 'scaleY(1.0)',
                transformOrigin: 'top left',
                display: 'block',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                textShadow: '0 2px 12px rgba(0,0,0,0.25)',
              }}
            >
              Why Tacho<br />Aviation?
            </h2>
            <p
              className="why-section-subtitle"
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: '0.98rem',
                lineHeight: '1.55',
                transform: 'scaleY(1.03)',
                fontWeight: 300,
                maxWidth: '470px',
                letterSpacing: '0.01em',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              }}
            >
              Independent, conflict-free, and commercially aware technical advisory for complex aviation assets.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 why-cards-grid"
            style={{
              columnGap: '70px',
              rowGap: '52px',
            }}
          >
            <div className="hidden md:block" aria-hidden="true" />

            <div className="why-card-left">
              <div style={{ display: 'flex', alignItems: 'stretch', gap: '15px', marginBottom: '26px' }}>
                <span
                  className="why-card-bar"
                  style={{
                    width: '8px',
                    height: 'auto',
                    alignSelf: 'stretch',
                    borderRadius: '999px',
                    backgroundColor: '#274AAB',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="why-card-heading"
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  We lead<br />Inspections
                </h3>
              </div>
              <p
                className="why-card-body"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: '430px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              >
                Most leasing firms outsource their inspections; we lead with them. By maintaining in-house expertise in aircraft and engine inspections. We identify potential technical liabilities long before they impact your bottom line.
              </p>
            </div>

            <div className="why-card-right">
              <div style={{ display: 'flex', alignItems: 'stretch', gap: '15px', marginBottom: '26px' }}>
                <span
                  className="why-card-bar"
                  style={{
                    width: '8px',
                    height: 'auto',
                    alignSelf: 'stretch',
                    borderRadius: '999px',
                    backgroundColor: '#274AAB',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="why-card-heading"
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  Commitment<br />to Compliance
                </h3>
              </div>
              <p
                className="why-card-body"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: '430px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              >
                Our processes are built around the highest global standards (EASA/FAA). We give investors and operators peace of mind: every record is traceable, every part is compliant, and every aircraft is 'Ready to Fly.'
              </p>
            </div>

            <div className="why-card-left">
              <div style={{ display: 'flex', alignItems: 'stretch', gap: '15px', marginBottom: '26px' }}>
                <span
                  className="why-card-bar"
                  style={{
                    width: '8px',
                    height: 'auto',
                    alignSelf: 'stretch',
                    borderRadius: '999px',
                    backgroundColor: '#274AAB',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="why-card-heading"
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  Global Hub,<br />Global Reach
                </h3>
              </div>
              <p
                className="why-card-body"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: '430px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              >
                Operating from India, at the crossroads of international aviation, we are uniquely positioned to deploy technical teams and manage transitions across Europe, Asia, and Africa. Our location enables rapid, agile responses to market needs.
              </p>
            </div>

            <div className="why-card-right">
              <div style={{ display: 'flex', alignItems: 'stretch', gap: '15px', marginBottom: '26px' }}>
                <span
                  className="why-card-bar"
                  style={{
                    width: '8px',
                    height: 'auto',
                    alignSelf: 'stretch',
                    borderRadius: '999px',
                    backgroundColor: '#274AAB',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="why-card-heading"
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  Clear<br />Definitions
                </h3>
              </div>
              <p
                className="why-card-body"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: '430px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              >
                Clearly defined scope and deliverables, disciplined execution with strict timeline control, and strict adherence to confidentiality.
              </p>
            </div>

            <div className="hidden md:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      <HelpWrapper />
    </main>
  );
}
