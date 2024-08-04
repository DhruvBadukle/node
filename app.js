const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Dhruv Badukle\n');
});

server.listen(3000);
