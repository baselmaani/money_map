/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  strictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  eslint: { ignoreDuringBuilds: true },
};
