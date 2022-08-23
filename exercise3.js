http.createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    const parameters = url.searchParams;
    // Write the response
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(`Here is your data: ${parameters}`);
}).listen(8081);