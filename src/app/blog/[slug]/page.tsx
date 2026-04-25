import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getPublishedPosts,
  getPostBySlug,
  getPageBlocks,
} from '@/lib/notion';
import NotionRenderer from '@/components/NotionRenderer';

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// ── Static params: pre-build all published post pages at deploy time ──────────
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// ── Metadata: title + OG tags from Notion ────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: `Read "${post.title}" on Tacho Aviation Insights.`,
    openGraph: {
      title: post.title,
      images: post.coverUrl ? [post.coverUrl] : [],
    },
  };
}

// ─── Word count → estimated read time ────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function estimateReadTime(blocks: any[]): string {
  let wordCount = 0;
  for (const block of blocks) {
    const type: string = block.type;
    const richText = block[type]?.rich_text ?? [];
    for (const t of richText) {
      wordCount += (t.plain_text ?? '').split(/\s+/).filter(Boolean).length;
    }
  }
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const blocks = await getPageBlocks(post.id);
  const readTime = estimateReadTime(blocks);

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <main style={{ backgroundColor: '#F2F6F9', minHeight: '100vh' }}>
      {/* ── Hero / Cover ── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '50vh',
            overflow: 'hidden',
          }}
        >
          <Image
            src={post.coverUrl || '/bloghero.webp'}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,20,60,0.35) 0%, rgba(0,20,60,0.72) 100%)',
            zIndex: 1,
          }}
        />

        {/* Hero text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 24px 48px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: '820px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              textShadow: '0 2px 14px rgba(0,0,0,0.3)',
              marginBottom: '14px',
            }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            {formattedDate && <span>{formattedDate}</span>}
            {formattedDate && (
              <span style={{ opacity: 0.5, fontSize: '0.6rem' }}>●</span>
            )}
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '56px 48px 100px',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        }}
      >
        {/* Back link */}
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#00488C',
            fontSize: '0.82rem',
            fontWeight: 500,
            textDecoration: 'none',
            marginBottom: '40px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="#00488C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Insights
        </Link>

        {/* Notion blocks */}
        <NotionRenderer blocks={blocks} />
      </div>
    </main>
  );
}
