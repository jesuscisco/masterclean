import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable stricter React checks in development
  reactStrictMode: true,
  // Allow production builds to succeed even if there are ESLint errors.
  // This is helpful for CI/Vercel while you iterate on linting rules.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
