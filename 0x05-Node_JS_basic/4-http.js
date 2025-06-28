const http = require('http');

const port = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

app.listen(PORT, HOST, () => {
});

module.exports = app;
