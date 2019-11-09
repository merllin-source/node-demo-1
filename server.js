var http = require('http');

http.createServer(function (request, response) {
    var path = request.url
    if (path == '/style.css') {
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{background-color: #ddd;}h1{color: red;}')
        response.end()
    } else if (path == '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write('<!DOCTYPE>\n<html>' +
            '<head><link rel="stylesheet" href="/style.css">' +
            '</head><body>' +
            '<h1>你好</h1>' +
            '<script src="/script.html"></script>' +
            '</body></html>')
        response.end()
    } else {
        response.statusCode = 404
        response.end()
    }
}).listen(80);

console.log('Server running at http://127.0.0.1:80/');
