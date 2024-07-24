// next.config.mjs
const nextConfig = {
  env: {},
  reactStrictMode: true,
  experimental: {},
  webpack(config, { dev, isServer }) {
    // デフォルトの設定を使用するため、明示的なdevtool設定を削除
    return config;
  },
};

export default nextConfig;
