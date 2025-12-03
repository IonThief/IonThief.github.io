import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

// 1. Define strict types for your frontmatter
export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export function getSlugs() {
  if (!fs.existsSync(POSTS_PATH)) return [];

  const files = fs.readdirSync(POSTS_PATH);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

export function getPost(slug: string): Post {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(source);

  return {
    slug,
    content,
    // 2. Cast the loose 'data' object to our strict 'PostMeta' type
    meta: data as PostMeta,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getSlugs();
  return slugs.map((slug) => getPost(slug));
}
