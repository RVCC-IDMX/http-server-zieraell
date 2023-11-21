const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); // status code HTTP 200 / OK

    let dataObj = {"id": 123, "name":"Bob", "email":"bob@work.org"};
    let data = JSON.stringify(dataObj);

    res.end(data);
});

const port = 4000;

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})