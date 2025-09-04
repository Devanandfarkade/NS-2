/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nsbackend.strangled.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
