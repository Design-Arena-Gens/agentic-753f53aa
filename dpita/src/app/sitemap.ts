import type { MetadataRoute } from 'next';

const baseUrl = 'https://dpita.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
