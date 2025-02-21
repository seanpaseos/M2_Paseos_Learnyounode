const http = require('http');
const { URL } = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`);
    const pathname = url.pathname;
    const isoTime = url.searchParams.get('iso');

    if (!isoTime) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing iso query parameter' }));
    }

    const date = new Date(isoTime);
    let result;

    if (pathname === '/api/parsetime') {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    } else if (pathname === '/api/unixtime') {
        result = { unixtime: date.getTime() };
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Not found' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});

server.listen(port);
