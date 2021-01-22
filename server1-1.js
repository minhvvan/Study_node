const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>')
})
.listen(9000);
server.on('listening', () => {
    console.log('9000 포트 서버 대기...');
});

server.on('error', (err) => {
    console.log(err);
});