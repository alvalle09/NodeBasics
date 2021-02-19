
const http = require('http');
let portNum = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 4]));
        res.end();
    }
});

server.listen(portNum);

console.log('Listenin on port ' + portNum);