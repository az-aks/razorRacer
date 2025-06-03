module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: 'file-loader',
    });
    return config;
  },
};