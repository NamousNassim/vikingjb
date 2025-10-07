import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily ignore ESLint errors during builds for deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep TypeScript checks enabled
    ignoreBuildErrors: false,
  },
  // Optimize for Vercel deployment
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Handle static file serving
  trailingSlash: false,
  // Ensure proper handling of dynamic routes
  poweredByHeader: false,
};

export default nextConfig;