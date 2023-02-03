const http = require('http');
const fs = require("fs");
const html_data = fs.readFileSync('./index.html');

const port = process.env.PORT || 3000;

// Server Creation
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html_data)
});

// Server Listening
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});