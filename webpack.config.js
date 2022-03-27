const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (argv) => {
  const isDev = argv.env === 'dev';
  const mode = isDev ? 'development' : 'production';
  
  const webpackPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
    ];

    if (isDev) {
      plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
  };

  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: isDev,
      open: isDev,
    },
    devtool: isDev ? 'cheap-module-source-map' : false,
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    mode,
    plugins: webpackPlugins(),
  };
};