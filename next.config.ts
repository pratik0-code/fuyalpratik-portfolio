import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // e.g., for hero background, team photos
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // e.g., for random images
      },
    ],
  },
};

export default nextConfig;
