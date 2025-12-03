/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for Next.js <Image> to work statically
  },
};

module.exports = nextConfig;
