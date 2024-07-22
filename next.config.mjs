// next.config.mjs
const nextConfig = {
  env: {},
  reactStrictMode: true,
  experimental: {},
  webpack(config, { dev, isServer }) {
    if (dev) {
      // 開発環境ではソースマップを有効にする
      config.devtool = "source-map";
    } else {
      // プロダクション環境ではソースマップを無効にする
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
