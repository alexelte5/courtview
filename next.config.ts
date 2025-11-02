import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/teams",
        permanent: true
      }
    ]
  },
  images: {
    domains: ['external-content.duckduckgo.com']
  },
};

export default nextConfig;
