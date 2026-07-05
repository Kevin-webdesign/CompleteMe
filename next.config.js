/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/product_details",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
