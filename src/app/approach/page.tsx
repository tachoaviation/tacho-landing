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
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '80px 48px', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>

        {/* Section: Value Protection */}
        <section id="value-protection" className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <div className="w-full lg:w-[46%]">
            <p style={{ color: '#00488C', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace', textTransform: 'uppercase' }}>
              01 - Approach
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              Value Protection
            </h2>
            <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1rem', fontWeight: 400 }}>
              We focus on preserving the long-term value of high-cost assets through lifecycle-driven technical management.
            </p>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '24px' }}>Processes & Methodologies</h3>
              <ul style={{ position: 'relative', listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '24px', margin: 0 }}>
                <div style={{ position: 'absolute', left: '5px', top: '8px', bottom: '12px', width: '1.5px', backgroundColor: '#00488C' }} />
                {[
                  "Lifecycle analysis of engines, landing gear, and critical components",
                  "Monitoring of utilization, cycles, and performance trends",
                  "Review of maintenance reserves and cost exposure",
                  "Evaluation of shop visits, repairs, and overhaul scope",
                  "Verification of compliance with lease return conditions",
                  "Identification and management of long-term technical risks",
                  "Documentation and tracking of component status and history",
                  "Strategic advisory on maintenance planning and asset positioning"
                ].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '32px', fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.5' }}>
                    <div style={{ position: 'absolute', left: '0', top: '5px', width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#00488C' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '40px', backgroundColor: '#D2F0FC', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 style={{ color: '#00488C', fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px' }}>Outcome</h4>
                <p style={{ color: '#111', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  Optimized asset value with reduced financial exposure across the lifecycle.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#D2F0FC] rounded-[24px] relative min-h-[400px] lg:min-h-0">
            <Image src="/a3.webp" alt="Value Protection" fill style={{ objectFit: 'contain', padding: '60px' }} />
          </div>
        </section>

        {/* Section: Lessor-Aligned Management */}
        <section id="lessor-aligned-management" className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-12 lg:gap-16" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <div className="w-full lg:w-[46%]">
            <p style={{ color: '#00488C', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace', textTransform: 'uppercase' }}>
              02 - Approach
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              Lessor-Aligned Management
            </h2>
            <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1rem', fontWeight: 400 }}>
              Our approach is built around acting as a direct extension of the lessor's technical and commercial interests and financial exposure areas .
            </p>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '24px' }}>Processes & Methodologies</h3>
              <ul style={{ position: 'relative', listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '24px', margin: 0 }}>
                <div style={{ position: 'absolute', left: '5px', top: '8px', bottom: '12px', width: '1.5px', backgroundColor: '#00488C' }} />
                {[
                  "Initial alignment with lease terms, return conditions, and asset strategy",
                  "Detailed review of aircraft status against lease obligations",
                  "Identification of technical and financial exposure areas",
                  "Continuous coordination with lessor stakeholders and asset managers",
                  "Structured decision support based on factual technical findings",
                  "Regular reporting aligned with commercial impact and risk visibility",
                  "Ongoing monitoring to ensure lessee compliance throughout the lease"
                ].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '32px', fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.5' }}>
                    <div style={{ position: 'absolute', left: '0', top: '5px', width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#00488C' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '40px', backgroundColor: '#D2F0FC', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 style={{ color: '#00488C', fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px' }}>Outcome</h4>
                <p style={{ color: '#111', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  Our approach is built around acting as a direct extension of the lessor's technical and commercial interests.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#D2F0FC] rounded-[24px] relative min-h-[400px] lg:min-h-0">
            <Image src="/a1.webp" alt="Lessor-Aligned Management" fill style={{ objectFit: 'contain', padding: '60px' }} />
          </div>
        </section>

        {/* Section: Technical Oversight */}
        <section id="technical-oversight" className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <div className="w-full lg:w-[46%]">
            <p style={{ color: '#00488C', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), monospace', textTransform: 'uppercase' }}>
              03 - Approach
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: '#111', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              Technical Oversight
            </h2>
            <p style={{ color: '#545352', lineHeight: '1.7', fontSize: '1rem', fontWeight: 400 }}>
              We implement disciplined oversight processes to ensure aircraft performance, compliance, and condition are consistently maintained.
            </p>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#00488C', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '24px' }}>Processes & Methodologies</h3>
              <ul style={{ position: 'relative', listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '24px', margin: 0 }}>
                <div style={{ position: 'absolute', left: '5px', top: '8px', bottom: '12px', width: '1.5px', backgroundColor: '#00488C' }} />
                {[
                  "Baseline assessment of aircraft technical status and documentation",
                  "Continuous monitoring of maintenance activities and program adherence",
                  "Review of operational performance and limitations",
                  "Periodic inspections (physical and records-based)",
                  "Identification of deviations, risks, or non-compliance",
                  "Coordination with operators, MROs, and relevant stakeholders",
                  "Escalation and tracking of findings through structured reporting",
                  "Verification of corrective actions and closure of open items"
                ].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '32px', fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.5' }}>
                    <div style={{ position: 'absolute', left: '0', top: '5px', width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#00488C' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '40px', backgroundColor: '#D2F0FC', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="#00488C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 style={{ color: '#00488C', fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px' }}>Outcome</h4>
                <p style={{ color: '#111', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  Sustained technical integrity and minimized value erosion during operations.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] bg-[#D2F0FC] rounded-[24px] relative min-h-[400px] lg:min-h-0">
            <Image src="/a2.webp" alt="Technical Oversight" fill style={{ objectFit: 'contain', padding: '60px' }} />
          </div>
        </section>

      </div>

      <HelpWrapper />
    </main>
  );
}
