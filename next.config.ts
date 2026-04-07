import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org"],
  },

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);