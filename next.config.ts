import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats for smaller payloads / faster loads.
    formats: ["image/avif", "image/webp"],
  },
  // Strip the "X-Powered-By: Next.js" header.
  poweredByHeader: false,
};

export default nextConfig;
