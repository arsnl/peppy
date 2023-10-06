const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);
