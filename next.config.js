/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Add this to fix the routes manifest error
  skipTrailingSlashRedirect: true,
  // Ensure static export works properly
  distDir: 'out',
}

module.exports = nextConfig