import { getPublishedPosts } from '@/lib/notion';
import FooterClientWrapper from '@/components/FooterClientWrapper';

export default async function FooterWrapper() {
  const allPosts = await getPublishedPosts();
  const blogPosts = allPosts.slice(0, 3).map(p => ({ title: p.title, slug: p.slug }));

  return <FooterClientWrapper blogPosts={blogPosts} />;
}
