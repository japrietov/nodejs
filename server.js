var express = require('express');
var app = express();
var http = require('http');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0");

app.get('/', function (req, res) {
  res.send('url: ' + req.query.url);
  var parts = url.parse(req.url, true);
var query = parts.query;
// Load image from internet
var stream = request(query.url);
var bufs = [];
// TODO: Event fires when data arrives.
stream.on('data', function(data) {
// TODO: How to add an element to an array
bufs.push(data);
});
// TODO: Event fires when there will be no more data to read.
stream.on('end', function() {
var buf = Buffer.concat(bufs);
gm(buf)
.resize(100)
.toBuffer(function (err, buffer) {
if (err) return console.log(err);
// http response
res.end(buffer);
})
});
  
  
});

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});