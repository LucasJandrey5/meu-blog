import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lucasjandrey.com",
      },
      {
        protocol: "https",
        hostname: "meu-blog-posts.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
