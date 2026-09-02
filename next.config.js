/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.huanfalogistics.com" }],
        destination: "https://huanfalogistics.com/:path*",
        permanent: true,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals.push("cloudflare:sockets");
      config.externalsType = "commonjs";
    }
    return config;
  },
};
module.exports = nextConfig;
