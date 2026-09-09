import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  output: process.env.VERCEL ? undefined : 'standalone',
};

export default nextConfig;
