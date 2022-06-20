/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    
    ignoreBuildErrors: true,
  }
}

module.exports = {
  nextConfig,
  images: {
    domains: ['cdn2.thecatapi.com'],
  }
}
