/** @type {import('next').NextConfig} */

const config = require('./nth/config.js');
const basePath = process.env?.MODE === 'deploy' ? config.basePath : '';

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
