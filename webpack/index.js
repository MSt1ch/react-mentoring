const clientConfig = require('./webpack.dev');
const serverConfig = require('./webpack.server');

module.exports = [clientConfig[0], serverConfig[0]];
