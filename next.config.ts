import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to create a static HTML/CSS/JS build
  basePath: isProd ? '/Soto-Ayam-Kampung-Legend-Anggut' : '', // Required for GitHub Pages subpath
};

export default nextConfig;
