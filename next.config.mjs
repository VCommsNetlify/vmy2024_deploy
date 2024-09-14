/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ['en', 'ar', 'id', 'fr', 'ru', 'si', 'ta', 'vi'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
