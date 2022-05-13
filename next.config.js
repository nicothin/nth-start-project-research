/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  // basePath: '/',
  // compress: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
