/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' temporarily to test
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig