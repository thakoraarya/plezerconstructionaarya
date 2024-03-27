/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    // Add PDF loader
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader?name=[path][name].[ext]',
    });
    return config;
  },
};