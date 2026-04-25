import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPublishedPosts, POSTS_PER_PAGE } from '@/lib/notion';

export const metadata: Metadata = {
  title: 'Insights & Blog',
  description:
    'Read the latest news, regulatory updates, and expert insights regarding aviation leasing, technical inspections, and asset lifecycles.',
};

export const revalidate = 60;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));

  const allPosts = await getPublishedPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const posts = allPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-[#F2F6F9]">
      {/* ── Hero ── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/bloghero.webp"
          alt="Blog"
          width={1920}
          height={800}
          priority
          sizes="100vw"
          className="w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-0 object-cover"
          style={{ display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 32, 90, 0.4)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '115px',
          }}
        >
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
            }}
          >
            Insights from
            <br />
            Tacho Aviation
          </h1>
          <p
            className="text-center"
            style={{
              color: '#ebf4f8',
              marginTop: '16px',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Stay updated with the latest industry trends and expert analysis.
          </p>
        </div>
      </div>

      {/* ── Blog listing ── */}
      <div
        id="listings"
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '72px 48px 96px',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        }}
      >
        {/* Section heading */}
        <h2
          className="text-[1.75rem] sm:text-[2.2rem] md:text-[2.9rem]"
          style={{
            color: '#00488C',
            fontWeight: 600,
            marginBottom: '8px',
            lineHeight: 1.10,
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          Blogs
        </h2>
        <p
          style={{
            color: '#545352',
            fontSize: '0.92rem',
            marginBottom: '48px',
            fontWeight: 400,
          }}
        >
          Stay informed with articles from our aviation experts:
        </p>

        {/* Empty state */}
        {posts.length === 0 && (
          <p
            style={{
              color: '#7a8a9a',
              fontSize: '1rem',
              textAlign: 'center',
              padding: '60px 0',
            }}
          >
            No posts published yet. Check back soon.
          </p>
        )}

        {/* Cards grid */}
        {posts.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '32px 28px' }}
          >
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    transition: 'box-shadow 0.22s ease, transform 0.22s ease',
                    height: '100%',
                  }}
                  className="hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Cover image */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={post.coverUrl || '/blogimg.webp'}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '16px 18px 18px' }}>
                    <p
                      style={{
                        color: '#0d1b2a',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        lineHeight: 1.35,
                        marginBottom: '12px',
                        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                      }}
                    >
                      {post.title}
                    </p>

                    {/* Date + Read More */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #e8edf2',
                        paddingTop: '10px',
                      }}
                    >
                      <span
                        style={{
                          color: '#7a8a9a',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                        }}
                      >
                        {post.date
                          ? new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          : ''}
                      </span>
                      <span
                        style={{
                          color: '#00488C',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                        }}
                      >
                        Read More
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18l6-6-6-6"
                            stroke="#00488C"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '64px',
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}`}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: p === safePage ? 'none' : '1px solid #d0d9e3',
                  backgroundColor: p === safePage ? '#00488C' : 'transparent',
                  color: p === safePage ? '#ffffff' : '#545352',
                  fontSize: '0.85rem',
                  fontWeight: p === safePage ? 600 : 400,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'background-color 0.18s ease, color 0.18s ease',
                }}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
