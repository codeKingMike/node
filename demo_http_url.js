var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
    console.log(req.url);
}).listen(8080);