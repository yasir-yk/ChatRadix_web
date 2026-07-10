import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ChatRadix_web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
