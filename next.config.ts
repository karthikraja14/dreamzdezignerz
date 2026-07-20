import type { NextConfig } from "next";

// For GitHub Pages *project* sites the app is served from a sub-path
// (e.g. /dreamzdezignerz). The deploy workflow sets NEXT_PUBLIC_BASE_PATH.
// Locally it's empty so dev/build run at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out (required for GitHub Pages).
  output: "export",
  basePath,
  // Pages serves each route as a folder (/about/ -> /about/index.html).
  trailingSlash: true,
  images: {
    // GitHub Pages has no Image Optimization server, so serve images as-is.
    unoptimized: true,
  },
  // Strip the "X-Powered-By: Next.js" header.
  poweredByHeader: false,
};

export default nextConfig;
