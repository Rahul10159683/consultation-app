/** @type {import('next').NextConfig} */
const basePath = "/consultation-app";

const nextConfig = {
  reactStrictMode: false,
  basePath: basePath,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  devIndicators: false,
};

module.exports = nextConfig;
