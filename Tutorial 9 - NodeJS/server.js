const http = require('http'); // Import Node.js core module
const server = http.createServer(function (req, res) {
    if (req.url == '/') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is home page.</p></body></html>');
        res.end();
    } else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    } else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    } else if (req.url == "/data") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World JSON" }));
        res.end();
    } else {
        res.write('<html><body><p>Invalid Request.</p></body></html>');
        res.end();
    }
});
server.listen(8080); //listen for any incoming requests
console.log('Node.js web server at port 8080 is running..');
