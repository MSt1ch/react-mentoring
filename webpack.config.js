const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

module.exports = [
    {
        entry: './src/index.js',
        mode: 'development',
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js',
            chunkFilename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-react"]
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /\.module\.scss$/,
                    use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
                },
                {
                    test: /\.module\.scss$/,
                    use: [
                        'style-loader',
                        CSSModuleLoader,
                        postCSSLoader,
                        'sass-loader'
                    ]
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
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        }
    }
];
