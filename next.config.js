/** @type {import('next').NextConfig} */

const basePath = process.env?.MODE === 'deploy' ? '/nth-start-project-research' : '';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: {
      exclude: ['error', 'log'],
    },
  },
  basePath,
  assetPrefix: basePath,
  // compress: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
