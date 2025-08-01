// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**', // match any image path
      },
    ],
  },
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
