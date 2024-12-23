/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Digiwomb',
    description: 'An unofficial store for Kasm supported workspaces.',
    icon: 'https://avatars.githubusercontent.com/u/190783148',
    listUrl: 'https://digiwomb.github.io/kasm-registry/',
    contactUrl: 'https://github.com/digiwomb/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
