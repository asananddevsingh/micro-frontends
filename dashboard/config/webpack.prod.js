const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboardApp',
      filename: 'remoteEntry.js',
      exposes: {
        './dashboardApp': './src/bootstrap',
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
