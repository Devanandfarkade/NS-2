/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    domains: ["nsbackend.strangled.net"],
  },
};

export default nextConfig;
