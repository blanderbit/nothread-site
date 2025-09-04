import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/utils/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // allow: "/",
      disallow: '/',
      userAgent: '*',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
