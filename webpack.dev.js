const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = config.map(config => merge(config, {
    devServer: {
        proxy: {
            '/api': {
            	target: 'http://react-cdp-api.herokuapp.com/',
				secure: false,
				changeOrigin: true,
				pathRewrite: {'^/api' : ''}
			}
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true,
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader',
						options: {
							fix: true,
							configFile: path.join(__dirname, '/.eslintrc'),
							emitWarning: true,
							formatter: require('eslint/lib/formatters/stylish')
						}
					}
				]
			}
		]
	}
}));
