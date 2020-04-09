//Studying response object

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>First Page</title></title><body>Hello from NodeJS</body></html>');
    res.end();
});

server.listen(3000);