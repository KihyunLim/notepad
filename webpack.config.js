const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');  // 정적파일 복사!!
const Dotenv = require('dotenv-webpack');

const ASSET_PATH = '/public';

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      filename : 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ]
    }),
    new Dotenv(),
    /* new HtmlWebpackPlugin({
      template: 'view/write.html',
      filename : 'write.html',
    }),
    new HtmlWebpackPlugin({
      template: 'view/detail.html',
      filename : 'detail.html',
    }), */
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(m?js|jsx|tsx|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                'babel-plugin-root-import',
                {
                  rootPathSuffix: './',
                  rootPathPrefix: '@/'
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
  output: {
    // 실제 코드가 변경됐을 때만 hash값이 변경
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[path][name]_[contenthash][ext]',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};