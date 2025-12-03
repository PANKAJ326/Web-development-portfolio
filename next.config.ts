import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      fs: false,
      path: false,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;
