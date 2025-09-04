import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp'],
  },
  sassOptions: {
    additionalData: `@import "@/scss/mixins";`,
  },
};

export default withNextIntl(nextConfig);