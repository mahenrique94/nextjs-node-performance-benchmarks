/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    appDir: true,
  },
  headers: () => [{
    source: '/',
    headers: [{
      key: 'Cache-Control',
      value: 'no-store'
    }],
  }],
  generateEtags: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
