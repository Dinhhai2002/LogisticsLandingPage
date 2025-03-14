/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['resize.sudospaces.com']
  }
}

module.exports = nextConfig 