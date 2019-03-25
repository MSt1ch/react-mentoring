const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(
        ['/api'],
        {
            target: 'http://react-cdp-api.herokuapp.com/',
            changeOrigin: true,
            secure: false,
            autoRewrite: true
        })
    );
};
