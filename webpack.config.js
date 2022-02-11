const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('yargs').argv;

const mode = argv.mode;

module.exports = {
  mode,
  devtool: mode === 'production' ? 'hidden-source-map' : 'eval',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].js.map',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@types': path.resolve(__dirname, 'src/types/index.ts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@api': path.resolve(__dirname, 'src/common/api'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@utils': path.resolve(__dirname, 'src/common/utils'),
      '@page': path.resolve(__dirname, 'src/page'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpe?g|gif|otf|ttf)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    static: [
      {
        directory: path.resolve(__dirname, './public'),
      },
    ],
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
      },
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      hash: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
