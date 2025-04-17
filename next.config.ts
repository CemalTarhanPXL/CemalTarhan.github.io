/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Schakelt Image Optimization uit
  },
};

module.exports = nextConfig;