/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');

const libraryName = 'codecrumbs';
const outputFile = 'bundle.js';

const config = {
  entry: __dirname + '/js/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'stage-2'],
          plugins: [
            'transform-react-jsx',
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]
          ]
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('../../node_modules'),
      path.resolve(__dirname, 'js/'),
      path.resolve(__dirname, 'js/components/'),
      path.resolve(__dirname, 'js/store/'),
      path.resolve(__dirname, 'js/utils')
    ],
    extensions: ['.js']
  },
  mode: 'development'
};

module.exports = config;
