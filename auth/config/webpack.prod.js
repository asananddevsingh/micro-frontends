const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'authApp',
      filename: 'remoteEntry.js',
      exposes: {
        './authApp': './src/bootstrap',
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
