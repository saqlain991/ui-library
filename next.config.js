/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com"], // Allow images from Unsplash
    unoptimized: true, // If you still want to disable image optimization
  },
};

module.exports = nextConfig;
