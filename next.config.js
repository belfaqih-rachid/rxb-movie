/** @type {import('next').NextConfig} */
const nextConfig = {
  mode: "jit",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
};
