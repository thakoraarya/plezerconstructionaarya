/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });

    return config;
  },
}

module.exports = nextConfig