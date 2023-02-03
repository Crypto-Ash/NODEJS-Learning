const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

// Server Creation
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1 style="color:blue;text-align:center;"> Yash </h1><button style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;border-radius: 12px;" onclick="myFunction()">Go To About!</button><p id="demo"></p><script>function myFunction() {  alert("Redirecting You TO About Page..."); window.location.href="http://localhost:3000/about";}</script>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1 style="color:blue;text-align:center;"> Yash </h1><h4 style="color:red;text-align:center;">ABOUT</h4>')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1 style="color:red;">Error!</h1>');
    };
});

// Server Listening
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});