const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.config.js');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: devMode ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
    }
};

module.exports = config.map(config => merge(config, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'serverRenderer.js',
    publicPath: '.dist/',
    libraryTarget: "commonjs2"
},
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['isomorphic-style-loader', 'css-loader']
          }),
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          CSSModuleLoader,
          'sass-loader'

        ]
      }
    ]
  }
}));
