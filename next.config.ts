import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: "/Users/julierothschild/Desktop/portfolio",
  },
};

export default nextConfig;
