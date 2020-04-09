const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><head><title>Enter message</title></title><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if (url === '/received') {
        res.write('<html><head><title>Message sent!</title></title><body><h1>Message received</h1></body></html>');
        return res.end();
    }
    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message); -synchronous (blocking)
            fs.writeFile('message.txt', message, (err) => {
                // res.statusCode=302;
                // res.setHeader('Location', '/');
                res.writeHead(302, { 'Location': '/received' });
                return res.end();
            });

        });
    }

}

module.exports = {
    handler: requestHandler
};