import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    title: 'About Us',
    items: [
      { label: 'partners', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Leasing Support', href: '/services#leasing-support' },
      { label: 'Asset Management', href: '/services#asset-management' },
      { label: 'Technical Oversight', href: '/services#technical-oversight' },
    ],
  },
  {
    title: 'Blog',
    items: [
      { label: 'Article 1', href: '#' },
      { label: 'Article 2', href: '#' },
      { label: 'Article 3', href: '#' },
      { label: 'Article 4', href: '#' },
      { label: 'Article 5', href: '#' },
    ],
  },
  {
    title: 'Socials',
    items: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Social 2', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#00488C',
        overflow: 'hidden',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <Image
        src="/footerplane.webp"
        alt=""
        width={260}
        height={210}
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 'clamp(130px, 14vw, 235px)',
          height: 'auto',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1150px',
          margin: '0 auto',
          padding: '48px 20px 120px',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.6fr]"
          style={{ columnGap: '40px', rowGap: '40px' }}
        >
          <div>
            <Link href="/" style={{ display: 'inline-flex', marginBottom: '12px' }}>
              <Image
                src="/tachologo.svg"
                alt="Tacho logo"
                width={120}
                height={36}
                style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
              />
            </Link>

            <p
              className="text-[0.78rem] md:text-[0.95rem]"
              style={{
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.45,
                marginBottom: '24px',
                fontWeight: 400,
              }}
            >
              {'\u00a9 2026 Tacho, Inc.'}
              <br />
              All rights reserved.
            </p>

            <div style={{ display: 'grid', rowGap: '10px' }}>
              <a
                href="tel:987654321"
                className="text-[0.82rem] md:text-[1.04rem]"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span aria-hidden="true">{'☎'}</span>
                987654321
              </a>
              <a
                href="mailto:info@tachoaviation.com"
                className="text-[0.82rem] md:text-[1.04rem]"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  wordBreak: 'break-all',
                }}
              >
                <span aria-hidden="true">{'✉'}</span>
                info@tachoaviation.com
              </a>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-nowrap lg:justify-between"
            style={{ gap: '32px' }}
          >
            {columns.map((col) => (
              <div key={col.title} style={{ minWidth: '0', overflow: 'hidden' }}>
                <p
                  className="text-[0.8rem] md:text-[1.02rem]"
                  style={{
                    color: '#41BEF0',
                    fontWeight: 500,
                    marginBottom: '8px',
                  }}
                >
                  {col.title}
                </p>
                <div style={{ display: 'grid', rowGap: '6px' }}>
                  {col.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[0.82rem] md:text-[1.03rem]"
                      style={{
                        color: '#ffffff',
                        fontWeight: 500,
                        textDecoration: 'none',
                        lineHeight: 1.5,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
