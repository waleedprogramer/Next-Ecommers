import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    domains: ['fakestoreapi.com','dummyjson.com',"via.placeholder.com"]
    ,
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/**',
      },
    ],
  },
  };

export default nextConfig;
