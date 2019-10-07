var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "<ol>" + "<li>" + q.year + "</li>" + " " + "<li>" + q.month + "</li>" + "</ol>" + " " + "<h1 stlye='color:red;'>" + q.day + "</h1>";
    res.end(txt);
}).listen(8080);
