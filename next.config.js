/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'defenceathletics.com',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
