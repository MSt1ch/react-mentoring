const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: devMode ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
	},
};

const CSSLoader = {
	loader: 'css-loader',
	options: {
		modules: false,
		sourceMap: true,
	},
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
					'not ie < 9',
				],
			}),
		],
	},
};

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:3000'
		},
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		watchContentBase: true,
		progress: true,
		hot: true,
	},
	devtool: devMode ? 'source-map' : false,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' },
					{
						loader: 'eslint-loader',
						options: {
							fix: devMode,
							configFile: path.join(__dirname, '/.eslintrc'),
							emitWarning: devMode,
							formatter: require('eslint/lib/formatters/stylish')
						},
					},
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader'],
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					CSSModuleLoader,
					postCSSLoader,
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: devMode,
							publicPath: __dirname + '/dist'
						},
					},
				],
			},

		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
};
