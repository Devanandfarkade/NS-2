/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nsbackend.strangled.net', // Your GCP backend server
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com', // GitHub assets domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
