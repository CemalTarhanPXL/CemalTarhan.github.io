/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Schakelt statische export in
  basePath: isProd ? '/jouw-repository-naam' : '', // Geef de repository-naam op voor GitHub Pages
  assetPrefix: isProd ? '/jouw-repository-naam/' : '', // Voor statische assets
  images: {
    unoptimized: true, // Schakelt standaard afbeeldingsoptimalisatie uit
  },
};

export default nextConfig;