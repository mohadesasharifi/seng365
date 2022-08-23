const http = require("http");
const host_name = '127.0.0.1';
const port = 8081;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content_type', 'text/plain')
    response.end('Hello World');
})

server.listen(port, host_name, ()=>{
    console.log('Server running at http://127.0.0.1:8081/');
});

