import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of aviation management services, encompassing Leasing Support, Asset Management, and independent Technical Oversight.",
};
import Image from 'next/image';
import TechnicalCapabilities from '@/components/TechnicalCapabilities';
import AssetManagementCapabilities from '@/components/AssetManagementCapabilities';
import LeasingSupportCapabilities from '@/components/LeasingSupportCapabilities';
import HelpWrapper from '@/components/HelpWrapper';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F2F6F9] w-full">

      {/* Hero Section */}
      <div 
        style={{ 
          position: 'relative',
          width: '100%',
        }}
      >
        <Image
          src="/servicehero.webp"
          alt="Services"
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
          backgroundColor: 'rgba(0, 32, 90, 0.3)',
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
            Our Complete<br />array of services
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
            Explore our comprehensive range of aviation management services.
          </p>
        </div>
      </div>

      {/* Main Content Area — centered container */}
      <section className="w-full bg-[#F2F6F9]" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', paddingLeft: '48px', paddingRight: '48px' }}
        >

          {/* Section 1: Leasing Support */}
          <div id="leasing-support" className="pb-12" style={{ scrollMarginTop: '150px' }}>
            <div className="flex flex-col md:flex-row items-start gap-10 w-full">
              <div className="w-full md:w-[40%] flex-shrink-0">
                <Image
                  src="/s1.webp"
                  alt="Leasing Support"
                  width={800}
                  height={560}
                  className="w-full block rounded-none"
                  style={{ height: '280px', objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1">
                <h2
                  className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]"
                  style={{
                    color: '#00488C',
                    fontWeight: 600,
                    marginBottom: '16px',
                    lineHeight: 1.10,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}>
                  Leasing Support
                </h2>
                <p style={{
                  color: '#545352',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  fontWeight: 400,
                  maxWidth: '480px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}>
                  Tacho Aviation provides structured leasing support throughout the aircraft lease lifecycle. From pre-lease evaluation to redelivery coordination, we ensure technical alignment with contractual obligations and protect asset value at every stage. Our disciplined oversight reduces exposure, safeguards compliance, and delivers smooth, predictable transitions.
                </p>
              </div>
            </div>
          </div>

            {/* Leasing Support Capabilities Grid */}
            <div style={{ marginTop: '20px' }}>
              <LeasingSupportCapabilities />
            </div>

          <div style={{ height: '120px' }} />

          {/* Section 2: Asset Management */}
          <div id="asset-management" className="py-12" style={{ scrollMarginTop: '150px' }}>
            <div className="flex flex-col md:flex-row items-start gap-10 w-full">
              <div className="flex-1 order-2 md:order-1">
                <h2
                  className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]"
                  style={{
                    color: '#00488C',
                    fontWeight: 600,
                    marginBottom: '16px',
                    lineHeight: 1.10,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}>
                  Asset Management
                </h2>
                <p style={{
                  color: '#545352',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  fontWeight: 400,
                  maxWidth: '480px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}>
                  We represent owners and investors with continuous technical and compliance oversight, preserving both airworthiness and market position. Through proactive monitoring and measured coordination with operators, we protect long-term value and ensure each aircraft remains commercially secure and professionally managed.
                </p>
              </div>
              <div className="w-full md:w-[40%] flex-shrink-0 order-1 md:order-2">
                <Image
                  src="/s2.webp"
                  alt="Asset Management"
                  width={800}
                  height={560}
                  className="w-full block rounded-none"
                  style={{ height: '280px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Asset Management Capabilities Grid */}
            <div style={{ marginTop: '20px' }}>
              <AssetManagementCapabilities />
            </div>
          </div>

          <div style={{ height: '120px' }} />

          {/* Section 3: Technical Oversight */}
          <div id="technical-oversight" className="py-12" style={{ scrollMarginTop: '150px' }}>
            <div className="flex flex-col md:flex-row items-start gap-10 w-full">
              <div className="w-full md:w-[40%] flex-shrink-0">
                <Image
                  src="/s3.webp"
                  alt="Technical Oversight"
                  width={800}
                  height={560}
                  className="w-full block rounded-none"
                  style={{ height: '280px', objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1">
                <h2
                  className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]"
                  style={{
                    color: '#00488C',
                    fontWeight: 600,
                    marginBottom: '16px',
                    lineHeight: 1.10,
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}>
                  Technical Oversight
                </h2>
                <p style={{
                  color: '#545352',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  fontWeight: 400,
                  maxWidth: '480px',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}>
                  Tacho Aviation delivers independent technical supervision on behalf of asset owners and financiers. By monitoring maintenance activities, reviewing documentation, and ensuring regulatory compliance, we provide clarity, control, and confidence throughout the aircraft's operational life.
                </p>
              </div>
            </div>

            {/* Technical Oversight Capabilities Grid */}
            <div style={{ marginTop: '20px' }}>
              <TechnicalCapabilities />
            </div>
          </div>

        </div>
      </section>
      <HelpWrapper />
    </main>
  );
}
