const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketingApp',
      filename: 'remoteEntry.js',
      exposes: {
        './marketingApp': './src/bootstrap.js',
      },
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: '17.0.2',
      //   },
      // },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
