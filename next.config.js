/** @type {import('next').NextConfig} */
const basePath = "/consultation-app";

const nextConfig = {
  reactStrictMode: false,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  devIndicators: false,
};

module.exports = nextConfig;
