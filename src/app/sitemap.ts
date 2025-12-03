import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

const BASE_URL = 'https://ionthief.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes];
}
