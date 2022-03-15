module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // include: '',
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
            '@babel/preset-env',
          ],
        },
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
        },
      },
    ],
  },
};
