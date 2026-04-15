const cors_proxy = require('cors-anywhere');
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Permite qualquer origem (ou coloque o link do seu github pages aqui)
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Proxy rodando em ' + host + ':' + port);
});
