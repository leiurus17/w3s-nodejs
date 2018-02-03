var http = require('http');

// Create a server object
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url);
	res.end(); // End the response
}).listen(8080); // The server object listens on port 8080