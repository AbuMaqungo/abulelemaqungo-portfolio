/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE output: 'export' - Let Vercel handle the rendering automatically
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig