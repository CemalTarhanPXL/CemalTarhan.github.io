/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Schakelt statische export in
  basePath: isProd ? '/CemalTarhanPXL.github.io' : '', // Geef de repository-naam op voor GitHub Pages
  assetPrefix: isProd ? '/CemalTarhanPXL.github.io' : '', // Voor statische assets
  images: {
    unoptimized: true, // Schakelt standaard afbeeldingsoptimalisatie uit
  },
};

export default nextConfig;