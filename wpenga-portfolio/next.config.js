/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
