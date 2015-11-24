// Load module dependencies
var http = require('http')

http.createServer(function(request, response) {
        response.end("Hola");
}).listen(80);

console.log('node server running on port 3000');