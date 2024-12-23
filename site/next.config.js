/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'An unofficial store for Kasm supported workspaces.',
    icon: 'https://registry.kasmweb.com/1.1/_next/static/media/registry-logo.0c581e19.png',
    listUrl: 'https://digiwomb.github.io/kasm-registry/',
    contactUrl: 'https://github.com/digiwomb/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
