/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
}

module.exports = nextConfig
