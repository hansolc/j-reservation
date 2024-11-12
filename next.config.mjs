/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v2/:path*",
        destination: `http://13.124.90.41:8080/:path*`,
      },
    ];
  },
};

export default nextConfig;
