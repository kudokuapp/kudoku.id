/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pbs.twimg.com'],
  },

  // This is dangerous, please see
  // https://github.com/vercel/next.js/issues/41884
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

module.exports = nextConfig;
