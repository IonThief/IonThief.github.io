import { MetadataRoute } from 'next';

const BASE_URL = 'https://ionthief.github.io';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
