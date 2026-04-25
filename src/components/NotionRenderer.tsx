'use client';

import Image from 'next/image';
import { NotionBlock } from '@/lib/notion';

// ─── Rich text renderer ───────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RichText({ texts }: { texts: any[] }) {
  if (!texts || texts.length === 0) return null;
  return (
    <>
      {texts.map((t, i) => {
        let node: React.ReactNode = t.plain_text;
        if (t.annotations?.bold) node = <strong key={i}>{node}</strong>;
        if (t.annotations?.italic) node = <em key={i}>{node}</em>;
        if (t.annotations?.code)
          node = (
            <code
              key={i}
              style={{
                backgroundColor: '#e8edf2',
                padding: '1px 5px',
                borderRadius: '4px',
                fontSize: '0.85em',
                fontFamily: 'var(--font-geist-mono), monospace',
              }}
            >
              {node}
            </code>
          );
        if (t.href)
          node = (
            <a
              key={i}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00488C', textDecoration: 'underline' }}
            >
              {node}
            </a>
          );
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}

// ─── Individual block renderers ───────────────────────────────────────────────

const blockStyles = {
  p: {
    color: '#3a3a3a',
    fontSize: '1rem',
    lineHeight: 1.75,
    marginBottom: '20px',
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
    fontWeight: 400,
  } as React.CSSProperties,

  h1: {
    color: '#00488C',
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    marginTop: '40px',
    marginBottom: '16px',
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
  } as React.CSSProperties,

  h2: {
    color: '#0d1b2a',
    fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
    fontWeight: 600,
    lineHeight: 1.25,
    marginTop: '36px',
    marginBottom: '14px',
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
  } as React.CSSProperties,

  h3: {
    color: '#0d1b2a',
    fontSize: '1.1rem',
    fontWeight: 600,
    lineHeight: 1.3,
    marginTop: '28px',
    marginBottom: '10px',
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
  } as React.CSSProperties,

  li: {
    color: '#3a3a3a',
    fontSize: '1rem',
    lineHeight: 1.75,
    marginBottom: '6px',
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
  } as React.CSSProperties,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Block({ block }: { block: any }) {
  const type: string = block.type;
  const data = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p style={blockStyles.p}>
          <RichText texts={data?.rich_text ?? []} />
        </p>
      );

    case 'heading_1':
      return (
        <h2 style={blockStyles.h1}>
          <RichText texts={data?.rich_text ?? []} />
        </h2>
      );

    case 'heading_2':
      return (
        <h3 style={blockStyles.h2}>
          <RichText texts={data?.rich_text ?? []} />
        </h3>
      );

    case 'heading_3':
      return (
        <h4 style={blockStyles.h3}>
          <RichText texts={data?.rich_text ?? []} />
        </h4>
      );

    case 'bulleted_list_item':
      return (
        <ul style={{ paddingLeft: '24px', marginBottom: '8px' }}>
          <li style={blockStyles.li}>
            <RichText texts={data?.rich_text ?? []} />
          </li>
        </ul>
      );

    case 'numbered_list_item':
      return (
        <ol style={{ paddingLeft: '24px', marginBottom: '8px' }}>
          <li style={blockStyles.li}>
            <RichText texts={data?.rich_text ?? []} />
          </li>
        </ol>
      );

    case 'quote':
      return (
        <blockquote
          style={{
            borderLeft: '4px solid #274AAB',
            paddingLeft: '20px',
            margin: '24px 0',
            color: '#4a5568',
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          <RichText texts={data?.rich_text ?? []} />
        </blockquote>
      );

    case 'code':
      return (
        <pre
          style={{
            backgroundColor: '#1e2a3a',
            color: '#e8f0fe',
            borderRadius: '10px',
            padding: '20px 24px',
            overflowX: 'auto',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            marginBottom: '24px',
            fontFamily: 'var(--font-geist-mono), monospace',
          }}
        >
          <code>
            <RichText texts={data?.rich_text ?? []} />
          </code>
        </pre>
      );

    case 'divider':
      return (
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #d0d9e3',
            margin: '36px 0',
          }}
        />
      );

    case 'image': {
      const src =
        data?.type === 'file'
          ? data?.file?.url
          : data?.external?.url ?? '';
      const caption = data?.caption?.[0]?.plain_text ?? '';
      if (!src) return null;
      return (
        <figure style={{ margin: '32px 0' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '16/9',
            }}
          >
            <Image
              src={src}
              alt={caption || 'Blog image'}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 800px) 100vw, 760px"
            />
          </div>
          {caption && (
            <figcaption
              style={{
                textAlign: 'center',
                color: '#7a8a9a',
                fontSize: '0.8rem',
                marginTop: '8px',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              }}
            >
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      // Silently skip unsupported block types
      return null;
  }
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function NotionRenderer({ blocks }: { blocks: NotionBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return (
      <p style={{ color: '#7a8a9a', fontStyle: 'italic' }}>
        No content yet.
      </p>
    );
  }

  return (
    <div>
      {blocks.map((block) => (
        <Block key={(block as { id: string }).id} block={block} />
      ))}
    </div>
  );
}
