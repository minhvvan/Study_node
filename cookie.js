const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set_Cookie': 'mycookie=test'});
    res.end('Hello Cookie');
})
.listen(9001, () => {
    console.log('9001포트 서버 대기중....');
});