const webpack = require('webpack');

const data = [
    { id: 1, type: "Core concepts lecture" },
    { id: 2, type:"Webpack lecture" },
    { id: 3, type: "Components lecture" },
    { id: 4, type: "Testing lecture" },
    { id: 5, type: "Flux + Redux" },
    { id: 6, type: "Routing" },
    { id: 7, type: "Server Side Rendering" },
    { id: 8, type: "Useful libraries" },
];

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        before: (app) => {
            app.get('/data', (req, res) => res.send({ data }));
        },
    }
};
