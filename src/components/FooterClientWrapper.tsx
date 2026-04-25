'use client';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '360px', backgroundColor: '#00488C' }} />,
});

interface BlogPost {
  title: string;
  slug: string;
}

export default function FooterClientWrapper({ blogPosts }: { blogPosts: BlogPost[] }) {
  return <Footer blogPosts={blogPosts} />;
}
