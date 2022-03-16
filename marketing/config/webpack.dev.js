const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
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

module.exports = merge(commonConfig, devConfig);
