import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  title: string;
  slug: string;
}

interface FooterProps {
  blogPosts?: BlogPost[];
}

const staticColumns = [
  {
    title: 'About Us',
    items: [
      { label: 'Partners', href: '#', hidden: true },
      { label: 'FAQ', href: '/contact#contact-form' },
      { label: 'Contact', href: '/contact#contact-form' },
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
    title: 'Socials',
    items: [
      { label: 'LinkedIn', href: '#' },
    ],
  },
];

export default function Footer({ blogPosts = [] }: FooterProps) {
  // Build columns: inject Blog column between Services and Socials if posts exist
  const blogColumn = blogPosts.length > 0
    ? [{
        title: 'Blog',
        titleHref: '/blog#listings',
        items: blogPosts.map(p => ({ label: p.title, href: `/blog/${p.slug}` })),
      }]
    : [];

  const columns = [
    staticColumns[0], // About Us
    staticColumns[1], // Services
    ...blogColumn,
    staticColumns[2], // Socials
  ];

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
          maxWidth: '1300px',
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
                {'titleHref' in col && col.titleHref ? (
                  <Link
                    href={col.titleHref}
                    className="text-[0.8rem] md:text-[1.02rem]"
                    style={{
                      color: '#41BEF0',
                      fontWeight: 500,
                      marginBottom: '8px',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    {col.title}
                  </Link>
                ) : (
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
                )}
                <div style={{ display: 'grid', rowGap: '6px' }}>
                  {col.items.filter(item => !('hidden' in item && item.hidden)).map((item) => (
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
