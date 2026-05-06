'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    number: '01',
    title: 'Value Protection',
    description:
      'Lifecycle-focused strategies to protect the most expensive components including engines and landing gear.',
    image: '/a3.webp',
    bg: '#D2F0FC',
    id: 'value-protection',
  },
  {
    number: '02',
    title: 'Lessor-Aligned Management',
    description:
      "Technical decision-making that is commercially aware and fully aligned with the lessor's interests.",
    image: '/a1.webp',
    bg: '#83B5E2',
    id: 'lessor-aligned-management',
  },
  {
    number: '03',
    title: 'Technical Oversight',
    description:
      'Precision-led monitoring of performance and limits to prevent value erosion during operations.',
    image: '/a2.webp',
    bg: '#D2F0FC',
    id: 'technical-oversight',
  },
];

const DOT_STEP = 80;

export default function StrategySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleScroll = useCallback(() => {
    if (isMobile) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const totalScroll = items.length * viewH - viewH;

      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      let idx: number;
      if (progress < 0.333) idx = 0;
      else if (progress < 0.666) idx = 1;
      else idx = 2;

      setActiveIndex(idx);
    });
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  /* ───── Mobile: simple stacked cards, no scroll lock ───── */
  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#F2F6F9',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          padding: '60px 0 72px',
        }}
      >
        {/* Background vector */}
        <Image
          src="/approachbg.webp"
          alt=""
          width={1400}
          height={800}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Content container — matches home page content width */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto', padding: '0 48px' }}>
          {/* Section title */}
          <h2
            style={{
              color: '#000000',
              fontWeight: 600,
              fontSize: '1.75rem',
              marginBottom: '32px',
              lineHeight: 1.10,
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            Our Strategic<br />Approach
          </h2>

          {/* Cards stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  backgroundColor: item.bg,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  padding: '20px',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid #545352',
                    borderRadius: '999px',
                    padding: '3px 12px',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: '#545352',
                    backgroundColor: '#FFFFFF',
                    marginBottom: '14px',
                    letterSpacing: '0.05em',
                    fontFamily: 'var(--font-geist-mono), monospace',
                  }}
                >
                  {item.number}
                </div>

                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '16px' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'contain' }} />
                </div>

                {/* Content */}
                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', marginBottom: '12px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                  {item.title}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ fontSize: '0.9rem', color: '#545352', lineHeight: 1.6, fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0 }}>
                    {item.description}
                  </p>
                  <Link href={`/approach#${item.id}`} className="hover:bg-[#2A9AC4] transition-colors" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#ffffff', backgroundColor: '#41BEF0', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Learn More 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginTop: '-1px' }}>
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ───── Desktop: scroll-locked with timeline ───── */
  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: `${items.length * 100}vh`,
        backgroundColor: '#F2F6F9',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      {/* Background vector */}
      <Image
        src="/approachbg.webp"
        alt=""
        width={1400}
        height={800}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: '100px',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            width: '100%',
            padding: '0 48px',
            margin: '0 auto',
          }}
        >
          {/* Section title */}
          <h2
            className="text-[2.2rem] md:text-[2.9rem]"
            style={{
              color: '#000000',
              fontWeight: 600,
              marginBottom: '48px',
              lineHeight: 1.10,
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            Our Strategic<br />Approach
          </h2>

          <div style={{ display: 'flex', gap: '0px', alignItems: 'flex-start' }}>

            {/* Left: timeline */}
            <div style={{ flex: '0 0 400px', position: 'relative', paddingLeft: '38px' }}>
              {/* Vertical line */}
              <div
                style={{
                  position: 'absolute',
                  left: '13px',
                  top: `${DOT_STEP / 2 - 2}px`,
                  height: `${(items.length - 1) * DOT_STEP + 4}px`,
                  width: '1px',
                  backgroundColor: '#D0D5DD',
                }}
              />

              {/* Animated dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '3px',
                  top: `${activeIndex * DOT_STEP + (DOT_STEP / 2 - 11)}px`,
                  transition: 'top 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: '2px solid #111',
                  backgroundColor: '#fff',
                  zIndex: 3,
                }}
              />

              {/* Labels — smooth opacity crossfade */}
              <div style={{ position: 'relative', height: `${items.length * DOT_STEP}px` }}>
                {items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: `${i * DOT_STEP}px`,
                      left: 0,
                      height: `${DOT_STEP}px`,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      opacity: activeIndex === i ? 1 : 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 500,
                        color: '#111',
                        lineHeight: 1.25,
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'left center',
                        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: all cards stacked, smooth crossfade + slide */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ position: 'relative', width: '670px' }}>
                {items.map((item, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div
                      key={i}
                      style={{
                        position: i === 0 ? 'relative' : 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: item.bg,
                        borderRadius: '24px',
                        overflow: 'hidden',
                        padding: '24px 28px',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(18px)',
                        transition: 'opacity 0.55s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        pointerEvents: isActive ? 'auto' : 'none',
                        willChange: 'opacity, transform',
                      }}
                    >
                      {/* Number badge */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid #545352',
                          borderRadius: '999px',
                          padding: '3px 12px',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          color: '#545352',
                          backgroundColor: '#FFFFFF',
                          marginBottom: '16px',
                          letterSpacing: '0.05em',
                          fontFamily: 'var(--font-geist-mono), monospace',
                        }}
                      >
                        {item.number}
                      </div>

                      {/* Image */}
                      <div style={{ position: 'relative', width: '100%', height: '235px', marginBottom: '20px' }}>
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'contain' }} />
                      </div>

                      <div>
                          <p style={{ fontSize: '2rem', fontWeight: 600, color: '#111', marginBottom: '12px', fontFamily: 'var(--font-poppins), Poppins, sans-serif', letterSpacing: '-0.01em' }}>
                            {item.title}
                          </p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
                            <p style={{ fontSize: '1.05rem', color: '#545352', lineHeight: 1.6, maxWidth: '380px', fontFamily: 'var(--font-poppins), Poppins, sans-serif', margin: 0 }}>
                              {item.description}
                            </p>
                            <Link href={`/approach#${item.id}`} className="hover:bg-[#2A9AC4] transition-colors" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#ffffff', backgroundColor: '#41BEF0', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>
                              Learn More 
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginTop: '-1px' }}>
                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </div>
                        </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
