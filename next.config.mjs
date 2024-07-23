// next.config.mjs
const nextConfig = {
  env: {},
  reactStrictMode: true,
  experimental: {},
  webpack(config, { dev, isServer }) {
    if (dev) {
      config.devtool = "source-map";
    } else {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
