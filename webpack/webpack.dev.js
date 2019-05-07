const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: devMode ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
    }
};

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        sourceMap: true
    }
};

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                ]
            })
        ]
    }
};

module.exports = config.map(config => merge(config, {
	name: 'client',
	target: 'web',
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 3000,
    //     watchContentBase: true,
	// 	hot: true,
	// 	historyApiFallback: true
    // },
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
							configFile: path.join(__dirname, '../.eslintrc'),
							emitWarning: true,
							formatter: require('eslint/lib/formatters/stylish')
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
			},
			{
				test: /\.module\.scss$/,
				include: /src/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					CSSModuleLoader,
					postCSSLoader,
					'sass-loader'
				]
			}
		]
	}
}));
