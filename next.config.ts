import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set asset prefix for the /shadcn path
  assetPrefix: "/shadcn",

  // Handle static assets routing
  async rewrites() {
    return {
      beforeFiles: [
        {
          // This ensures static assets are properly served
          source: "/shadcn/_next/:path*",
          destination: "/_next/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // Allow the main domain to make server action calls
  experimental: {
    serverActions: {
      allowedOrigins: [
        "windpalette.com",
        "www.windpalette.com",
        // Include localhost for development
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
