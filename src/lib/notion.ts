// src/lib/notion.ts
// All Notion API calls — server-side only (no NEXT_PUBLIC_ prefix)

const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const NOTION_DB_ID = process.env.NOTION_DB_ID!;
const NOTION_VERSION = '2022-06-28';
const POSTS_PER_PAGE = 6;

const notionHeaders = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  'Notion-Version': NOTION_VERSION,
  'Content-Type': 'application/json',
};

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NotionPost {
  id: string;
  title: string;
  slug: string;
  date: string;       // ISO string or empty
  coverUrl: string;   // URL or '' (caller uses fallback)
}

export type NotionBlock = Record<string, unknown>;

// ─── Slug helper ─────────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // strip punctuation
    .replace(/[\s_]+/g, '-')    // spaces → hyphens
    .replace(/--+/g, '-')       // collapse double hyphens
    .replace(/^-+|-+$/g, '');   // trim leading/trailing hyphens
}

// ─── Extract helpers ─────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTitle(props: any): string {
  return props?.Title?.title?.[0]?.plain_text ?? 'Untitled';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractSlug(props: any, title: string): string {
  const raw: string = props?.slug?.rich_text?.[0]?.plain_text ?? '';
  return raw.trim() !== '' ? raw.trim() : slugify(title);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractDate(props: any): string {
  return props?.Date?.date?.start ?? '';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractCover(props: any): string {
  const files = props?.Cover?.files ?? [];
  if (files.length === 0) return '';
  const file = files[0];
  // Notion-hosted file
  if (file.type === 'file') return file.file?.url ?? '';
  // External URL
  if (file.type === 'external') return file.external?.url ?? '';
  return '';
}

// ─── API functions ────────────────────────────────────────────────────────────

/**
 * Fetch all published posts, sorted by Date descending.
 * Returns full list — caller slices for pagination.
 */
export async function getPublishedPosts(): Promise<NotionPost[]> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
    {
      method: 'POST',
      headers: notionHeaders,
      body: JSON.stringify({
        filter: {
          property: 'Published',
          checkbox: { equals: true },
        },
        sorts: [{ property: 'Date', direction: 'descending' }],
        page_size: 100,
      }),
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error('Notion API error (getPublishedPosts):', await res.text());
    return [];
  }

  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.results.map((page: any) => {
    const props = page.properties;
    const title = extractTitle(props);
    return {
      id: page.id,
      title,
      slug: extractSlug(props, title),
      date: extractDate(props),
      coverUrl: extractCover(props),
    };
  });
}

/**
 * Returns the POSTS_PER_PAGE constant so pages can use it
 * without importing a magic number separately.
 */
export { POSTS_PER_PAGE };

/**
 * Find a single post by its slug (checks both stored slug and auto-generated).
 */
export async function getPostBySlug(slug: string): Promise<NotionPost | null> {
  const all = await getPublishedPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

/**
 * Fetch all block children for a page — used to render post body.
 */
export async function getPageBlocks(pageId: string): Promise<NotionBlock[]> {
  const res = await fetch(
    `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
    {
      headers: notionHeaders,
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error('Notion API error (getPageBlocks):', await res.text());
    return [];
  }

  const data = await res.json();
  return data.results ?? [];
}
